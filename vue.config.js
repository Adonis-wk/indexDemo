const webpack = require('webpack')
module.exports = {
  devServer: {
    host: 'qjzn.club.com',
    port: 8088,
    proxy: {
      '/authc/*': {
        'target': 'http://qjzn.server.club.com',
        'secure': false,
        'changeOrigin': true
      }
    }
  },
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __TestServer: !!process.env.__TestServer // true: 使用测试服务器接口 | false: 使用本地mock server
      })
    ]
  },
  // outputDir: 'dist/il',
  outputDir: 'dist',

  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'vue',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'vue/index.html',
  pages: {
    platform: {
      // 入口文件
      entry: 'src/main.js',
      // 模板文件
      template: 'src/index.html',
      // 生成的html文件
      // filename: argv.page && argv.page === 'platform' ? 'index.html' : 'platform.html'
      filename: 'index.html'
    }
  }
}
