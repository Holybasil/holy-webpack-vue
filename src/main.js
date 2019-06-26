import Vue from "vue";
import App from './app.vue'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h=>h(App)
})