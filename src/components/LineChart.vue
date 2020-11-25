<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null,
    }
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: false,
      legend: {
        labels: {
          fontColor: "rgb(188, 191, 194)",
          fontSize: 14,
        }
      },
      elements: {
        line: {
          tension: 0.05,
          fill: false,
          borderWidth: 2
        },
        point: {
          radius: 1,
          hitRadius: 4
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
            color: "rgb(188, 191, 194)",
            zeroLineColor: "rgb(188, 191, 194)",
            tickMarkLength: -10
          },
          ticks: {
            fontColor: "rgb(188, 191, 194)",
            padding: 15
          },
          scaleLabel: {
            labelString: 'Time (ms)',
            fontColor: "rgb(188, 191, 194)",
            display: true,
            fontSize: 14,
          }
        }],
        yAxes: [{
          gridLines: {
            drawOnChartArea: false,
            color: "rgb(188, 191, 194)",
            zeroLineColor: "rgb(188, 191, 194)",
            tickMarkLength: -10
          },
          ticks: {
            fontColor: "rgb(188, 191, 194)",
            padding: 15
          },
          scaleLabel: {
            labelString: 'Voltage (mV)',
            fontColor: "rgb(188, 191, 194)",
            display: true,
            fontSize: 14,
          }
        }]
      }
    }
  }), 
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>