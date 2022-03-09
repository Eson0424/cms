<template>
  <div class="line-chart-component">
    <div class="line-chart-component-title">{{ chartTitle }}</div>
    <div
      id="myChart"
      class="chart"
      :style="{ width: chartWidth, height: chartHeight }"
    ></div>
  </div>
</template>

<script>
// vue文件中引入echarts工具
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
// 以下的组件按需引入
require("echarts/lib/component/tooltip"); // tooltip组件
require("echarts/lib/component/title"); //  title组件
require("echarts/lib/component/legend"); // legend组件
require("echarts/lib/component/grid");

export default {
  name: "xwPassengerFlow",
  props: {
    chartWidth: {
      type: String,
      default: "100%",
    },
    chartHeight: {
      type: String,
      default: "400px",
    },
    option: {
      type: Object,
      default() {
        return {};
      },
    },
    chartTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      observer: null,
      firedNum: 0,
      recordOldValue: {
        // 记录下旧的宽高数据，避免重复触发回调函数
        width: "0",
        height: "0",
      },
    };
  },
  mounted() {
    // let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    // let element = document.querySelector('.line-chart-component')
    // this.observer = new MutationObserver((mutationList) => {
    //   for (let mutation of mutationList) {
    //     console.log(mutation)
    //   }
    //   let width = getComputedStyle(element).getPropertyValue('width')
    //   let height = getComputedStyle(element).getPropertyValue('height')
    //   if (width === this.recordOldValue.width && height === this.recordOldValue.height) return
    //   this.recordOldValue = {
    //     width,
    //     height
    //   }
    //   this.firedNum += 1
    // })
    // this.observer.observe(element, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
    this.$nextTick(() => {
      this.loadLine();
    });
  },
  methods: {
    loadLine() {
      // 创建 echarts 实例。
      let myChartOne = echarts.init(document.getElementById("myChart"));
      // 调用 setOption 将 option 输入 echarts，然后 echarts 渲染图表。
      myChartOne.setOption(this.option);
    },
  },
};
</script>

<style lang="scss">
.line-chart-component {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;

  &-title {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    position: absolute;
  }

  // #myChart {
  //   &>div:first-child {
  //     width: 100% !important;

  //     &>canvas {
  //       width: 100% !important;
  //     }
  //   }
  // }
}
</style>
