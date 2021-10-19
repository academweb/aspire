import Vue from 'vue'
import App from './App.vue'
import store from './store';

import validator from './components/utils/validator';
validator(Vue)

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import VTooltip from 'v-tooltip'
const options ={
  defaultPlacement: 'right'
}
Vue.use(VTooltip, options)

Vue.config.productionTip = false


const app = new Vue({
  store,
  render: h => h(App),
})



app.$mount('#app')
