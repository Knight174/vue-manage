<template>
  <div class="article">
    <div class="header">
      <el-button type="primary" size="mini" @click="addData">添加数据</el-button>
      <el-input v-model.lazy="search" size="mini" placeholder="输入用户名搜索" />
    </div>
    <el-table :data="list()" style="width: 100%" highlight-current-row height="480px">
      <el-table-column label="用户名" prop="name"> </el-table-column>
      <el-table-column label="电话" prop="tel"> </el-table-column>
      <el-table-column label="邮箱" prop="email"> </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click.native.prevent="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click.native.prevent="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ContentArticle',
  computed: {
    ...mapState({
      currentPage: state => state.currentPage
    })
  },
  data() {
    return {
      tableData: [],
      // 默认显示第几页
      // currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 50,
      // 个数选择器（可修改）
      pageSizes: [5, 10, 15, 20],
      // 默认每页显示的条数（可修改）
      pageSize: 5,
      search: ''
    }
  },
  methods: {
    ...mapMutations({
      changeCurrentPage: 'changeCurrentPage'
    }),
    list() {
      if (!this.search) {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      } else {
        return this.tableData.filter(
          data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase())
        )
      }
    },
    handleEdit(row) {
      // console.log(index, row) // row中就是对应的一个json数据
      this.$router.push({ name: 'Edit', params: { id: row.id } })
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除当前数据项, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.deleteData(row.id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.$router.push({ name: 'ContentArticle' })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.$store.commit('changeCurrentPage', 1)
    },
    handleCurrentChange(val) {
      this.$store.commit('changeCurrentPage', val)
    },
    getArticleInfo() {
      this.$http.get('http://localhost:3000/tableData').then(this.getArticleInfoSucc)
    },
    getArticleInfoSucc(res) {
      if (res.status === 200) {
        const data = res.data
        if (data) {
          this.tableData = data
        }
      }
    },
    addData() {
      this.$router.push({ name: 'Add' })
    },
    deleteData(id) {
      this.$http.delete(`http://localhost:3000/tableData/${id}`).then(() => {
        // this.$router.push('/content/article')
      })
    }
  },
  mounted() {
    this.getArticleInfo()
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
  .el-input {
    width: 30%;
  }
}
</style>
