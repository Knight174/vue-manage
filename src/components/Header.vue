<template>
  <div class="header">
    <el-row>
      <el-col :span="12" class="left">
        <img class="header_logo" :src="logoSrc" alt="header_logo" />
        <span class="header_title">创作中心</span>
      </el-col>

      <el-col :span="12" class="right">
        <el-dropdown :hide-on-click="false">
          <div class="userImg">
            <img class="user_img" :src="userSrc" alt="user_img" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleClick">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  data() {
    return {
      logoSrc: require('@assets/images/logo.png'),
      userSrc: require('@/assets/images/user.png')
    }
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: 'Home'
      })
    },
    exit() {
      localStorage.removeItem('token')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .el-col {
    height: 60px;
    line-height: 60px;
  }
  .left {
    .header_logo {
      height: 60px;
    }
    .header_title {
      position: absolute;
      top: 15px;
      left: 100px;
      font-size: 30px;
      line-height: 30px;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: $theme-color;
    }
  }
  .right {
    .el-dropdown {
      float: right;
      margin-right: 20px;
      height: 100%;
      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
      .userImg {
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -22.5px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #fff;
        .user_img {
          width: 45px;
        }
      }
    }
  }
}
</style>
