<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 14:06:47
 * @LastEditTime: 2019-10-08 16:03:50
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="chat_box">
      <header class="chat_header">
        <div class="chat_head">
          <div class="chat_close" @click="goback"> 
            <i class="el-icon-d-arrow-left"></i>       
          </div>
          <div class="chat_title">
              <img src="../assets/img/aaa.png" alt="">
              <h2>桔子保社保管家</h2>
          </div>
          <div class="chat_tel">
            <i class="el-icon-phone-outline"></i>
          </div>
        </div>
      </header>
      <div class="chat_content">
          <div class="chat_container">

          </div>
      </div>
      <footer class="chat_footer">
          <div class="footer-top">
              <div class="biaoqing icon">
                 
              </div>
              <div class="camera icon">
                <input type="file" id="camera-input" accept="image/*" capture='camera'>
              </div>
              <div class="photo icon">
                <input type="file" id="photo-input" accept="image/*">
              </div>
          </div>
          <div class="footer-foot">
              <div class="chat_textbox">
               
                  <input type="textarea" id="chat_text" placeholder="请输入">
              </div>
              <div class="send">
                 发送
              </div>
          </div>
      </footer>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

export default {
    data(){
        return{}
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
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
 html,body
 {
  height: 100%;
  width: 100%;
}
#app {
    height: 100%;
  .chat_box {
      height: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
    .chat_header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
      height: 54px;
      background-color: rgb(247, 124, 53);
      .chat_head {
        padding: 0 15px;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 19px;
        color: #fff;
        .chat_title{
            
            img{
                width: 32px;
                height: 32px;
                vertical-align: middle;
            }
            h2{
                font-size: 19px;
                color: #fff;

                display: inline-block;
                vertical-align:middle;
            }
        }
       
      }
    } 
    .chat_content{
        flex: 1;
        // position: absolute;
        overflow: scroll;
            background: #f7f7f7;
            height: 400px;
            // top: 56px;
            margin-top: 54px;
        }
        .chat_footer{
            position: fixed;
            bottom:30px;
            height: 100px;           
            width: 100%;
            background: #fff;
            .footer-top{
                height: 42px;
                padding: 10px 0 0 16px;
                overflow:hidden;
                border-top: 1px solid #dedede;
                display: flex;
                .biaoqing{
                    background: url(../assets/img/face.svg);
                }
                .camera{
                    margin-left: 31px;
                    background: url(../assets/img/camera.svg);
                    #camera-input{
                       opacity: 0;
                       width: 100%;
                       height: 100%;
                    }
                }
                .photo{
                    margin-left: 31px;
                    background: url(../assets/img/img.svg);
                    #photo-input{
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                    }
                }
                .icon{
                    width:28px;
                    height: 28px;
                    background-size:100% 100%; 
                }
            }
            .footer-foot{
                padding: 7px 7px;
                display: flex;
                justify-content: center;
                align-items: center;
                .chat_textbox{
                    width: 270px;
                    height: 51px;
                    border: 1px solid #c9c9c9;
                    border-radius: 3px;
                    outline: none;
                    #chat_text{
                        width: 100%;
                        height: 49px;
                        border:none;
                    }   
                }
                .send{ 
                     width: 80px;
                    height: 51px;
                    text-align: center;
                    line-height: 51px;
                    border: 1px solid #c9c9c9;
                    cursor: pointer;
                    border-radius: 3px;
                    font-size: 16px;
                    margin-left: 10px;
                    color: #757575;
                    #sendbtn{
                      width: 78px;
                      height: 49px;
                    }
                }
            }
        }
  }
}
</style>