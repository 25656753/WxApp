<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/smallappimg.jpg" />

    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <p>
        <router-link to="/home">精子检测</router-link>
      </p>
      <p>
        <router-link to="/about">查询</router-link>
      </p>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

import router from './router'

export default {
  name: 'App',
  router,
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
