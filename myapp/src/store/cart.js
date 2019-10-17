/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 10:02:06
 * @LastEditTime: 2019-10-10 14:06:41
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';
import {Message} from 'element-ui';


let cart = {
    state:{
        cartlist:[   
                {
                    goods_id: "217516",
                    goods_name:
                      "夏季潮男背心欧美街头个性嘻哈潮牌街舞运动宽松无袖t恤男潮流 黑色 L",
                    goods_promotion_price: "79.00",
                    goods_price: "79.00",
                    goods_image:
                      "https://www.nanshig.com/data/upload/shop/store/goods/16/16_05543842791908251_240.jpg",
                    qty:2
                  },
                  {
                    goods_id: "216159",
                    goods_name:
                      "夏装印花字母 无袖T恤 宽松运动 背心汗衫 t恤男装学院风 韩版 潮 酒红色 M",
                    goods_promotion_price: "60.00",
                    goods_price: "60.00",
                    goods_image:
                      "https://www.nanshig.com/data/upload/shop/store/goods/32/32_05539526257137533_240.jpg",
                      qty:3
                  },
                  {
                    goods_id: "226708",
                    goods_name:
                      "裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 XL",
                    goods_promotion_price: "119.00",
                    goods_price: "119.00",
                    goods_image:
                      "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960739685357586_240.jpg",
                      qty:2
                  }
        ]
    },
    getters:{
        cartLength(state){
            return state.cartlist.length;
        },
        totalPrice(state){
           return state.cartlist.reduce((prev,item)=>prev+item.goods_price*item.qty,0)
        }
    },
    mutations:{
        //state : store中的state
        //playload:调用mutation 传入的参数
        add2cart(state,goods){
            console.log(goods);
            state.cartlist.unshift(goods);
        },
        changeQty(state,{id,qty}){//更改商品数量
            state.cartlist.forEach(item=>{
                if(item.goods_id === id){
                    item.qty = qty;
                }
            })
        },
        removeQty(state,id){//删除商品
            console.log(id)
           state.cartlist =  state.cartlist.filter(item=>item.goods_id!=id);
           console.log(state.cartlist);
        },
        clearCart(state){//清空购物车
            state.cartlist = [];
        }
    }
}
export default cart;
