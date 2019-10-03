<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-03 20:18:43
 * @LastEditTime: 2019-10-03 22:10:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="jzbox">
    <header>
      <div class="headerbox">
        <h1 class="logo">
          <!-- <img src="../assets\logo.779b7b1.png" alt /> -->
        </h1>
        <div class="menubtn">
          <i class="el-icon-s-fold"></i>
        </div>
      </div>
    </header>
    <div id="container">
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src alt />
            <p>社保服务</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src alt />
            <p>公积金</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src alt />
            <p>企业服务</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src alt />
            <p>增值服务</p>
          </div>
        </el-col>
      </el-row>
      <div id="footer"></div>
    </div>
    <footer>
      <ul id="foot-btns">
        <li class="foot-btn">
          <i class="el-icon-chat-dot-round"></i>
          <p class="foot-font">关注微信</p>
        </li>
        <li class="foot-btn">
          <i class="el-icon-takeaway-box"></i>
          <p class="foot-font">在线缴社保</p>
        </li>
        <li class="foot-btn">
          <i class="el-icon-phone"></i>
          <p class="foot-font">免费热线</p>
        </li>
        <li class="foot-btn">
          <i class="el-icon-user-solid"></i>
          <p class="foot-font">在线客服</p>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import App from './App.vue';

Vue.use(ElementUI);
import "bootstrap/dist/css/bootstrap.css";
export default {
  data() {
    return {
      lunbotuImg: []
    };
  }
};
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
#jzbox {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  header {
    height: 2.2rem;
    width: 100%;
    position: fixed;
    top: 0;
    .headerbox {
      width: 100%;
      height: 100%;
      padding: 0 0.7rem 0 0.7rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        // height: 0.586667rem;
        width: 7.175rem;
        height: 1.4rem;
        background: url(../assets/logo.779b7b1.png);
        background-size: 100%;
      }
      .menubtn {
        width: 0.8rem;
        height: 0.8rem;
        i {
          display: block;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  #container {
    flex: 1;
    overflow: auto;
    width: 100%;
    position: absolute;
    top: 2.2rem;
    .el-row {
      .el-col {
        .grid-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
    #footer {
      height: 2.7rem;
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    height: 2.7rem;
    width: 100%;
    background: #fc9751;
    #foot-btns {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .foot-btn {
        height: 100%;
        text-align: center;
        color: #fff;
       .foot-font{
         font-size: 0.4rem;
       }
      }
    }
  }
}
</style>




