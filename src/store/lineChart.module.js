import reportData from "../utills/report.json";
/* 
    Load the json data from the json file
    add the json data into store to reuse in any component that are subscribed with this store
*/
const state = { status: { reportData } };

export const lineChart = {
  namespaced: true,
  state
};
