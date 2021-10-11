import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
})



app.$mount('#app')
