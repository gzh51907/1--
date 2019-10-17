<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 21:06:42
 * @LastEditTime: 2019-10-10 16:22:16
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="content">
      <div class="head">
        <h2>购物车</h2>
      </div>
      <div class="goods_list">
        <div class="goods_li" v-for="item in cartlist" :key="item.goods_id">
          <el-row :gutter="20" style="width:100%;">
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <input type="checkbox" style="heigh:1rem;width:1rem;" />
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
              <img :src="item.goods_image" alt />
            </el-col>
            <el-col :span="13">
              <div class="grid-content bg-purple">
                <p class="good_name">{{item.goods_name}}</p>
                <div class="price_box">
                  <span
                    class="price"
                    style="font-size: 0.5rem; color: #d82121;marign-right:1rem;"
                  >￥{{item.goods_price}} &times;</span>
                  <el-input-number
                    v-model="item.qty"
                    size="mini"
                    @change="handleChange"
                    class="num_input"
                    style="width:6rem;height:2rem;marign-left:1rem;"
                  ></el-input-number>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple">
                <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="removeItem(item.goods_id)"></el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="goods_bottom">
          <div class="clearCart">
            <input type="checkbox" />
            <el-button type="danger" style="width:6rem;height:2rem;" @click="clearCart">清空购物车</el-button>
          </div>
          <div class="cart_cal">
            <span>总价:<span class="price" style="color:red">￥{{totalPrice.toFixed()}}.00</span></span>
            <el-button type="success" style="width:6rem;height:2rem;">结算</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_list">
        <div class="footer_item" @click="toIndex">
          <div class="footer_icon">
            <i class="el-icon-s-home"></i>
          </div>
          <div class="footer_text">首页</div>
        </div>
        <div class="footer_item" @click="toList">
          <div class="footer_icon">
            <i class="el-icon-s-order"></i>
          </div>
          <div class="footer_text">列表页</div>
        </div>
        <div class="footer_item active" @click="toCart">
           <el-badge :value='cartLength' class="item">
          <div class="footer_icon">
            <i class="el-icon-shopping-cart-1"></i>
          </div>
           </el-badge>
          <div class="footer_text">购物车</div>
        </div>
        <div class="footer_item" @click="toCal">
          <div class="footer_icon">
            <i class="el-icon-s-platform"></i>
          </div>
          <div class="footer_text">计算器</div>
        </div>
        <!-- <router-link> -->
        <div class="footer_item" @click="tomy">
          <div class="footer_icon">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="footer_text">我的</div>
        </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      datalist: [
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
    };
  },
  computed:{
    cartLength(){
      return this.$store.getters.cartLength;
    },
    cartlist(){
      return this.$store.state.cart.cartlist;
    },
    totalPrice(){
    //   let total = 0;
    // this.cartlist.forEach(item=>{
    //     total += item.goods_price*item.qty
    //     })
    //     // console
    //     return total;
    return this.$store.getters.totalPrice;
    }
  },
  methods: {
    clearCart(){
      this.$store.commit('clearCart');
    },
    removeItem(id){
      this.$store.commit('removeQty',id);
    },
    handleChange(val){
      console.log(val)
    },
    tomy() {
       this.$router.push({
        name:'my',path:'/sheBao/my'
      })
    },
    toCal() {
      this.$router.push({ name: "cal", path: "/cal" });
    },
    toIndex() {
      this.$router.push({
        name: "sheBao",
        path: "/sheBao"
      });
    },
    toList() {
      this.$router.push({
        name: "list",
        path: "/sheBao/list"
      });
    },
    toCart() {
      this.$router.push({ name: "cart", path: "/sheBao/cart" });
    }
  }
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  .content {
    flex: 1;
    overflow: auto;
    position: relative;
    .head {
      height: 50px;
      background: #fff;
      text-align: center;
      font-size: 1rem;
      line-height: 50px;
      position: fixed;
      top: 0;
      width: 100%;
      h2 {
        text-align: center;
      }
    }
    .goods_list {
      width: 100%;
      position: absolute;
      top: 50px;
      .goods_li {
        padding: 0 0.8rem;
        //    line-height: 5rem;
        display: flex;
        align-items: center;
        height: 5rem;
        background: #fff;
        img {
          // line-height: 5rem;
          width: 4rem;
          height: 4rem;
        }
        .good_name {
          height: 1rem;
          line-height: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 10rem;
          display: inline-block;
          font-size: 0.4rem;
          .price_box {
            height: 4rem;
            display: inline-block;
            .price {
              font-size: 0.5rem;
              color: #d82121;
            }
            .num_input {
              width: 1rem;
            }
          }
        }
      }
        .goods_bottom{
          margin-top: 2rem;
            height: 4rem;
        width: 100%;
        padding: 0 0.8rem;
        display: flex;
        justify-content: space-between;
            .clearCart{
              // width:10rem;
            }
        }
    }
  }
  .footer {
    border-top: 1px solid #fcf4f4;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    .footer_list {
      height: 100%;
      display: flex;
      justify-content: space-around;
      .footer_item {
        width: 25%;
        height: 100%;
        text-align: center;
        font-size: 0.8rem;
        color: #7d7e80;
        .footer_icon {
          margin: 0.3rem 0;
        }
      }
      .active {
        color: #f97a2e;
      }
    }
  }
}
</style>