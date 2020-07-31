import Vue from "vue";
import VueRouter from "vue-router";
import ViewLineChart from "../views/ViewLineChart.vue";

Vue.use(VueRouter);
/* 
   create the route list and add the router path into array
   by default ViewLineChart component will render
*/
const routes = [
  {
    path: "/",
    name: "ViewLineChart",
    component: ViewLineChart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
