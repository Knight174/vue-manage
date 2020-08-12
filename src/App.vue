<template>
  <div id="app" style="height: 100vh;">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #324152;
  .login-form {
    width: 25rem;
    padding: 1.875rem;
    border-radius: 0.3125rem;
    background-color: #fff;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
