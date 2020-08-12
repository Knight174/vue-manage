<template>
  <el-menu :default-active="$route.path" class="aside" router>
    <template v-for="item of asideMenu">
      <el-menu-item :index="item.path" :key="item.id" v-if="item.children === null">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
      </el-menu-item>
      <el-submenu v-else :key="item.path" :index="item.path">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="sub.path" v-for="sub of item.children" :key="sub.id">
            {{ sub.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'CommonAside',
  computed: {
    defaultActive() {
      console.log(this.$route.path)
      return this.$route.path.replace('/', '')
    }
  },
  data() {
    return {
      asideMenu: [
        {
          id: 'aside01',
          path: '/home',
          label: '首页',
          icon: 's-home',
          children: null
        },
        {
          id: 'aside02',
          path: '/content',
          label: '内容管理',
          icon: 's-management',
          children: [
            {
              id: 'content01',
              path: '/content/article',
              label: '稿件管理'
            },
            {
              id: 'content02',
              path: '/content/appeal',
              label: '申诉管理'
            }
          ]
        },
        {
          id: 'aside03',
          path: '/data-center',
          label: '数据中心',
          icon: 's-data',
          children: null
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
}
</style>
