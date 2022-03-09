// outOfStock模块的数据
const state = {
  // 折线图数据
  xAxisData: [
    "2021/11/02",
    "2021/11/09",
    "2021/11/16",
    "2021/11/23",
    "2021/11/30",
    "2021/12/01",
    "2021/12/08",
    "2021/12/15",
    "2021/12/22",
    "2021/12/29",
    "2021/11/09",
    "2021/11/16",
    "2021/11/23",
    "2021/11/30",
    "2021/12/01",
    "2021/12/08",
    "2021/12/15",
    "2021/12/22",
    "2021/12/29",
  ], // x轴数据

  yAxisData: [
    820, 932, 901, 934, 1290, 1330, 1320, 3333, 3333, 4444, 5555, 4432, 3233,
    5500, 3000, 2500, 1700, 4500, 5000,
  ],
  tableData: [{
      sku: "Eduardo",
      storehouse: "Big Kahuna Burger Ltd.",
      average: 703,
    },
    {
      sku: "Debra",
      storehouse: "Acme Co.",
      average: 816,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
    {
      sku: "Arlene",
      storehouse: "Biffco Enterprises Ltd.",
      average: 185,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
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
