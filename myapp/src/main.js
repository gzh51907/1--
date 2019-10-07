/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-01 12:47:46
 * @LastEditTime: 2019-10-07 12:06:05
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';//引入router

Vue.config.productionTip = false

new Vue({
   router, //挂在
  render: h => h(App),
 
}).$mount('#app')
