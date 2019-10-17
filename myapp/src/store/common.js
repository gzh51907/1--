/*
 * @Description: In User Settings Edit;

 * @Author: your name
 * @Date: 2019-10-10 10:12:05
 * @LastEditTime: 2019-10-10 16:16:42
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';


export default {
    state:{
        user:null
    },
    mutations:{
        login(state,{username,Authorization}){
            state.user = {
                username,
                Authorization
            }
            //存入本地存储
            localStorage.setItem('user',JSON.stringify({username,Authorization}))
        },
        logout(state){
            state.user = null;
            localStorage.removeItem('user');

        }
    },
    actions:{
        async checkLogin(context,payload){
            let user = localStorage.getItem('user');
            if(!user){
                context.commit('logout');
                
            }else{
                user = JSON.parse(user);
                //发起ajax请求，校验Token是否过期
                let {data} = await axios.get('http://localhost:4200/verify',{
                    headers:{
                        Authorization:user.Authorization
                    }
                })
                if(data.code===1){
                    context.commit('login',user);
                }else{
                    context.commit('logout');
                    return 400;
                }
                return 200;
            }
        }
    }
}