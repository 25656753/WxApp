import Vue from 'vue'



import App from './App.vue'
import store from '../../../vuex/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  store,    //导入vuex 状态管理
  render: h => h(App),

  // beforeCreate () {
  //   console.log("创建前：");
  //   console.log(this.$el);
  //   console.log(this.$data);
  // },
  // created () {
  //   console.log("创建完成：");
  //   console.log(this.$el);
  //   console.log(this.$data);
  // },
  // beforeMount () {
  //   console.log("挂载前：");
  //   console.log(this.$el);
  //   console.log(this.$data);
  // },
  // mounted () {
  //   console.log("挂载完成：");
  //   console.log(this.$el);
  //   console.log(this.$data);
  // },
  // beforeUpdate () {
  //   console.log('=即将更新渲染=');
  //   let name = this.$refs.app.innerHTML;
  //   console.log('name:' + name);
  // },
  // updated () {
  //   console.log('==更新成功==');
  //   let name = this.$refs.app.innerHTML;
  //   console.log('name:' + name);
  // },
  // beforeDestory () {
  //   console.log("销毁前：");
  // },
  // destoryed () {
  //   console.log("销毁完成：");
  // },


}).$mount('#app')
