<template>
  <section>
    <h1>Check Diagram</h1>
    <!-- <base-chart></base-chart> -->
    <!-- <line-chart :chartData="chartData" :options="options"></line-chart> -->
  </section>
</template>

<script>
// 目前卡在 webpack chart.js 沒辦法使用 ....
// import LineChart from "@/components/LineChart.vue";

// export default {
//   components: {
//     "line-chart": LineChart,
//   },
//   data() {
//     return {
//       chartData: {
//         labels: ["January", "February", "March"],
//         datasets: [
//           {
//             label: "Data 1",
//             data: [2, 10, 5],
//             backgroundColor: this.gradient,
//             boderColor: "#FC2525",
//             pointBackgroundColor: "rgba(171, 71, 188, 1)",
//           },
//         ],
//       },
//       optiobs: {
//         responsive: true,
//         maintainAspectRatio: false,
//         title: {
//           display: true,
//           text: "My Data",
//         },
//       },
//     };
//   },
// };
// import BaseChart from "./BaseChart.js";
// import { Bar } from "vue-chartjs";

// export default {
//   extends: Bar,
//   components: {
//     "base-chart": BaseChart,
//   },
//   data: () => ({
//     chartdata: {
//       labels: ["January", "February"],
//       datasets: [
//         {
//           label: "Data One",
//           backgroundColor: "#f87979",
//           data: [40, 20],
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//     },
//   }),
//
//   mounted() {
//     this.renderChart(this.chartdata, this.options);
//   },
// };
</script>

<!-- <template> -->
<!--   <div class="small"> -->
<!--     <base-chart :chart-data="datacollection"></base-chart> -->
<!--     <button @click="fillData()">Randomize</button> -->
<!--   </div> -->
<!-- </template> -->
<!---->
<!-- <script> -->
<!-- import BaseChart from "./BaseChart.vue"; -->
<!---->
<!-- export default { -->
<!--   components: { -->
<!--     "base-chart": BaseChart, -->
<!--   }, -->
<!--   data() { -->
<!--     return { -->
<!--       datacollection: null, -->
<!--     }; -->
<!--   }, -->
<!--   mounted() { -->
<!--     this.fillData(); -->
<!--   }, -->
<!--   methods: { -->
<!--     fillData() { -->
<!--       this.datacollection = { -->
<!--         labels: [this.getRandomInt(), this.getRandomInt()], -->
<!--         datasets: [ -->
<!--           { -->
<!--             label: "Data One", -->
<!--             backgroundColor: "#f87979", -->
<!--             data: [this.getRandomInt(), this.getRandomInt()], -->
<!--           }, -->
<!--           { -->
<!--             label: "Data One", -->
<!--             backgroundColor: "#f87979", -->
<!--             data: [this.getRandomInt(), this.getRandomInt()], -->
<!--           }, -->
<!--         ], -->
<!--       }; -->
<!--     }, -->
<!--     getRandomInt() { -->
<!--       return Math.floor(Math.random() * (50 - 5 + 1)) + 5; -->
<!--     }, -->
<!--   }, -->
<!-- }; -->
<!-- </script> -->
<!---->
<!-- <style scoped> -->
<!-- .small { -->
<!--   max-width: 600px; -->
<!--   margin: 150px auto; -->
<!-- } -->
<!-- </style> -->
