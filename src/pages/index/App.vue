<template>
  <div id="app">
    <el-menu
      id="nav"
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="/wx.html" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>

    <img alt="Vue logo" src="../../assets/smallappimg.jpg" />
    <p>
      <a href="/wx.html">转到WX主页</a>
    </p>
    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <p>
        <router-link to="/home">精子检测</router-link>
      </p>
      <p>
        <router-link to="/about">查询</router-link>
      </p>
       <p>
        <router-link to="/login">login</router-link>
      </p>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

import router from './router'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  router,
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}

#nav {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
