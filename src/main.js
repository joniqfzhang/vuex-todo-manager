import Vue from 'vue';
import App from './App.vue';
import store from './store'; //index.js can be found automitically

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
