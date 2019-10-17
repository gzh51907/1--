<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 20:05:32
 * @LastEditTime: 2019-10-10 16:21:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="goods_content">
      <el-image style="width:400px" :src="goodsInfo.goods_image" fit="contain"></el-image>
      <h1>{{goodsInfo.goods_name}}</h1>
      <p class="price" style="margin-bottom:1rem;">
        <del>{{goodsInfo.goods_marketprice}}</del>
        <span style="color:red;marign-left:1rem;">{{goodsInfo.goods_price}}</span>
         <el-input-number v-model="qty" size='small'></el-input-number>
      </p>
      <el-button-group>
        <el-button
          type="warning"
          icon="el-icon-shopping-cart-full"
          style="height:2rem;width:8rem;"
          @click="add2cart"
        >加入购物车</el-button>
        <el-button type="danger" icon="el-icon-goods" style="height:2rem;width:8rem;" @click="buynow">立即购买</el-button>
      </el-button-group>
      <h4>推荐商品</h4>
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="item in goodsInfo.goods_commend_list"
          :key="item.goods_id"
          style="height:300px"
          @click.native="goto(item.goods_id)"
        >
          <el-image style="width:80%" :src="item.goods_image_url" fit="contain"></el-image>
          <h6>{{item.goods_name}}</h6>
          <p class="price">
            <del>￥{{item.goods_promotion_price}}</del>
            <span style="color:red">￥{{(item.goods_promotion_price*0.8).toFixed()}}.00</span>
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <div class="footer_list">
        <div class="footer_item" @click="toIndex">
          <div class="footer_icon">
            <i class="el-icon-s-home"></i>
          </div>
          <div class="footer_text">首页</div>
        </div>
        <div class="footer_item active" @click="toList">
          <div class="footer_icon">
            <i class="el-icon-s-order"></i>
          </div>
          <div class="footer_text">列表页</div>
        </div>
        <div class="footer_item" @click="toCart">
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
      qty:1,
      goodsInfo: {}
    };
  },
  created() {
    let { id } = this.$route.params;
    this.getData(id);
  },
  watch: {
    $route: function(val, oldVal) {
      if (val.params.id != oldVal.params.id) {
        this.getData(val.params.id);
      }
    }
  },
  //路由守卫
  beforeRouteUpdate(to, from, next) {
    if (to.params.id != from.params.id) {
      this.getData(to.params.id);
    }
    next();
  },
  computed:{
    cartLength(){
     return this.$store.getters.cartLength;
    }
  },
  methods: {
    goto(id) {
      // console.log(1)
      this.$router.push({
        path: `/sheBao/goods/${id}`
      });
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
        this.$router.push({name:'cart',path:"/sheBao/cart"})
    },
    async getData(id) {
      let {
        data: { datas }
      } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
        params: {
          act: "goods",
          op: "goods_detail",
          goods_id: id,
          key: ""
        }
      });
      // console.log(datas);
      this.goodsInfo = {
        ...datas.goods_info,
        goods_commend_list: datas.goods_commend_list,
        goods_image: datas.goods_image
      };
    },
    add2cart(){
      console.log()
      let id = this.goodsInfo.goods_id;//当前商品的id

      //判断购物车里是否有相同id的商品
      let currentGoods = this.$store.state.cart.cartlist.filter(item=>item.goods_id===id)[0];
      
      if(currentGoods){
        //如果购物车里有当前商品 修改数量
        let qty = currentGoods.qty + this.qty;
        this.$store.commit('changeQty',{id,qty})
      }else{
        //没有的就直接增加
        let goods = {
          goods_id : id,
          goods_name:this.goodsInfo.goods_name,
          goods_image:this.goodsInfo.goods_image,
          goods_price:this.goodsInfo.goods_price,
          goods_promotion_price:this.goodsInfo.goods_promotion_price,
          qty:this.qty
        }
        this.$store.commit('add2cart',goods);
        console.log(this.goodsInfo);
      }
    },
    buynow(){
      //立即购买
      this.add2cart();
      this.$router.push({name:'cart',path:'/sheBao/cart'})
    }
  }
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  ul,
  li {
    list-style: none;
  }
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .goods_content {
    // height:calc(100% - 50px);
    flex: 1;
    overflow: auto;
    padding-bottom: 50px;
    box-sizing: border-box;
    // position: absolute;
    // bottom: 50px;
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