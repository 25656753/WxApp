//项目域名地址
let URL = "http://192.168.3.180:8000";

let ROOT;
//由于封装的axios请求中，会将ROOT打包进去，为了方便之后不再更改，判断了当前环境，而生成的不同的ROOT
if (process.env.NODE_ENV === "development") {
  //开发环境下的代理地址，解决本地跨域跨域，配置在vue.config.js里
  ROOT = "/apis";
} else {
  //生产环境下的地址
  ROOT = "/apis";
}
// export default { ROOT, URL };

var config = {
  //请求授权地址
  userAuthorizationUri: "http://192.168.3.180:8000/auth/oauth/authorize",
  //accessToken请求地址
  accessTokenUri: "/auth/oauth/token",
  //用户信息请求地址
  userInfoUri: "http://192.168.3.180:8000/auth/api/user",
  //登出请求地址
  logoutUri: "http://l192.168.3.180:8000/auth/logout",
  //项目地址
  localuri: "http://192.168.3.180:8080",
  //回调地址
  redirect_uri: "http://192.168.3.180:8080/login",
  //案例资源服务器地址
  resUri: "http://192.168.3.180:8000",
  //客户端相关标识，请从认证服务器申请
  clientId: "SampleClientId",
  client_secret: "secret",
  //申请的权限范围
  scope: "user",
  //可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
  state: "",
  //一些固定的请求参数
  response_type: "code",
  grant_type: "authorization_code",
  code: "",
}


exports.URL = URL; //代理指向地址
exports.ROOT = ROOT;
exports.config = config;