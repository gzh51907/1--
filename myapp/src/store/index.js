/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:55:16
 * @LastEditTime: 2019-10-10 10:11:51
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';

//1引入Vuex
import Vuex from 'vuex';
import cart from './cart.js';
import common from './common.js';
//2使用Vuex
Vue.use(Vuex);

//3创建store实例
const store = new Vuex.Store({
    //创建state
    //只用模块化store后会影响state数据获取
    //store.state.xx->store.state.cart.xx
    modules: {
        cart,
        common
    }
})
export default store;