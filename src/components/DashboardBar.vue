<template>
<div class="h-flex justify-content-center align-items-center mt-1 mx-1">
  <AppInputIcon 
    @click="refreshSerialPorts"
    icon="sync-alt" 
    title="Refresh Ports"
  />
  <span class="pr-1"/>
  <AppInputSelect
    v-model="$store.state.selectedPort"
    :options="$store.state.ports"
    class="port-select"
  />
  <span class="pr-1"/>
  <AppInputIcon 
    v-if="!$store.state.isConnected"
    @click="connectPacemaker"
    icon="handshake" 
    title="Connect to Pacemaker"
  />
  <AppInputIcon 
    v-else
    @click="disconnectPacemaker"
    icon="handshake-slash" 
    title="Disconnect Pacemaker"
  />
  <span class="pr-4"/>
  <AppInputIcon 
    @click="uploadParameters"
    icon="upload" 
    title="Upload Parameters"
  />
  <span class="pr-1"/>
  <AppInputIcon
    @click="downloadParameters"
    icon="download"
    title="Download Parameters"
  />
</div>
</template>

<script>
import mode from '@/utils/mode'
import post from '@/utils/post'
import AppInputIcon from '@/components/AppInputIcon'
import AppInputSelect from '@/components/AppInputSelect'
import SerialPort from 'serialport'
import ByteLength from '@serialport/parser-byte-length'

export default {
  name: "DashboardBar",
  components: {
    AppInputIcon,
    AppInputSelect,
  },
  data: () => ({
    isConnected: false,
  }),
  methods: {
    refreshSerialPorts: async function() {
      const ports = await SerialPort.list()
      this.$store.commit('set', {
        ports: ports.map(port => ({
          name: `${port.manufacturer} (${port.path})`,
          value: port.path
        })),
      })
      this.pushLog(`Found ${this.$store.state.ports.length} port(s)`)
    },
    // Connect to the selected port in the drop-down
    connectPacemaker: function() {
      // Will fail if no serial port is selected in the drop-down
      try {

        const port = new SerialPort(
          this.$store.state.selectedPort,
          { 
            baudRate: 115200
          },
          (e) => {
            if (e) {
              this.pushLog('Error: Selected serial port not found')
            }
            else {
              this.$store.commit('set', {isConnected: true})
              this.pushLog(`${this.$store.state.selectedPort} connected`)
            }
          }
        )

        // Behaviour if the serial port is disconnected, either intentionally or abruptly
        port.on('close', () => {
          this.$store.commit('set', {isConnected: false})
          if (this.$store.state.connectedPort) {
            this.pushLog(`${port.path} disconnected`)
          }
        })

        // The parser waits for a payload of 98 bytes before releasing the buffer to the program
        const parser = port.pipe(new ByteLength({length: 98}))
        parser.on('data', (buffer) => {
          // Flush any additional unexpected values from the buffer
          port.flush()

          // Deconstruct the Buffer into numerical parameter values 
          this.$store.state.pacemakerBundle.created_at = (new Date()).getTime()
          Object.entries(mode.parameters).map(([key, val]) => {
            // 16 bit integer
            if (val.bytes === 2) {
              this.$store.state.pacemakerBundle[key] = buffer.slice(val.start, val.start+2).readInt16LE()
            }
            // 64 bit double
            else if (val.bytes === 8) {
              this.$store.state.pacemakerBundle[key] = buffer.slice(val.start, val.start+8).readDoubleLE()
            }
          })

          this.pushLog('Downloaded pacemaker parameters')
        })

        // Push the serial port connection to store
        this.$store.commit('set', { connectedPort: port })

      } catch(e) {
        this.pushLog('Error: No serial port selected')
      }
    },
    disconnectPacemaker: function() {
      this.$store.state.connectedPort.close()
    },
    uploadParameters: async function() {
      if (!this.$store.state.isConnected) {
        return this.pushLog('Error: No serial port connected')
      }
      // Compile and send the buffer to send to the pacemaker
      let uploadBuffer = Buffer([ 0x16, 0x55, ...Array(82).fill(0x00) ])
      Object.entries(mode.parameters).map(([key, val]) => {
        // 16 bit integer
        if (val.bytes === 2) {
          uploadBuffer.writeIntLE(this.$store.state.newBundle[key], val.start+2, 2)
        }
        // 64 bit double
        else if (val.bytes === 8) {
          uploadBuffer.writeDoubleLE(this.$store.state.newBundle[key], val.start+2)
        }
      })
      this.$store.state.connectedPort.write(uploadBuffer)
      
      // Upload the new bundle to the database
      const response = await post('bundle/addnew', {
        id: this.$store.state.user._id,
        ...this.$store.state.newBundle
      })

      // A successful API call returns the new bundle that was created
      if (response.data.success) {
        this.$store.commit('unshift', { bundles: response.data.bundle })
      }

      // Log the successful operation
      this.pushLog(`Uploaded parameters ${response.data.bundle.name} to pacemaker`)

      // For redundancy, download the parameters that were just uploaded
      this.downloadParameters()
    },
    downloadParameters: function() {
      if (!this.$store.state.isConnected) {
        return this.pushLog('Error: No serial port connected')
      }
      this.$store.state.pacemakerBundle.MODE = null
      this.$store.state.connectedPort.write(Buffer([ 0x16, 0x22, ...Array(82).fill(0x00) ]))
    },
    pushLog: function(message) {
      this.$store.commit('unshift', {
        logs: { 
          message: message,
          time: new Date()
        }
      })
    }
  },
}
</script>

<style lang="sass">
.port-select
  width: 12rem
</style>