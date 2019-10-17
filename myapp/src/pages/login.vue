<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 13:59:49
 * @LastEditTime: 2019-10-10 15:31:52
 * @LastEditors: Please set LastEditors
 -->
<!--
 * @Description: In User Settings Ed
 * @Author: your name
 * @Date: 2019-10-08 16:06:11
 * @LastEditTime: 2019-10-09 14:31:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="head">
      <div class="head_bar" @click="toPrev">
        <img src="../assets/img/head_left.png" alt />
      </div>
    </div>
    <div class="form_box">
      <div class="logo_form">
        <div class="logo_box">
          <img src="../assets/img/logo.cf.png" alt />
        </div>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="middlesize"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox label="七天免登陆" name="type" v-model="ruleForm.mdl"></el-checkbox>
          <router-link
            to="/sheBao/my/reg"
            style="color:#f97a2e; text-align:center; display:inline-block;"
          >
            <div class="regbox">
              <p>点此注册?</p>
            </div>
          </router-link>
        </el-form-item>

        <el-form-item style="margin-top:3rem;">
          <el-button type="primary" @click="submitForm('ruleForm')" size="large" class="loginbtn">登录</el-button>
          <el-button type="danger" @click="resetForm('ruleForm')" class="resetbtn">重置</el-button>
        </el-form-item>
      </el-form>
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
        <div class="footer_item active" @click="tomy()">
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
    var checkUsername = async (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }]
      }
    };
  },
  computed:{
    cartLength(){
      return this.$store.getters.cartLength;
    }
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate(async valid => {
        if (valid) {
          //发起ajax请求，
          let { username, password, mdl } = this.ruleForm;
          let { data } = await this.$axios.get(
            "http://localhost:4200/user/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );
          console.log("data:", data);
          if (data.code === 1) {
            console.log(this.$router);
            this.$store.commit('login',{username,Authorization:data.data});
            this.$router.replace({
              path: '/sheBao/my',
              params: { username },
              query: { username }
            });
            
            // localStorage.setItem("Authorization", data.data);
          } else {
            alert("用户名或密码不正确");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toCart() {
      this.$router.push({ name: "cart", path: "/sheBao/cart" });
    },
    toList() {
      this.$router.push({ name: "list", path: "/sheBao/list" });
    },
    tomy() {
      this.$router.push({ name: "reg", path: "/my/reg" });
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
    toPrev() {
      this.$router.go(-1);
      // console.log(this.$route);
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
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  .head {
    height: 46px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    .head_bar {
      width: 100%;
      padding-left: 16px;
      height: 100%;
      line-height: 46px;
      img {
        width: 0.7rem;
        height: 1rem;
      }
    }
  }
  .form_box {
    width: 100%;
    flex: 1;
    height: calc(100% - 96px);
    background: url(../assets/img/loginbg.png);
    background-size: cover;
    position: absolute;
    top: 46px;
    left: 0;
    padding: 0.8rem;
    .logo_form {
      height: 8rem;
      width: 100%;
      text-align: center;
      .logo_box {
        display: inline-block;
        background: #fff;
        height: 8rem;
        width: 8rem;
        border-radius: 50%;
        line-height: 8rem;

        img {
          width: 3.2rem;
          height: 4.2rem;
        }
      }
    }

    .el-form {
      margin-top: 2rem;
      height: 200px;
      .el-form-item {
        margin-top: 1.2rem;
        .loginbtn {
          width: 4rem;
          height: 2rem;
        }
        .resetbtn {
          width: 4rem;
          height: 2rem;
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