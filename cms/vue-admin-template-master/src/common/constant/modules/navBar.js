const MENU_DATA = [{
    entity: {
      id: 0,
      name: "inventory",
      icon: "el-icon-menu",
      alias: "库存情况统计分析"
    },
    childs: [{
        entity: {
          id: 1,
          name: "/analysis/model",
          icon: "el-icon-menu",
          alias: "模型库存统计",
          value: "/analysis/model",
        }
      },
      {
        entity: {
          id: 2,
          name: "/analysis/OutOfStock",
          icon: "el-icon-menu",
          alias: "缺货统计",
          value: "/analysis/outOfStock"
        }
      },
      {
        entity: {
          id: 3,
          name: "/analysis/skuAnalyze",
          icon: "el-icon-menu",
          alias: "SKU分析",
          value: "/analysis/skuAnalyze"
        }
      },
      {
        entity: {
          id: 4,
          name: "/analysis/salesForecast",
          icon: "el-icon-menu",
          alias: "销量预测",
          value: "/analysis/salesForecast"
        }
      }
    ]
  },
  {
    entity: {
      id: 5,
      name: "commodity",
      icon: "el-icon-menu",
      alias: "补货指令"
    },
    childs: [{
        entity: {
          id: 6,
          name: "/commodity/replenishment",
          icon: "el-icon-menu",
          alias: "补货指令",
          value: {
            path: "/commodity/replenishment"
          }
        }
      },
      {
        entity: {
          id: 7,
          name: "/commodity/replenishmentHistory",
          icon: "el-icon-menu",
          alias: "历史补货查询",
          value: "/commodity/replenishmentHistory"
        }
      },
      {
        entity: {
          id: 8,
          name: "/commodity/order",
          icon: "el-icon-menu",
          alias: "下单指令",
          value: "/commodity/order"
        }
      },
      {
        entity: {
          id: 9,
          name: "/commodity/inventoryImport",
          icon: "el-icon-menu",
          alias: "在途库存导入",
          value: "/commodity/inventoryImport"
        }
      },
      {
        entity: {
          id: 10,
          name: "/commodity/exportOfHistoryOrders",
          icon: "el-icon-menu",
          alias: "历史订单导出",
          value: "/commodity/exportOfHistoryOrders"
        }
      }
    ]
  },
  {
    entity: {
      id: 11,
      name: "baseDate",
      icon: "el-icon-menu",
      alias: "基础数据维护"
    },
    childs: [{
        entity: {
          id: 12,
          name: "/baseDate/warehouseMaintenance",
          icon: "el-icon-menu",
          alias: "发货仓库维护",
          value: "/baseDate/warehouseMaintenance"
        }
      },
      {
        entity: {
          id: 13,
          name: "/baseDate/warehouseMapping",
          icon: "el-icon-menu",
          alias: "仓库映射关系",
          value: "/baseDate/warehouseMapping"
        }
      },
      {
        entity: {
          id: 14,
          name: "/baseDate/skuMapping",
          icon: "el-icon-menu",
          alias: "SKU映射关系",
          value: "/baseDate/skuMapping"
        }
      },
      {
        entity: {
          id: 15,
          name: "/baseDate/skuTeamMapping",
          icon: "el-icon-menu",
          alias: "SKU组合映射",
          value: "/baseDate/skuTeamMapping"
        }
      },
      {
        entity: {
          id: 16,
          name: "/baseDate/skuTrackTarget",
          icon: "el-icon-menu",
          alias: "SKU追踪目标",
          value: "/baseDate/skuTrackTarget"
        }
      },
      {
        entity: {
          id: 17,
          name: "/baseDate/skuTranslate",
          icon: "el-icon-menu",
          alias: "SKU翻译",
          value: "/baseDate/skuTranslate"
        }
      },
      {
        entity: {
          id: 18,
          name: "/baseDate/stockMapping",
          icon: "el-icon-menu",
          alias: "额外备货设置",
          value: "/baseDate/stockMapping"
        }
      },
      {
        entity: {
          id: 19,
          name: "/baseDate/accountManage",
          icon: "el-icon-menu",
          alias: "账号管理",
          value: "/baseDate/accountManage"
        }
      }
    ]
  },
]

export {
  MENU_DATA,
}