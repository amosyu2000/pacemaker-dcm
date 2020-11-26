<template>
  <AppSection>
    <template v-slot:header>Electrogram</template>
    <LineChart class="chart-container" :chartData="chartData"></LineChart>
  </AppSection>
</template>

<script>
import AppSection from '@/components/AppSection.vue'
import LineChart from '@/components/LineChart.vue'

export default {
  name: "DashboardElectrogram",
  components: {
    AppSection,
    LineChart,
  },
  computed: {
    chartData: function() {
      const dataLength = this.$store.state.egramTimeData.length
      const displayLength = 240
      const dataBegin = Math.max(dataLength-displayLength, 0)
      return {
        labels: this.$store.state.egramTimeData.slice(dataBegin,dataLength),
        datasets: [
          {
            label: 'Atrial',
            borderColor: "rgb(224, 82, 82)",
            data: this.$store.state.egramAtrialData.slice(dataBegin,dataLength)
          },
          {
            label: 'Ventricular',
            borderColor: "rgb(114, 137, 218)",
            data: this.$store.state.egramVentricularData.slice(dataBegin,dataLength)
          }
        ]
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.chart-container
  position: relative
  flex: 1 1 0
  margin: 0 0.25rem
  overflow: hidden
</style>