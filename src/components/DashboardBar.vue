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
  <span class="pr-1"/>
  <AppInputIcon 
    @click="uploadParameters"
    icon="upload" 
    title="Upload Parameters"
  />
  <span class="pr-1"/>
  <AppInputIcon
    @click="requestEgram"
    icon="wave-square"
  />
</div>
</template>

<script>
import post from '@/utils/post'
import AppInputIcon from '@/components/AppInputIcon'
import AppInputSelect from '@/components/AppInputSelect'
import SerialPort from 'serialport'

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
    uploadParameters: async function() {
      // Upload the new bundle to the database
      const response = await post('bundle/addnew', {
        id: this.$store.state.user._id,
        ...this.$store.state.newBundle
      })
      // A successful API call returns the new bundle that was created
      if (response.data.success) {
        this.$store.commit('addBundle', response.data.bundle)
      }
    },
    refreshSerialPorts: async function() {
      const ports = await SerialPort.list()
      this.$store.commit('set', {
        ports: ports.map(port => ({
          name: `${port.manufacturer} (${port.path})`, 
          value: port.path
        })),
      })
      this.$store.commit('addLog', {
        origin: "Serial", 
        message: `Refreshing found ${this.$store.state.ports.length} port(s)`
      })
    },
    connectPacemaker: function() {
      try {
        this.$store.commit('set', { connectedPort:
          new SerialPort(
            this.$store.state.selectedPort,
            { 
              baudRate: 57600 
            },
            (e) => {
              if (e) {
                this.$store.commit('addLog', {
                  origin: "Serial", 
                  message: "Error: Selected serial port not found"
                })
              }
              else {
                this.$store.commit('set', {isConnected: true})
                this.$store.commit('addLog', {
                  origin: "Serial", 
                  message: `${this.$store.state.selectedPort} connected`
                })
              }
            }
          )
        })
        this.$store.state.connectedPort.on('data', (data) => {
          console.log(`data received: ${Buffer(data)}`)
        })
        this.$store.state.connectedPort.on('close', () => {
          this.$store.commit('set', {isConnected: false})
          return this.$store.commit('addLog', {
            origin: "Serial", 
            message: `${this.$store.state.selectedPort} disconnected`
          })
        })
      } catch(e) {
        this.$store.commit('addLog', {
          origin: "Serial", 
          message: "Error: No serial port selected"
        })
      }
    },
    disconnectPacemaker: function() {
      this.$store.state.connectedPort.close()
    },
    requestEgram: function() {
      console.log(this.$store.state.connectedPort)
    },
  },
}
</script>

<style lang="sass">
.port-select
  width: 12rem
</style>