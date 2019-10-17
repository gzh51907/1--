<!--
 * @Description: In User Settings Ed
 * @Author: your name
 * @Date: 2019-10-08 16:06:11
 * @LastEditTime: 2019-10-10 16:48:06
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="content">
      <div class="head">
        <h2>我的</h2>
      </div>
      <div class="logo">
        <img src="../assets/img/logo.cf.png" alt />
        <p>{{message}}</p>
        <el-button type="warning" style="width:4rem;
        height:2rem;" @click="login" v-if="!currentUser">登录</el-button>
             <el-button type="danger" style="width:4rem;
        height:2rem;" @click="logout"  v-else >退出</el-button>
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
        <div class="footer_item" @click="toCart">
          <el-badge class="item">
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
        <div class="footer_item active" @click="tomy">
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
      message: "你好,请登录",
      btnmsg: "未登录"
    };
  },
  computed:{
   
    currentUser(){
      return this.$store.state.common.user
    }
  },
  methods: {
    logout(){
      this.$store.commit('logout')
    },
    login() {
      this.$router.push({name:'login',path:'/sheBao/login'})
    },
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
    }
  },
  created() {
    this.$store.dispatch("checkLogin");
    let { username } = JSON.parse(localStorage.getItem("user"));
    if (username) {
      this.message = `${username},欢迎你`;
      this.btnmsg = "退出";
    }else{
      this.message = `你好，请登录`
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    height: 100%;
    overflow: auto;
    width: 100%;
    .head {
      width: 100%;
      height: 50px;
      position: fixed;
      text-align: center;
      font-size: 0.8rem;
    }
    .logo {
      margin-top: 50px;
      width: 100%;
      height: 10rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      img {
        width: 4rem;
        height: 4rem;
      }
    }
  }
}
</style>