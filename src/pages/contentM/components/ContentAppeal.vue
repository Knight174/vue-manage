<template>
  <div class="appeal">
    <ul class="title">
      <li>全部(0)</li>
      <span>|</span>
      <li>进行中(0)</li>
      <span>|</span>
      <li>已完成(0)</li>
    </ul>
    <div class="list"></div>
    <div class="nofound">
      没有该类型的申诉("▔□▔)
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAppeal',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.appeal {
  .title {
    display: flex;
    width: 20%;
    justify-content: space-between;
    li {
      cursor: pointer;
    }
    li:hover {
      color: $theme-color;
    }
  }
  .nofound {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 450px;
    margin-top: 20px;
  }
}
</style>
