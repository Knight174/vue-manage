<template>
  <div class="video" v-show="isShow">
    <div class="left">
      <div class="left_item" v-for="item of videoItemList" :key="item.title">
        <span class="item_title">{{ item.title }}</span>
        <span class="item_num">{{ item.num }}</span>
      </div>
    </div>
    <div class="right">
      <div id="graph" ref="graph"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoData',
  props: {
    videoItemList: Array,
    activeName: String
  },
  computed: {
    isShow() {
      return this.activeName === 'dc01' ? true : false
    }
  },
  data() {
    return {}
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.graph)
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '增量数据趋势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['视频播放', '评论数', '弹幕数', '点赞数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2020/7/1', '2020/7/8', '2020/7/15', '2020/7/22', '2020/7/29', '2020/8/1', '2020/8/5']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '视频播放',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '评论数',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '弹幕数',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '点赞数',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    readEcharts() {
      if (this.isShow === true) {
        this.myEcharts()
      }
      return
    }
  },
  mounted() {
    this.readEcharts()
  }
}
</script>

<style lang="scss" scoped>
#graph {
  width: 100%;
  height: 100%;
}
.video {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 30%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .left_item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 90%;
      height: 20%;
      border-radius: 5px;
      padding-left: 15px;
      background-color: #ebf8fc;
      .item_title {
        font-size: 12px;
        vertical-align: middle;
        color: #757575;
      }
      .item_num {
        font-size: 22px;
        font-weight: 600;
        color: $theme-color;
      }
    }
  }
  .right {
    width: 65%;
    height: 500px;
    // background-color: green;
  }
}
</style>
