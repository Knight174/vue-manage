<template>
  <el-card class="data-center">
    <el-tabs class="content-tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item of dataList" :key="item.name" :label="item.label" :name="item.name">
        <video-data :activeName="activeName" :videoItemList="videoItemList"></video-data>
        <column-data :activeName="activeName" :columnItemList="columnItemList"></column-data>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import VideoData from './components/VideoData'
import ColumnData from './components/ColumnData'
export default {
  name: 'DataCenter',
  components: {
    VideoData,
    ColumnData
  },
  data() {
    return {
      activeName: 'dc01',
      dataList: [],
      videoItemList: [],
      columnItemList: []
    }
  },
  methods: {
    handleClick() {
      console.log(this.activeName)
    },
    getDataInfo() {
      this.$http.get('/api/data-center.json').then(this.getDataInfoSucc)
    },
    getDataInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.dataList = data.dataList
        this.videoItemList = data.videoItemList
        this.columnItemList = data.columnItemList
      }
    }
  },
  mounted() {
    this.getDataInfo()
  }
}
</script>

<style lang="scss" scoped>
.data-center {
  height: 100%;
  padding: 20px 20px;
}
</style>
