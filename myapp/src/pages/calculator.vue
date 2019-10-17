<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 16:07:58
 * @LastEditTime: 2019-10-10 16:22:04
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="heademty">
      <p class="head_title">计算器</p>
      <i class="icon"></i>
    </div>
    <div class="calculatorcon">
      <div class="calculatorlist">
        <div class="calculatorItem">
          <div class="calculator-label">缴纳城市</div>
          <div class="calculator-select">
            <div class="calculatoritem_left">请选择缴纳城市</div>
            <div class="calculatoritem_right">
              <i class="el-icon-caret-bottom"></i>
              <el-button
                @click="drawer = true"
                type="default"
                style="width:100%"
                class="city_shift"
              ></el-button>
            </div>
          </div>
        </div>
        <div class="calculatorItem">
          <div class="calculator-label">参保类型</div>
          <div class="calculator-select">
            <div class="calculatoritem_left">请选择社保类型</div>
            <div class="calculatoritem_right">
              <i class="el-icon-caret-bottom"></i>
              <el-button
                @click="drawer = true"
                type="default"
                style="width:100%"
                class="city_shift"
              ></el-button>
            </div>
          </div>
        </div>
        <div class="calculatorItem">
          <div class="calculator-label">社保基数</div>
          <div class="calculator-input">
            <div class="calculatoritem_base">
              <input type="number" placeholder="请输入基数" class="socialBase" />
            </div>
            <div class="calculatoritem_right">范围：0-0</div>
          </div>
        </div>
        <div class="calculatorItem">
          <div class="calculator-label">公积金基数</div>
          <div class="calculator-input">
            <div class="calculatoritem_base">
              <input type="number" placeholder="请输入基数" class="fundbase" />
            </div>
            <div class="calculatoritem_right">范围：0-0</div>
          </div>
        </div>
        <div class="calculatorBtn">
          <div class="immediately">立即计算</div>
          <div class="calculator_reset">重置</div>
        </div>
      </div>
    </div>

    <el-drawer
      title
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      class="city_con"
    >
      <span>
        <div class="van-picker">
          <div class="van-top">
            <div class="van-cancel">取消</div>
            <div class="van-title">城市</div>
            <div class="van-confirm">确定</div>
          </div>
          <div class="van-body" v-for="item in cityData" :key="item.id">
            <div class="van-body-left">
              <ul class="wrapper-list">
                <li class="wrapper-item">{{item.area_name}}</li>
              </ul>
            </div>
            <div class="van-body-right">
              <ul class="city_list">
                <li class="city_item" v-for="city in item.item" :key="city.id">{{city.area_name}}</li>
              </ul>
            </div>
          </div>
        </div>
      </span>
    </el-drawer>
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
          <el-badge :value="cartLength" class="item">
            <div class="footer_icon">
              <i class="el-icon-s-platform"></i>
            </div>
          </el-badge>
          <div class="footer_text">购物车</div>
        </div>
        <div class="footer_item active" @click="toCal">
          <div class="footer_icon">
            <i class="el-icon-shopping-cart-1"></i>
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
      drawer: false,
      direction: "btt",
      cityData: []
    };
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    toList() {
      this.$router.push({
        name: "list",
        path: "/sheBao/list"
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
    toCart() {
      this.$router.push({ name: "cart", path: "/sheBao/cart" });
    },
    getCityData() {
      // console.log(this.$axios);
      let api = "http://www.jzbshebao.cn/app/index/getCity";
      this.$axios.get(api).then(res => {
        this.cityData = res.data.data;
      });
    }
  },
  mounted() {
    this.getCityData();
  },
  created() {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
html,
body {
  height: 100%;
  width: 100%;
  background: #eee;
}
#app {
  height: 100%;
  background: #eee;
  .heademty {
    height: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: relative;
    .icon {
      position: absolute;
      right: 16px;
      width: 1.15rem;
      height: 1.05rem;
      background: url("../assets/img/icon_1.png");
      background-size: 100% 100%;
    }
  }
  .calculatorcon {
    .calculatorlist {
      padding: 0 0.9rem;
      .calculatorItem {
        margin-top: 0.5rem;
        .calculator-label {
          font-size: 1rem;
          height: 2.4rem;
          line-height: 2.2rem;
          font-weight: 700;
        }

        .calculator-select {
          position: relative;
          width: 100%;
          height: 2rem;
          line-height: 2rem;
          font-size: 0.8rem;
          color: #666;
          font-weight: 300;
          display: flex;
          justify-content: space-between;
          background: url(../assets/img/calculatorbg10.png);
          background-size: 100% 100%;
          .city_shift {
            // opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            opacity: 0;
          }
          .calculatoritem_left {
            padding-left: 0.6rem;
            width: 92%;
            line-height: 1.75rem;
          }
          .calculatoritem_right {
            z-index: 1;
            width: 8%;
            text-align: center;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            color: #fff;
            font-size: 1.2rem;
            background: rgb(218, 215, 215);
          }
        }
        .calculator-input {
          width: 100%;
          height: 2.4rem;
          line-height: 2.4rem;
          font-size: 0.8rem;
          color: #666;
          font-weight: 300;
          display: flex;
          border: 1px solid #d2d2d2;
          color: #666;
          box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.35);
          border-radius: 0.25rem;
          .calculatoritem_base {
            width: 50%;
            .socialBase {
              width: 100%;
              padding-left: 0.6rem;
              height: 100%;
              border: none;
              // color:
            }
            .fundbase {
              width: 100%;
              padding-left: 0.6rem;
              height: 100%;
              border: none;
            }
          }
          .calculatoritem_right {
            width: 50%;
            text-align: center;
          }
        }
      }
      .calculatorBtn {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        .immediately {
          width: 6.5rem;
          height: 2.2rem;
          line-height: 2.2rem;
          text-align: center;
          color: #fff;
          background: #ee9746;
          font-size: 1rem;
          border-radius: 0.25rem;
        }
        .calculator_reset {
          margin-left: 3rem;
          width: 6.5rem;

          height: 2.2rem;
          line-height: 2.2rem;
          text-align: center;
          color: #fff;
          background: #d2d2d2;
          border-radius: 0.25rem;
          font-size: 1rem;
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
.city_con {
  .van-picker {
    .van-top {
      height: 44px;
      display: flex;
      justify-content: space-between;
      line-height: 44px;
      .van-cancel {
        font-size: 0.6rem;
        color: #666;
      }
      .van-title {
        color: #444;
        font-size: 1rem;
      }
      .van-confirm {
        color: #ee9746;
        font-size: 0.6rem;
      }
    }
    .van-body {
      width: 100%;
      display: flex;
      .van-body-left {
        width: 40%;
        text-align: center;
        overflow: auto;
        .wrapper-list {
          line-height: 44px;
          .wrapper-item {
            height: 44px;
            font-size: 1px;
            padding: 0 5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .van-body-right {
        width: 60%;
        text-align: center;
        overflow: auto;
        font-size: 16px;
        .city_list {
          line-height: 44px;
          .city_item {
            height: 44px;
            font-size: 1rem;
            padding: 0 5px;
            color: #000;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>