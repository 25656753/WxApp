<template>
  <div>
    <p>授权码={{code}}</p>
    <p>refresh_token={{refresh_token}}</p>
    <p>token={{token}}</p>
    <p>
      <el-button @click="getTokenFromService()">取得token</el-button>
    </p>
    <p>
      <el-button @click="refreshtoken()">刷新token</el-button>
    </p>
    <p>
      <el-button @click="getdata('/auth/api/tt')">取得数据</el-button>
    </p>
    <p>
      <el-button @click="getdata('/auth/api/tt1')">取得数据tt1</el-button>
    </p>
  </div>
</template>
<script>
import axios from "../myaxios"
import mconfig from "../../src/config"
export default {
  name: "ssologin",
  data: function () {
    return {
      code: "",
      state: "",
      token: "",
      refresh_token: "",
    }
  },

  methods: {
    refreshtoken: function () {
      axios.post("/apis" + mconfig.config.accessTokenUri, {
        "client_id": mconfig.config.clientId,
        "client_secret": mconfig.config.client_secret,
        "grant_type": "refresh_token",
        "refresh_token": this.refresh_token,
      }, (response) => {
        if ((response.status != null) && (response.status == 200)) {
          this.token = response.data.access_token
          this.refresh_token = response.data.refresh_token;
        }

      }, () => {
        console.log("登录错误");
        alert("登录错误");
      });

    },

    getTokenFromService: function () {
      alert("/apis" + mconfig.config.accessTokenUri);
      axios.post("/apis" + mconfig.config.accessTokenUri, {
        "client_id": mconfig.config.clientId,
        "client_secret": mconfig.config.client_secret,
        "code": this.code,
        "redirect_uri": mconfig.config.redirect_uri,
        "grant_type": mconfig.config.grant_type
      }, (response) => {
        if ((response.status != null) && (response.status == 200)) {
          this.token = response.data.access_token;
          this.refresh_token = response.data.refresh_token;
        }

      }, () => {
        console.log("登录错误");
        alert("登录错误");
      });
    },

    getdata: function (uri) {
      axios.get("/apis" + uri, { "access_token": this.token }, (response) => {

        console.log("------>response" + response);
        if (response.status == 200) {
          const result = response.data;

          alert(result);
        }
      }, (error) => {

        console.log("--->enter errors");
        alert(error.message);
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
      );
    },


  },
  mounted: function () {
    this.code = this.$route.query.code;
    this.state = this.$route.query.state;
    // maxios.post("/apis/login")
    //  maxios.post("")
    // this.getToken();
  }

}
</script>