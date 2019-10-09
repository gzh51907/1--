/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-01 12:47:46
 * @LastEditTime: 2019-10-09 13:55:29
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';//引入router

Vue.config.productionTip = false

import axios from 'axios';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.prototype.$axios = axios;



new Vue({
   router, //挂在
  render: h => h(App),
 
}).$mount('#app')
