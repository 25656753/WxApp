<template>
  <div>
    <a href="http://masschip.cn">masschip</a>
    <p>masschip</p>
    <h1>{{a}}</h1>
    <h1>
      <h3>{{$store.state.count}}</h3>
      <el-button @click="$store.state.count++">clikc</el-button>
    </h1>
    <el-button @click="userlogin()">login</el-button>
  </div>
</template>
<script>
import { login } from "../axiosauth2"
export default {
  name: "pp",
  data: function () {
    return {
      a: "请输入",
    }
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    aa: {
      // 指令的定义
      update: function (el) {
        // 聚焦元素
        el.val = "please";
      }
    }
  },
  methods: {
    userlogin () {
      login(this);    }
  }

}
</script>