<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 19:15:25
 * @LastEditTime: 2019-10-08 19:19:23
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="#app">
    <div class="index">
      <header class="bar bar-nav">
        <h1 class="title">桔子保</h1>
        <div class="title-icon">
          <span>
            <img src="../assets/img/icon_1.png" alt />
          </span>
          <span>
            <img src="../assets/img/icon_2.png" alt />
          </span>
        </div>
      </header>
      <div class="content">
        <div class="block" style="margin-top:0.25rem; padding:0 0.8rem;">
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in bannerUrl" :key="item">
              <img :src="item" alt style="width:100%;height:100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="news">
          <div>
            <img src="../assets/img/new1.png" alt />
          </div>
          <div class="upbanner">
            <div class="swipernews">
              <div class="newsbox" ref="newsbox" :style="{transform:transform}">
                <div class="swiper_item" v-for="item in orderList" :key="item">{{item}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="service">
          <div class="pd16">
            <h2>服务内容</h2>
            <div class="service-list">
              <div class="service-item" v-for="item in service" :key="item.title">
                <img :src="item.service_img" alt />
                <span>{{item.title}}</span>
              </div>
            </div>
            <div class="indexImg">
              <img src="../assets/img/shebao1.png" alt />
              <img src="../assets/img/gjj1.png" alt />
            </div>
          </div>
          <div class="consultaionImg">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div>
                    <img src="../assets/img/serviceImg.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="interpertation">
          <div class="pd16">
            <h2>政策解读</h2>
            <div class="interpertation-list">
              <div
                class="interpertation-item"
                v-for="item in interpertaion"
                :key="item.spanContent"
              >
                <img :src="item.img_url" alt />
                <span>{{item.spanContent}}</span>
              </div>
            </div>
          </div>
          <div class="consultationImg pd16">
            <div class="van-swipe">
              <img src="../assets/img/interpertation.png" alt />
            </div>
          </div>
        </div>
        <div class="guarantee">
          <div class="guarantee_box">
            <h2>服务保障</h2>
            <div class="index-line"></div>
            <div class="guarantee_list">
              <div class="guarantee_item" v-for="item in guarantee" :key="item.p1">
                <p>
                  <img :src="item.img_url" alt />
                </p>
                <p>{{item.p1}}</p>
                <p>{{item.p2}}</p>
              </div>
            </div>
            <div class="index-line"></div>
          </div>
          <div class="guarantee_footer">
            <p>缴社保就选桔子保</p>
            <p>工作随意换 社保不要断</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  .index {
    width: 100%;
    .bar {
      position: fixed;
      height: 2.2rem;
      background-color: #f7f7f8;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      // border: 1px solid #ccc;
      // padding:0 0.5rem;
      .title {
        position: fixed;
        font-size: 0.9rem;
        color: #333;
        width: 100%;
        background: #fff;
        text-align: center;
        line-height: 2.2rem;
        font-weight: normal;
      }
      .title-icon {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        span {
          margin-right: 0.625rem;
          width: 1.15rem;
          height: 1.05rem;
          img {
            width: 1.15rem;
            height: 1.05rem;
          }
        }
      }
    }
    .bar::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      right: auto;
      top: auto;
      height: 1px;
      width: 100%;
      background-color: #e7e7e7;
      display: block;
      z-index: 15;

      transform-origin: 50% 100%;
    }
    .content {
      position: absolute;
      top: 2.2rem;
      background: #fff;
      overflow: auto;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom: 50px;
      .news {
        margin-top: 0.5rem;
        display: flex;
        height: 1.45rem;
        background: url(../assets/img/bgmsg.png);
        line-height: 1.45rem;
        overflow: hidden;
        align-items: center;
        padding: 0 0.7rem;
        div:nth-child(1) {
          // vertical-align: middle;
          img {
            width: 0.8rem;
            height: 0.8rem;
          }
        }
        .upbanner {
          // vertical-align: middle;
          font-size: 0.6rem;
          color: #666;
          .swipernews {
            height: 30px;
            width: 87vw;
            overflow: hidden;
            white-space: nowrap;
            padding-left: 2vw;
            .newsbox {
              .swiper_item {
                height: 100%;
                line-height: 30px;
              }
            }
          }
        }
      }
      .service {
        .pd16 {
          padding: 0 0.8rem;
          h2 {
            font-size: 0.85rem;
            color: #333;
            padding: 0.75rem 0;
            font-weight: 400;
          }
          .service-list {
            display: flex;
            justify-content: space-between;
            .service-item {
              display: flex;
              flex-direction: column;
              font-size: 0.6rem;
              color: #999;
              align-items: center;
              img {
                height: 2.25rem;
                width: 2.25rem;
              }
              span {
                padding: 0.25rem 0;
              }
            }
          }
          .indexImg {
            display: flex;
            justify-content: space-between;
            padding-top: 0.25rem;
            img {
              width: 10rem;
              height: 2.5rem;
            }
          }
        }
        .consultaionImg {
          width: 100%;
          height: 6rem;
          padding-top: 0.8rem;
          .swiper-container {
            height: 100%;
            margin: 0 auto;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
            .swiper-wrapper {
              width: 100%;
              height: 100%;
              position: relative;
              box-sizing: content-box;
              display: flex;
              z-index: 1;
              .swiper-slide {
                width: 100%;
                height: 100%;

                div {
                  width: 100%;
                  height: 100%;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
        }
      }
      .interpertation {
        padding-bottom: 0.5rem;
        .pd16 {
          padding: 0 0.8rem;
          h2 {
            font-size: 0.85rem;
            color: #333;
            padding: 0.75rem 0;
            font-weight: 400;
          }
          .interpertation-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .interpertation-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: 0.8rem;
              color: #999;
              width: 25%;
              border-bottom: 1px solid #e6e6e6;
              img {
                margin-top: 0.5rem;
                width: 1.3rem;
                height: 1.5rem;
              }
              span {
                padding: 0.25rem 0;
              }
            }
          }
        }
        .consultationImg {
          width: 100%;
          height: 6rem;
          padding-top: 0.85rem;
          .van-swipe {
            height: 100%;
            width: 100%;
            img {
              height: 100%;
              width: 100%;
            }
          }
        }
      }
      .guarantee {
        .guarantee_box {
          h2 {
            font-weight: 400;
            font-size: 0.85rem;
            color: #333;
            padding: 0.75rem 0.8rem;
          }
          .index-line {
            height: 1px;
            background: #e6e6e6;
          }
          .guarantee_list {
            padding: 0 0.8rem;
            padding-top: 0.2rem;
            display: flex;
            flex-wrap: wrap;
            .guarantee_item:nth-child(1) {
              border-bottom: 1px solid #e6e6e6;
            }
            .guarantee_item:nth-child(1)::after {
              position: absolute;
              content: "";
              height: 2.6rem;
              right: 0;
              top: 50%;
              width: 1px;
              background: #e6e6e6;
              transform: translateY(-50%);
            }
            .guarantee_item:nth-child(3)::after {
              position: absolute;
              content: "";
              height: 2.6rem;
              right: 0;
              top: 50%;
              width: 1px;
              background: #e6e6e6;
              transform: translateY(-50%);
            }
            .guarantee_item:nth-child(2) {
              border-bottom: 1px solid #e6e6e6;
            }
            .guarantee_item {
              position: relative;
              width: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              overflow: hidden;
              text-align: center;
              padding: 0.2rem 1.5rem 0.4rem;
              p:nth-child(1) {
                img {
                  width: 1.8rem;
                  height: 1.8rem;
                }
              }
              p:nth-child(2) {
                font-size: 1rem;
                color: #333;
                padding: 0.4rem 0;
              }
              p:nth-child(3) {
                font-size: 0.7rem;
                color: #999;
              }
            }
          }
        }
        .guarantee_footer {
          height: 4.5rem;
          text-align: center;
          color: #666;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p:nth-child(1) {
            font-size: 1rem;
          }
          p:nth-child(2) {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
}
</style>