<template>
  <div class="container">
    <section v-if="tut" class="tut">
        <h1 v-if="tut.name">{{ tut.name}}</h1>
        <p v-if="tut.url"><a :href="tut.url" target="_blank">Tutorial</a></p>
        <p v-if="tut.repo"><a :href="tut.repo" target="_blank">Repo</a></p>
    </section>

    <section>
        <BarChart :data="barChartData" :options="barChartOptions" :height="200" />
    </section>

  </div>
</template>

<script>
import BarChart from '@/components/barChart.vue'

export default {
    components: {
        BarChart
    },
    data() {
        return {
            tut: {
                name: 'Charting with Vue',
                url: 'https://blog.logrocket.com/charting-with-vue-a-comparison/',
                date: '11/4/2020',
                repo: 'https://codesandbox.io/s/vue-chartjs-demo-j73wd'
            },      barChartData: {
        labels: [
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03',
          '2020-04',
          '2020-05'
        ],
        datasets: [
          {
            label: 'Visits',
            data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78, 45],
            backgroundColor: '#00ffff'
          },
          {
            label: 'Pages Views',
            data: [30, 24, 57, 23, 68, 72, 25, 64, 133, 143, 165, 33, 56],
            backgroundColor: '#ff00ff'
          },
          {
            label: 'Users',
            data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
            backgroundColor: '#ff0000'
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Google analytics data',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang='scss'>

</style>