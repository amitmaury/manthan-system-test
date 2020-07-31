import Vue from "vue";
import Vuex from "vuex";
import { lineChart } from "./lineChart.module";

Vue.use(Vuex);

/* 
    define the store 
    add modules into the store
*/
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    lineChart
  }
});
