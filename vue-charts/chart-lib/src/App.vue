<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';
export default {
components:{
  BarChart, 
  LineChart,
},
// data(){
//   return {
//     chartDataSet: [],
//   }
// },
// created(){
//   getChartData('charts/line/1')
//   .then(response => response.data)
//   .catch(error => console.log(error));
// }

}
</script>

<style>

</style>