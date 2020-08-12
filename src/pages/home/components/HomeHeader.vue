<template>
  <div class="header">
    <el-card class="banner">
      <el-carousel indicator-position="outside" height="285px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img class="banner_img" :src="item.src" alt="" />
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <el-card class="activities">
      <h3>热门活动</h3>
      <ul class="activities_list">
        <li v-for="item of activitiesList" :key="item.id">
          <a class="left" href="javascript:;">
            <span class="li_circle"></span>
            <span>{{ item.title }}</span>
          </a>
          <div class="right">{{ item.num }} 人参加</div>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    imgList: Array,
    activitiesList: Array
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .banner {
    width: 800px;
    height: 285px;
    .banner_img {
      width: 100%;
      height: 100%;
    }
  }
  .activities {
    width: 420px;
    height: 285px;
    padding: 16px 24px;
    h3 {
      margin-bottom: 16px;
    }
    .activities_list {
      li {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        .left {
          display: block;
          flex: 1;
        }
      }
      .li_circle {
        display: inline-block;
        margin-right: 5px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        vertical-align: middle;
        background-color: #e7e7e7;
      }
    }
  }
}
</style>
<style lang="scss">
.el-card__body {
  margin: 0;
  padding: 0;
}
</style>
