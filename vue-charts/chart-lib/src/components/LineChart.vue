<template>
  <canvas id="lineChart" ref="lineChart"></canvas>
</template>

<script>

import {Chart, registerables} from 'chart.js';
Chart.register(...registerables)

export default {
mounted(){
new this.$_Chart(this.$refs.lineChart.getContext('2d'),
    {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets:[{
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],

            }]
        },
    });
}
}
</script>

<style>

</style>