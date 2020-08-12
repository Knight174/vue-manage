<template>
  <el-card class="content">
    <div class="data_title">
      <span
        v-for="(item, index) of dataTitle"
        :key="item.id"
        :class="activeClass == index ? 'active' : ''"
        @click="changeStyle(index)"
      >
        {{ item.title }}
      </span>
    </div>
    <div class="data_detail">
      <router-link
        tag="div"
        :to="item.src"
        class="data_detail_item"
        :class="{ arrow: item.arrow }"
        v-for="item of videoData"
        :key="item.id"
        v-show="isShow"
      >
        <div class="item_title">
          {{ item.title }}
          <i class="el-icon-arrow-right" v-if="item.arrow"></i>
        </div>
        <div class="num">{{ item.num }}</div>
      </router-link>

      <router-link
        tag="div"
        :to="item.src"
        class="data_detail_item"
        :class="{ arrow: item.arrow }"
        v-for="item of columnData"
        :key="item.id"
        v-show="!isShow"
      >
        <div class="item_title">
          {{ item.title }}
          <i class="el-icon-arrow-right" v-if="item.arrow"></i>
        </div>
        <div class="num">{{ item.num }}</div>
      </router-link>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    dataTitle: Array,
    videoData: Array,
    columnData: Array
  },
  computed: {
    isShow() {
      return this.activeClass === 0 ? true : false
    }
  },
  data() {
    return {
      activeClass: 0
    }
  },
  methods: {
    changeStyle(index) {
      this.activeClass = index
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  padding: 24px;
  .data_title {
    margin-bottom: 24px;
    span {
      cursor: pointer;
      margin-right: 50px;
    }
  }
  .data_detail {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .data_detail_item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 14px 20px;
      border-radius: 5px;
      flex: 1;
      min-width: 30%;
      max-width: 30%;
      height: 80px;
      margin-bottom: 30px;
      background-color: #f7fcfe;
      .item_title {
        font-size: 12px;
        vertical-align: middle;
        color: #757575;
      }
      .num {
        font-size: 22px;
        font-weight: 600;
        color: $theme-color;
      }
    }
  }
}
.active {
  color: $theme-color;
  font-weight: 700;
}
.arrow {
  cursor: pointer;
}
</style>
