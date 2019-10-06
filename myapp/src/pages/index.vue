<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-03 20:18:43
 * @LastEditTime: 2019-10-06 17:27:40
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
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="150px">
          <el-carousel-item v-for="item in lunbotuImg" :key="item">
            <!-- <h3 class="small">{{ item }}</h3> -->
            <!-- <img src="../assets/img/lb1.png" alt /> -->
            <img :src="item" alt style="height:100%;width:100%;" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="20" style="width:100%; marign-left:0">
        <el-col :span="6" v-for="(item) in titlebox" :key="item.title">
          <div class="grid-content bg-purple">
            <img :src="item.imgurl" alt style="width:2.25rem;height:2.25rem;" />
            <p>{{item.title}}</p>
          </div>
        </el-col>
      </el-row>
      <div class="shiftTips">
        <div class="laba">
          <img src="../assets/img/new1.png" alt />
        </div>
        <ul class="tips">
          <transition>
            <li class="tip tip1" v-bind="move()" :style="transform">
              <a href="###">关于最新城乡医保的分析通知</a>
            </li>
          </transition>
          <transition>
            <li class="tip tip2" v-bind="move()">
              <a href="###">什么是五险一金</a>
            </li>
          </transition>
        </ul>
      </div>
      <div class="colee"></div>

      <div class="serverList">
        <div class="server_header list_title">
          <span>服务套餐</span>
          <span>Discount package</span>
        </div>
        <div class="meals-index">
          <div class="meal-index">
            <div class="meallist">
              <div
                class="mealitem"
                style="width:10rem;"
                v-for="item in shebaodata"
                :key="item.title"
              >
                <div class="mealtitle">{{item.name}}</div>
                <div class="mealmonth">参保月数{{item.start}}-{{item.end}}个月</div>
                <div class="discount">优惠价：{{item.price}}元/月</div>
                <div class="costprice">原价：{{item.original_price}}元/月</div>
                <div class="canbaoSubmit">
                  <img src="../assets/img/canbao1.png" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="rightbtn">
            <i class="el-icon-arrow-right"></i>
          </div>
          <p class="ps-index">*社保公积金同时缴纳，只收取一项服务费</p>
        </div>
      </div>
      <div class="colee"></div>
      <div class="cations">
        <div class="cations_header list_title">
          <span>资质展示</span>
          <span>Qualification show</span>
        </div>
        <div class="cationsBanner">
          <div class="van-swipe">
            <div class="van-box" :style="vanboxAnimate">
              <div class="van-swipe-item" v-for="item in vanbox" :key="item">
                <img :src="item" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="newscation">
        <div class="news_header list_title">
          <span>新闻资讯</span>
          <span>News and infomation</span>
        </div>
        <div class="newslist">
          <div class="news_tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane
                :label="item.label"
                :name="item.name"
                v-for="item in tabsCont"
                :key="item.name"
              >
                <div class="new1" v-for="list in item.spancont" :key="list">
                  <span>{{list}}</span>
                  <span>
                    <img src="../assets/img/jiantou.png" alt />
                  </span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <div class="footercon">
        <div class="desfooter">
          <p>缴社保就选桔子保</p>
          <p>Copyright@2018-2019 粤ICP18104201号</p>
        </div>
        <div class="footerimg">
          <img src="../assets/img/footerlogo.png" alt />
        </div>
      </div>
      <footer>
        <ul id="foot-btns">
          <li class="foot-btn">
            <i class="el-icon-chat-dot-round"></i>
            <p class="foot-font" @click="weixin">关注微信</p>
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
      <div class="weixinImg" ref="wx" @click="weixin">
        <img src="../assets/img/wxcode1.jpg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import Tab from "../components/tabs.vue";

Vue.use(ElementUI);

let lb = [
  require("../assets/img/lb1.png"),
  require("../assets/img/lb2.png"),
  require("../assets/img/lb3.png")
];

import "bootstrap/dist/css/bootstrap.css";

export default {
  components: {
    Tab
  },
  data() {
    return {
      shiftNum: 2,
      transform: { transform: "translateY(0rem)" },
      lunbotuImg: lb,
      shebaodata: "",
      wxerweima: true,
      titlebox: [
        {
          imgurl: require("../assets/img/bao1.png"),
          title: "社保服务"
        },
        { imgurl: require("../assets/img/fund1.png"), title: "公积金" },
        { imgurl: require("../assets/img/qi1.png"), title: "企业服务" },
        { imgurl: require("../assets/img/zeng1.png"), title: "增值服务" }
      ],
      vanbox: [
        require("../assets/img/license1.png"),
        require("../assets/img/license2.png"),
        require("../assets/img/license3.png"),
        require("../assets/img/license4.png"),
        require("../assets/img/license5.png")
      ],
      vanboxAnimate: "transform: translateX(-140px)",
      tabsCont: [
        {
          label: "社会公积金",
          spancont: [
            "社保漏交一个月怎么补 社保断缴了怎么办",
            "什么年龄交社保最划算 交社保有什么用",
            "个人找社保代缴公司要注意什么 没有固定工作单位怎么办",
            "社保代缴证明是什么 社保代缴证明怎么写",
            "挂靠单位交社保可以吗？ 挂靠单位缴社保有什么后果"
          ],
          name: "first"
        },
        {
          label: "人力资源",
          spancont: [
            "现代企业人力资源现状",
            "为什么越来越多的企业选择劳务派遣工",
            "企业人力资源规划书怎么写",
            "HR一定要考人力资源管理师证书吗",
            "人力资源服务行业，年增长率连续三年保持20%以上"
          ],
          name: "second"
        },
        {
          label: "政策解读",
          spancont: [
            "关于最新城乡医保的通知分析",
            "常州市住房公积金贷款提取政策新政策实施宣传",
            "关于调整2019年住房公积金缴存额的通知",
            "个人住房公积金贷款服务指南（普通公积金贷款）",
            "深圳市住房公积金管理中心关于做好2019年住房公积金的策略"
          ],
          name: "third"
        },
        {
          label: "常见问题",
          spancont: [
            "住房公积金卡的初始密码是什么？初始密码怎么查询？",
            "装修房子可以提取公积金吗，需要什么材料？",
            "个人公积金贷款已经还2年了，现在想用个人账户里的剩余",
            "在外地贷款购买了一套二手房，现在已还贷3个月，提取能不能",
            "本人为北京公积金，办理保定异地贷款，现手机号码更换"
          ],
          name: "fourth"
        }
      ],
      activeName: "first"
    };
  },
  methods: {
    shiftTitle: function() {
      this.style.top = -20 + "rem";
    },
    move: function() {
      setInterval(() => {
        this.shiftNum -= 2;
        //  tip.style.transform =`translateY(-${this.shiftNum}rem)`
      }, 500);
    },
    getData() {
      // var api1 =
      var api = "http://www.jzbshebao.cn/app/common/getServiceCharge";
      axios.get(api).then(res => {
        // let data = res.data.data;

        this.shebaodata = res.data.data.reverse();
        // console.log(this.shebaodata)
      });
    },
    animate() {
      let n = 0;
      setInterval(() => {
        n++;
        if (n > 5) {
          n = 0;
        }
        this.vanboxAnimate = `transform: translateX(-140*${n}px)`;
      }, 1000);
      console.log(this.vanboxAnimate);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    weixin() {
      if (this.wxerweima == true) {
        this.$refs.wx.style.display = "block";
        this.wxerweima = false;
      } else {
        this.$refs.wx.style.display = "none";
        this.wxerweima = true;
      }
    }
  },
  mounted() {
    this.getData();
    this.animate();
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
    left: 0;
    z-index: 1000;
    background: #fff;
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
    // flex: 1;
    overflow: auto;
    width: 100%;
    position: absolute;
    top: 2.2rem;
    flex: 1;
    // bottom: 2.7rem;
    padding-bottom: 2.7rem;
    .el-row {
      margin-top: 0.8rem;
      .el-col {
        .grid-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          p {
            line-height: 2rem;
            font-size: 0.9rem;
          }
        }
      }
    }
    .shiftTips::before {
      content: "";
      border-top: 0.01rem solid #ccc;
    }
    .shiftTips {
      box-sizing: border-box;
      padding: 0 0.7rem;
      height: 2.25rem;
      padding: 0 0.7rem;
      display: flex;
      align-items: center;
      .laba {
        height: 100%;
        line-height: 2.25rem;
        img {
          width: 1.05rem;
          height: 0.95rem;
        }
      }
      .tips {
        box-sizing: border-box;
        padding-left: 0.7rem;
        margin: 0;
        height: 100%;
        // overflow: hidden;
        position: relative;
        width: calc(100% - 0.85rem);
        .tip {
          transition: all 0.5s;
          height: 100%;
          line-height: 2.25rem;
          position: absolute;
          a {
            font-size: 0.8rem;
            color: #444;
          }
        }
      }
    }
    .colee {
      height: 0.25rem;
      background: #eee;
      margin-top: 0.2rem;
    }
    .list_title {
      padding-left: 0.4rem;
      box-sizing: border-box;
      span:nth-child(1) {
        font-size: 1rem;
        color: #222;
        margin-right: 0.5rem;
      }
      span:nth-child(2) {
        font-size: 0.45rem;
        color: #909090;
      }
    }

    .serverList {
      position: relative;
      padding: 1rem 0.7rem 0.75rem 0.7rem;

      .list_title::before {
        position: absolute;
        // top: 0;
        left: 0.6rem;
        content: "";
        width: 0.2rem;
        height: 1.3rem;
        background: #e88346;
      }
      .meals-index {
        .meal-index {
          width: 100%;
          position: relative;
          margin-top: 0.75rem;
          overflow: auto;
          .meallist {
            display: flex;
            width: 43.1rem;
            .mealitem {
              width: 9rem;
              background: rgba(251, 142, 77, 0.1);
              padding: 0.75rem 0.7rem;
              margin-right: 0.7rem;
              text-align: center;
              border-radius: 0.5rem;
              .mealtitle {
                font-size: 0.7rem;
                font-weight: 500;
                color: #333;
                padding-bottom: 0.7rem;
              }
              .mealmonth {
                font-size: 0.55rem;
                color: #666;
                padding-bottom: 0.7rem;
              }
              .discount {
                font-size: 0.7rem;
                color: #ef8631;
                padding-bottom: 0.7rem;
              }
              .costprice {
                font-size: 0.55rem;
                color: #666;
                padding-bottom: 0.7rem;
              }
              .canbaoSubmit {
                img {
                  width: 4.25rem;
                  height: 1.3rem;
                }
              }
            }
          }
        }
        .rightbtn {
          position: absolute;
          width: 1.6rem;
          height: 1.6rem;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 10px 0 rgba(59, 60, 60, 0.2);
          opacity: 0.75;
          right: 0.7rem;
          top: 50%;
          text-align: center;
          line-height: 1.6rem;
          transform: translateY(-50%);
          i {
            color: #e88346;
            font-size: 1rem;
            font-weight: 700;
          }
        }
        .ps-index {
          color: #f20600;
          font-size: 0.7rem;
          padding-top: 0.75rem;
        }
      }
    }
    .cations {
      position: relative;

      padding: 0 0.7rem;
      padding-top: 1rem;
      .list_title::before {
        position: absolute;
        // top: 0;
        left: 0.6rem;
        content: "";
        width: 0.2rem;
        height: 1.3rem;
        background: #e88346;
      }
      .cationsBanner {
        padding: 1.25rem 0;
        width: 100%;
        height: 9rem;
        overflow: hidden;
        .van-swipe {
          width: 100%;
          position: relative;
          // overflow: hidden;

          .van-box {
            transition: all 0.5s;
            position: absolute;
            // height: 100%;
            //  transform: translateX(-140px);
            width: 700px;
            .van-swipe-item {
              height: 100%;
              width: 140px;
              float: left;
              img {
                width: 100%;
                padding-right: 0.5rem;
              }
            }
          }
        }
      }
    }
    .newscation {
      padding: 0 0.7rem;
      position: relative;
      padding-bottom: 1rem;
      .list_title::before {
        position: absolute;
        // top: 0;
        left: 0.6rem;
        content: "";
        width: 0.2rem;
        height: 1.3rem;
        background: #e88346;
      }
      .newslist {
        // padding: 0 1rem;
        .news_tabs {
          position: relative;
          .new1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 2.25rem;
            border-bottom: 1px solid #cdcdcd;
            span:nth-child(1) {
              color: #707070;
              font-size: 0.85rem;
              width: 94%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            span:nth-child(2) {
              img {
                width: 0.375rem;
              }
            }
          }
        }
      }
    }
    .footercon {
      background: #535353;
      padding: 1rem 1.5rem;
      text-align: center;
      .desfooter {
        font-size: 0.7rem;
        color: #fff;
        line-height: 1.1rem;
      }
      .footerimg {
        img {
          width: 4.9rem;
        }
      }
    }
    footer {
      z-index: 1000;
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
          .foot-font {
            font-size: 0.4rem;
          }
        }
      }
    }
    .weixinImg {
      display: none;
      position: absolute;
      top: 0;
      z-index: 3000;
      width: 100%;
      height: 100%;
      background: rgba(59, 60, 60, 0.4);
      img {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
}
</style>




