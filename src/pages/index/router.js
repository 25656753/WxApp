import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import HelloWorld from '../../components/HelloWorld'
import ah from '../../components/pp'
import login from '../../components/ssologin'
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
  },
  {
    path: "/login",
    component: login,
  },
]

var router = new VueRouter({
  mode: "history",
  routes,
})
export default router;