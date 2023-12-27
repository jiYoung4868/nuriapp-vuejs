import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 1 기본구조
  render: function(createElement) {
    return createElement(App);
  },
  // 2 createElement == h
  render: function(h) {
    return h(App);
  },
  // 3 화살표함수
  render: (h) => {
    return h(App);
  },
  // 4 인자가 하나인 경우 사용가능
  render: h => h(App),
}).$mount('#app')
