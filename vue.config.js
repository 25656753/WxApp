module.exports = {
  configureWebpack: {       //进入断点
    devtool: 'source-map'
  },
  devServer: {             //axios代码设置
    port: 8080,
    proxy: {
      '/apis': {//代理api
        target: "http://192.168.3.180:8000",//服务器api地址
        changeOrigin: true,//是否跨域
        pathRewrite: {//重写路径
          "^/apis": ''
        }
      }
    }
  }
}