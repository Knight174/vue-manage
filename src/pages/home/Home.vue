<template>
  <div class="home">
    <home-header :imgList="imgList" :activitiesList="activitiesList"></home-header>
    <home-content :dataTitle="dataTitle" :videoData="videoData" :columnData="columnData"></home-content>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeContent from './components/HomeContent'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent
  },
  data() {
    return {
      imgList: [],
      activitiesList: [],
      dataTitle: [],
      videoData: [],
      columnData: []
    }
  },
  methods: {
    getHomeInfo() {
      this.$http.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgList = data.imgList
        this.activitiesList = data.activitiesList
        this.dataTitle = data.dataTitle
        this.videoData = data.videoData
        this.columnData = data.columnData
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
