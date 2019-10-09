<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 15:27:44
 * @LastEditTime: 2019-10-09 18:49:52
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="content">
      <div class="head">
        <div class="title">缴社保</div>
        <div class="icon">
          <img src="../assets/img/icon_1.png" alt />
        </div>
      </div>
      <div class="con">
        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="参保套餐"></el-step>
          <el-step title="参保方案"></el-step>
          <el-step title="确认订单"></el-step>
        </el-steps>
        <div class="insured">
            <div class="participants">
                <div class="participants_left">
                    <span class="part_icon">
                        <img src="../assets/img/part_icon.png" alt="">
                        </span>
                        <span>参保人</span>
                </div>
                <div class="participants_right"></div>
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
        <div class="footer_item active" @click="toSocial">
          <div class="footer_icon">
            <i class="el-icon-s-order"></i>
          </div>
          <div class="footer_text">社保</div>
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
    return {};
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
    toSocial() {
      this.$router.push({
        name: "social",
        path: "/sheBao/social"
      });
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
  display: flex;
  height: 100%;
  width: 100%;
  .content {
    width: 100%;
    height: calc(100% - 50px);
    background: #f2f2f2;
    .head {
      height: 46px;
      line-height: 46px;
      text-align: center;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      .icon {
        position: absolute;
        display: inline-block;
        right: 16px;
        top: 0;
        img {
          height: 1.3rem;
          width: 1.4rem;
        }
      }
    }
    .con{
        width: 100%;
        top: 46px;
        position: absolute;
        padding: 0 2rem;
        .el-steps{
            width: 100%;
            .el-step{
                // text-align: center;
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
