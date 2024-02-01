const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './'
  // assetsDir: "./"
  // css是否额外打包(是否内联)
  // css: {
  //   extract: false
  // }
  // https://next.cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93
  // configureWebpack: {
  //   output: {
  //     // 是否都是默认导出,不具名导出
  //     // libraryExport: 'default'
  //     // libraryTarget: 'umd',
  //   }
  // }
})
