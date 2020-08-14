<template>
  <div class="add">
    <h1 class="title">添加数据</h1>
    <el-form :label-position="labelPosition" label-width="80px" :model="formData" @submit.native.prevent>
      <el-form-item label="用户名">
        <el-input v-model.trim="formData.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model.number.trim="formData.tel" placeholder="请输入电话"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model.trim="formData.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-button type="primary" @click.prevent="onSubmit">提交数据</el-button>
      <router-link to="/content/article" class="goback">
        <el-button>取消</el-button>
      </router-link>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data() {
    return {
      labelPosition: 'right',
      formData: {
        name: '',
        tel: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit() {
      if (!this.formData.name || !this.formData.tel || !this.formData.email) {
        this.$message.error('请添加对应的信息！')
        return
      } else {
        let newCustomer = {
          name: this.formData.name,
          tel: this.formData.tel,
          email: this.formData.email
        }
        this.$http.post('http://localhost:3000/tableData', newCustomer).then(res => {
          console.log(res)
        })
        this.$message.success('提交成功！')
        this.$router.push({ name: 'ContentArticle' })
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  .title {
    font-size: 18px;
    font-weight: 700;
    color: $theme-color;
  }
}
.el-form {
  width: 500px;
  margin-top: 50px;
}
.goback {
  margin-left: 20px;
}
</style>
