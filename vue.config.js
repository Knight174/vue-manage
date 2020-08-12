const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";` // 每个样式文件前面都会添加这句话
      }
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@pages', resolve('src/pages'))
      .set('@assets', resolve('src/assets'))
      .set('@scss', resolve('src/assets/scss'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 9000,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
