<template>
  <div>
    <LineChart />
  </div>
</template>

<script>
// import the Linechart component to render into the view
import LineChart from "@/components/LineChart.vue";

export default {
  name: "ViewLineChart",
  components: {
    LineChart
  }
};
</script>
