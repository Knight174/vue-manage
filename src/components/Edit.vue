<template>
  <div class="edit">
    <h1 class="title">编辑数据</h1>
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
      <el-button type="primary" @click.native.prevent="onSubmit($event)">确认编辑</el-button>
      <router-link to="/content/article" class="goback">
        <el-button>取消</el-button>
      </router-link>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Edit',
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
    getDetailInfo(id) {
      this.$http.get(`http://localhost:3000/tableData/${id}`).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res) {
      if (res.status === 200) {
        const data = res.data
        if (data) {
          this.formData = data
        }
      }
    },
    putDetailInfo() {
      let updateCustomer = {
        name: this.formData.name,
        tel: this.formData.tel,
        email: this.formData.email
      }
      this.$http.put(`http://localhost:3000/tableData/${this.$route.params.id}`, updateCustomer).then(res => {
        console.log(res)
        this.$message.success('修改成功！')
        this.$router.push({ name: 'ContentArticle' })
      })
    },
    onSubmit(e) {
      if (!this.formData.name || !this.formData.tel || !this.formData.email) {
        this.$message.error('请添加对应的信息！')
        return
      } else {
        e.preventDefault()
        this.putDetailInfo()
      }
    }
  },
  created() {
    this.getDetailInfo(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.edit {
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
