<template>
  <div class="commodity-replenishment-page">
    <SearchComponent
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowClassify="true"
      :isShowProduce="true"
      :isShowReplenishment="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
    />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.REPLENISHMENT_HEADER_TITLE"
      :isShowOperate="isShowOperate"
      :isShowEditBtn="true"
      @openBatchEditPopUp="openBatchEditPopUp"
      class="commodity-replenishment-page-table"
    />

    <BatchEditPopUp v-if="false" />
  </div>
</template>

<script>
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
import BatchEditPopUp from "@/components/share/BatchEditPopUp";
export default {
  name: "Replenishment",
  data() {
    return {
      isShowOperate: true,
    };
  },
  components: {
    SearchComponent,
    TableComponent,
    BatchEditPopUp,
  },
  computed: {
    tableData() {
      return this.$store.state.replenishment.tableData;
    },
  },
  methods: {
    openBatchEditPopUp() {
      console.log("openBatchEditPopUp");
    },
  },
};
</script>

<style lang="scss">
.commodity-replenishment-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
