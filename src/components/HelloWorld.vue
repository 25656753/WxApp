<template>
  <div class="hello">
    <el-button @click="login()" type="success">登录</el-button>
    <el-button @click="getdata()" type="success">取得数据</el-button>
    <h1 :class="mc">{{ msg }}</h1>
    <h1 :class="mc">{{ title }}</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p>{{ inhere }}</p>

    <table>
      <thead>
        <th>用户ID</th>
        <th>用户名称</th>
        <th>可用</th>
        <th>创建时间</th>
      </thead>
      <tbody>
        <tr v-for="item in persons" v-bind:key="item">
          <td>{{ item.userid }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.enabled }}</td>
          <td>{{ item.create_time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../myaxios";
import { getCookie } from "../cookie"
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: String
  },
  data () {
    return {
      persons: [],
      name: '555eee',
      age: '',
      inhere: '',
      mc: 'gg'
    }
  },
  methods: {
    login () {
      this.mc = "gg1"
      axios.post("/apis/login", { "username": "root", "password": "1234567" }, (status, data) => {
        console.log("-------->" + status + data);
        if ((status != null) && (status == 200)) {

          alert(data);

        }

      }, () => {
        console.log("登录错误");

      });
    },
    getdata () {
      axios.get("/apis/g2", {}, (response) => {
        alert(getCookie("XSRF-TOKEN"));
        console.log("------>response" + response);
        if (response.status == 200) {
          const result = response.data;
          this.persons = result;
          console.log(result);
        }
      }, (error) => {

        console.log("--->enter errors");
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
    }
  },
  mounted () {
    console.log("----------->" + process.env.NODE_ENV);
    // axios.get("/apis/tp", {}, (response) => {
    //   console.log(response);
    //   if (response.status == 200) {
    //     const result = response.data;
    //     this.name = result.name;
    //     this.age = result.age;
    //     this.inhere = result.inhere;
    //   }
    // }
    // );


    // 发ajax请求，用以获取数据，此处地址意思是查询 github中 vue 星数最高的项目
    //const url = 'http://192.168.3.180:8000/tp';
    // const url1 = '/apis/t2';
    // //axios.defaults.changeOrigin = true
    // const params = new URLSearchParams();
    // params.append('user', { "name": "fdfd", "age": 43, "inhere": "2019-12-3" });
    // // params.append('age', 12);
    // axios.post(url1, params).then(
    //   response => {
    //     const result = response.data;
    //     console.log(result)


    //   }
    // ).catch(
    //   response => {
    //     alert('请求失败' + response);
    //   },
    // );



    // axios.get(url).then(
    //   response => {
    //     const result = response.data;
    //     console.log(result)
    //     this.name = result.name;
    //     this.age = result.age;
    //     this.inhere = result.inhere;

    //   }
    // ).catch(
    //   response => {
    //     alert('请求失败' + response);
    //   },
    // );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.gg {
  color: cornflowerblue;
}
.gg1 {
  color: red;
}
</style>
