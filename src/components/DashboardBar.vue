<template>
<div class="h-flex justify-content-center align-items-center mt-1 mx-1">
  <AppInputIcon 
    @click="uploadParameters"
    icon="upload" 
    title="Upload Parameters"
  />
  <span class="pr-3"/>
  <AppInputIcon 
    @click="refreshSerialPorts"
    icon="sync-alt" 
    title="Refresh Ports"
  />
  <span class="pr-1"/>
  <AppInputSelect
    v-model="selectedPort"
    :options="ports"
    class="port-select"
  />
  <span class="pr-1"/>
  <AppInputIcon 
    v-if="connectedPort === null || !connectedPort.isOpen"
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
  data: function() {
    return {
      ports: [],
      selectedPort: null,
      connectedPort: null,
    }
  },
  methods: {
    uploadParameters: async function() {
      // Upload the new bundle to the database
      const response = await post('bundle/addnew', {
        id: this.$store.state.user._id,
        ...this.$store.state.newBundle
      })
      // A successful API call returns the new bundle that was created
      if (response.data.success) {
        const bundles = this.$store.state.bundles
        bundles.push(response.data.bundle)
        this.$store.commit('set', { bundles })
      }
    },
    refreshSerialPorts: async function() {
      const ports = await SerialPort.list()
      this.ports = ports.map(port => ({name: `${port.manufacturer} (${port.path})`, value: port.path}))
    },
    connectPacemaker: function() {
      this.connectedPort = new SerialPort(this.selectedPort, {
        baudRate: 57600,
      })
      console.log(this.connectedPort)
      this.connectedPort.on('data', function (data) {
        console.log('data received: ' + data)
      })
    },
    disconnectPacemaker: function() {
      this.connectedPort.close()
    }
  }
}
</script>

<style lang="sass">
.port-select
  width: 12rem
</style>