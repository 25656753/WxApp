const pageutils = require('./vue.util');
// 引进config.js
const BaseUrl = require("./src/config.js");


module.exports = {
  configureWebpack: {       //进入断点
    devtool: 'source-map'
  },
  pages: pageutils.pages(),   //多页面配置
  // pages: {       //多页面配置
  //   index: {
  //     // 入口js的路径
  //     entry: './src/pages/index/main',
  //     // 页面模板路径
  //     template: './src/pages/index/index.html'
  //   }
  // },
  devServer: {             //axios代码设置
    port: 8080,
    host: "0.0.0.0",
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    proxy: {
      [BaseUrl.ROOT]: {
        target: BaseUrl.URL, // 通过本地服务器将你的请求转发到这个地址
        changeOrigin: true, // 设置这个参数可以避免跨域
        pathRewrite: {
          [`^${BaseUrl.ROOT}`]: "/"
        }

        // '/apis': {//代理api   开发环境
        //   target: "http://192.168.3.181:8000",//服务器api地址
        //   changeOrigin: true,//是否跨域
        //   pathRewrite: {//重写路径
        //     "^/apis": ''
        //   }
      },

    }
  },

}