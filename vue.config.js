const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  transpileDependencies: true,
  lintOnSave: false,
  //配置自动打开项目
  devServer: {
    open: true,
    host: 'localhost',
    //允许跨域
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/api2/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
