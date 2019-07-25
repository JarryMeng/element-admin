const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const {
  serverUrl,
  port
} = require('./mock/config');
// vue.config.js
module.exports = {
  publicPath: './',
  transpileDependencies: [
    
  ],
  devServer: {
    // development server port 8080
    // port: 8080
    proxy: {
      '/mock': {
        target: `http://${serverUrl}:${port}`,
        pathRewrite: {
          '^/mock': ''
        }
      },
      //   '/api': {
      //     // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
      //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
      //     ws: false,
      //     changeOrigin: true
      //   }
    }
  },

  // disable source map in production
  productionSourceMap: false,
  // 打包 将element-ui 默认样式文件 打包进去 编译主题会用到
  // 开发环境 无效  编译主题会获取线上样式
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CopyWebpackPlugin([{
            from: path.join(__dirname, 'node_modules/element-ui/lib/theme-chalk/index.css'),
            to: path.join(__dirname, 'dist/defaultTheme/index.css')
          }])
        ]
      }
    }
  }
}
