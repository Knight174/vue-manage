<template>
  <div class="login-container">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  computed: {
    ...mapState({
      loginInfo: state => state.loginInfo,
      myToken: state => state.token
    })
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      let { data, status } = this.loginInfo
      let { username, password } = this.formData
      if (username === data.username && password === data.password) {
        if (status === 200) {
          localStorage.setItem('token', data.username)
          this.$router.push({
            name: 'Home'
          })
          this.$message.success('登录成功！')
        }
      } else {
        this.$message.error('Error！')
      }
    }
    // async handleLogin() {
    //   // ES7 async+await
    //   const res = await this.$http.post('login', this.formData)

    //   const {
    //     data,
    //     meta: { msg, status }
    //   } = res.data

    //   if (status === 200) {
    //     // 登录成功
    //     // 0. 保存token值
    //     localStorage.setItem('token', data.token)
    //     // 1. 跳转home
    //     this.$router.push({
    //       name: 'home'
    //     })
    //     // 2. 提示成功
    //     this.$message.success(msg)
    //   } else {
    //     this.$message.error(msg)
    //   }

    // this.$http.post('login', this.formData)
    //   .then(res => {
    //     // console.log(res)
    //     // 接收数据
    //     const {
    //       meta: { msg, status }
    //     } = res.data
    //     // 跳转到首页
    //     if (status === 200) {
    //       // 成功跳转+成功提示
    //       this.$message.success(msg)
    //       this.$router.push({
    //         name: 'home'
    //       })
    //     } else {
    //       // 不跳转+失败提示
    //       this.$message.error(msg)
    //     }
    //   }).catch(e => {
    //     console.log(e)
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped></style>
