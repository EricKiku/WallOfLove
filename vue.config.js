const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {			//请求前缀
        target: 'http://localhost:8888',	//目标地址
      },
    }
  }
})
