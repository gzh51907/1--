/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-07 11:39:10
 * @LastEditTime: 2019-10-09 15:32:04
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import index from '../pages/index.vue';
import sheBao from '../pages/shebao.vue';
import kefu from '../pages/kefu.vue';
import cal from '../pages/calculator.vue';
import my from '../pages/my.vue';
import reg from '../pages/reg.vue';
import login from '../pages/login.vue';
import social from '../pages/social.vue';
// import sheBaoIndex from '../pages/sheBaoIndex.vue';

let router = new VueRouter({
    routes:[
        {
            name:'index',
            path:'/',
            component:index
        },{
            name:'sheBao',
            path:'/sheBao',
            component:sheBao
        },
        {   
            name:'kefu',
            path:'/kefu',
            component:kefu
        },
        {
            name:'cal',
            path:'/sheBao/cal',
            component:cal
        },
        {
            name:'my',
            path:'/sheBao/my',
            component:my
        },
        {
            name:"reg",
            path:'/sheBao/my/reg',
            component:reg
        },
        {
            name:'login',
            path:'/sheBao/my/login',
            component:login
        },
        {
            name:'social',
            path:'/sheBao/social',
            component:social
        }
    ]
});
export default router;