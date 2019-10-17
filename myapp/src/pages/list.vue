<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 15:27:44
 * @LastEditTime: 2019-10-10 11:20:16
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="content">
      <el-carousel height="200px">
        <el-carousel-item v-for="item in listdata" :key="item.data">
          <img :src="item.image" style="width:100%" />
        </el-carousel-item>
      </el-carousel>
      <div v-for="category in recommend" :key="category.title">
        <h4 style="font-size:1rem; color: #f97a2e;">{{category.title}}</h4>
        <el-row :gutter="20">
          <el-col
            :span="12"
            style="height:300px;"
            v-for="li in category.item"
            :key="li.goods_id"
            @click.native="goto(li.goods_id)"
          >
            <img style="width:10rem;" :src="li.goods_image" alt />
            <p class="goods_name" style>{{li.goods_name}}</p>
            <div class="goods_price">
              <span
                class="old_price"
                style="color:#444;text-decoration: line-through;"
              >￥{{li.goods_price}}</span>
              <span class="now_price" style="color:red">￥{{li.goods_promotion_price}}</span>
            </div>
          </el-col>
        </el-row>
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
        <div class="footer_item active" @click="toList">
          <div class="footer_icon">
            <i class="el-icon-s-order"></i>
          </div>
          <div class="footer_text">列表页</div>
        </div>
        <div class="footer_item" @click="toCart">
          <el-badge :value="cartLength" class="item">
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
      recommend: [],
      listdata: []
    };
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    }
  },
  methods: {
    tomy() {
      let Authorization = localStorage.getItem("Authorization");
      if (Authorization) {
        this.$router.push({ path: "/sheBao/my/reg" });
      } else {
        this.$router.push({ path: "/sheBao/my/login" });
      }
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
    },
    goto(id) {
      // console.log(1)
      this.$router.push({
        path: `/sheBao/goods/${id}`
      });
    }
  },
  async created() {
    let {
      data: { datas }
    } = await this.$axios.get("https://www.nanshig.com/mobile/index.php");
    this.listdata = datas[0].adv_list.item;
    this.recommend = datas.slice(1).map(item => {
      return item.goods; //提取数据
    });
    // console.log(this.recommend);
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
  display: flex;
  height: 100%;
  width: 100%;
  .content {
    overflow: auto;
    box-sizing: border-box;
    padding: 0.8rem;
    width: 100%;
    height: calc(100% - 50px);
    background: #f2f2f2;
    .el_row {
      .goods_name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.5rem;
        text-decoration: line-through;
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
