<template>
  <div>
    <b-row>
      <b-col cols="3">
        <b-form-group label-for="lineChart" label-cols-lg="2">
          <b-form-select
            id="lineChartBox"
            size="sm"
            class="mt-2"
            v-model="metrics"
            @change="changeMetrics"
            :options="metricsList"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <GChart type="LineChart" :data="chartData" :options="chartOptions" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "LineChart",
  components: {
    GChart
  },
  data: () => ({
    metrics: "sales",
    metricsList: [
      { value: "sales", text: "overall sales" },
      { value: "orders", text: "overall orders" },
      { value: "pageViews", text: "page views" },
      { value: "clickThruRate", text: "click through rate" }
    ],
    reportData: [],
    updatedChartData: [],
    chartDefaultHeader: "sales",
    chartFirstHeader: "date",
    chartDataHeader: [],
    chartOptions: {
      chart: {
        title: "Metrics"
      }
    }
  }),
  mounted() {
    /* 
        Load the json data from vuex store
        resue the json data on each navigation of dropdown
    */
    this.reportData = this.$store.state.lineChart.status.reportData;
    this.chartDataHeader.push(this.chartFirstHeader, this.chartDefaultHeader);
    this.updatedData(this.chartDefaultHeader);
  },
  computed: {
    // use to display header and chart data on line chart
    chartData() {
      return [this.chartDataHeader, ...this.updatedChartData];
    }
  },
  methods: {
    /* 
        get the corressponding matics keys from list of array
        pass corresponding keys of metrics based on selected matrics
   */
    updatedData(metricsValue) {
      this.reportData.records.map((res) => {
        let matricsResponse;
        if (metricsValue === "sales") matricsResponse = res.sales;
        else if (metricsValue === "orders") matricsResponse = res.orders;
        else if (metricsValue === "pageViews") matricsResponse = res.pageViews;
        else if (metricsValue === "clickThruRate")
          matricsResponse = res.clickThruRate;
        this.updatedChartData.push([res.date, matricsResponse]);
      });
    },
    changeMetrics(metricsValue) {
      /* 
          set the header based on selected matrics
          pass the selected matrics to fetch the corresponding keys from json data
        */
      this.updatedChartData = [];
      this.chartDataHeader = [];
      this.chartDataHeader.push(this.chartFirstHeader, metricsValue);
      this.updatedData(metricsValue);
    }
  }
};
</script>
