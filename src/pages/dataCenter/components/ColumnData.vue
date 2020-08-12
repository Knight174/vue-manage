<template>
  <div class="column" v-show="isShow">
    <div class="left">
      <div class="left_item" v-for="item of columnItemList" :key="item.title">
        <span class="item_title">{{ item.title }}</span>
        <span class="item_num">{{ item.num }}</span>
      </div>
    </div>
    <div class="right">
      <div ref="graph_column" style="width:100%; height:100%"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnData',
  props: {
    columnItemList: Array,
    activeName: String
  },
  computed: {
    isShow() {
      return this.activeName === 'dc02' ? true : false
    }
  },
  data() {
    return {}
  },
  methods: {
    myEcharts_column() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.graph_column)
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['阅读量', '评论数', '收藏数', '点赞数']
        },
        series: [
          {
            name: '数据统计',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 2158, name: '阅读量' },
              { value: 35, name: '评论数' },
              { value: 7, name: '收藏数' },
              { value: 51, name: '点赞数' }
            ]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    readEcharts() {
      if (this.isShow === true) {
        this.myEcharts_column()
      }
      return
    }
  },
  updated() {
    this.readEcharts()
  },
  mounted() {
    this.readEcharts()
  }
}
</script>

<style lang="scss" scoped>
#graph_column {
  width: 100%;
  height: 100%;
}
.column {
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
