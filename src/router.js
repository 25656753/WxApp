import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import HelloWorld from './components/HelloWorld.vue'
import ah from './components/pp.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: HelloWorld
  },
  {
    path: "/about",
    component: ah
  }
]

var router = new VueRouter({
  routes
})
export default router;