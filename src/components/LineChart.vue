<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  data: () => ({
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
            color: "rgb(188, 191, 194)",
            zeroLineColor: "rgb(188, 191, 194)",
            tickMarkLength: -10
          },
          ticks: {
            autoSkip: true,
            autoSkipPadding: 50,
            maxRotation: 0,
            fontColor: "rgb(188, 191, 194)",
            padding: 15,
          },
          scaleLabel: {
            labelString: 'Time',
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
            padding: 15,
            suggestedMax: 0.52,
            suggestedMin: 0.48,
          },
          scaleLabel: {
            labelString: 'Voltage (mV)',
            fontColor: "rgb(188, 191, 194)",
            display: true,
            fontSize: 14,
          }
        }]
      },
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
      animation: {
        duration: 0
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: false
    }
  }), 
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>