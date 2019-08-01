const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const {
  serverUrl,
  port
} = require('./mock/config');
// vue.config.js
module.exports = {
  // multi-page
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: '',
      filename: 'index.html'
    },
    large: {
      entry: 'src/pages/LargeScreen/main.js',
      template: 'public/index.html',
      title: '大屏展示',
      filename: 'largeScreen/index.html'
    }
  },
  // chainWebpack: config => {
  //   config
  //     .entry('index')
  //     .add('babel-polyfill')
  // },
  publicPath: './',
  // node_modules 包使用 babel/polyfill 兼容IE
  transpileDependencies: [
    'normalize-url',
    'prepend-http',
    'sort-keys'
  ],
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    // 显示lint语法警告报错
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
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
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      // 将scss全局引入
      sass: {
        data: `@import "@/styles/mixins.scss";`
      }
    }
  },
  configureWebpack: config => {
    let plugins = [
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/skeleton/skeleton.js'),
          },
        },
        minimize: true,
        quiet: true,
      })
    ]
    // if (process.env.NODE_ENV === 'production') {
    //
    //   plugins.push(
    //     new CopyWebpackPlugin([{
    //       from: path.join(__dirname, 'node_modules/element-ui/lib/theme-chalk/index.css'),
    //       to: path.join(__dirname, 'dist/defaultTheme/index.css')
    //     }])
    //   )
    //
    // }
    return {
      plugins
    }
  }
}
