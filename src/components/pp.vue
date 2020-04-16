<template>
  <div>
    <h1>{{a}}</h1>
    <input type="text" v-aa v-model="a" />
  </div>
</template>
<script>
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
  }

}
</script>