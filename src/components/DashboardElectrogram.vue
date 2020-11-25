<template>
  <AppSection>
    <template v-slot:header>Electrogram</template>
    <LineChart class="chart-container" :chartdata="chartdata"></LineChart>
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
  data: () => ({
    chartdata: {
      labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
      datasets: [
        {
          label: 'Atrial',
          borderColor: "rgb(114, 137, 218)",
          data: [40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39, 80, 40]
        },
        {
          label: 'Ventricular',
          borderColor: "rgb(224, 82, 82)",
          data: [40, 40, 39, 10, 40, 39, 40, 39, 10, 40, 39, 80, 80, 40]
        }
      ]
    }
  })
}
</script>

<style lang="sass" scoped>
.chart-container
  position: relative
  flex: 1 1 0
  margin: 0 0.25rem
  overflow: hidden
</style>