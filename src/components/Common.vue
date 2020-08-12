<template>
  <div id="common">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from '@components/Header.vue'
import CommonAside from '@components/Aside.vue'
export default {
  name: 'Common',
  components: {
    CommonHeader,
    CommonAside
  }
}
</script>

<style lang="scss" scoped>
#common {
  height: 100%;
  .el-header,
  .el-aside,
  .el-main {
    color: $font-color;
  }
  .el-header {
    min-width: 1200px;
    background-color: #fff;
    line-height: 60px;
  }

  .el-aside {
    min-width: 200px;
    background-color: #d3dce6;
    line-height: 200px;
  }

  .el-main {
    min-width: 1200px;
    background-color: #fafafa;
    padding: 20px 40px;
  }
}
</style>
