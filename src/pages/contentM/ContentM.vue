<template>
  <el-card class="content-wrapper">
    <router-view />
  </el-card>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {}
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  height: 100%;
  padding: 20px 20px;
}
</style>
