// salesForecast 模块的数据
const state = {
  tableData: [
    [
      "销量",
      2881,
      705,
      2722,
      4963,
      712,
      4758,
      112,
      3228,
      2521,
      3301,
      1226,
      548,
      644,
      1226,
      548,
      644,
    ],
    [
      "库存",
      1617,
      1218,
      2041,
      2407,
      3261,
      1271,
      2548,
      2943,
      1753,
      2435,
      1724,
      3478,
      175,
      1724,
      3478,
      175,
    ],
  ],
};
const mutations = {
  GET_TABLE_DATA(data) {
    this.state.tableData = data;
  },
};
const actions = {
  // 获取tableData数据
  getTableData({ commit }) {
    let result = getTableDataApi();
    commit("GET_TABLE_DATA", result);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
