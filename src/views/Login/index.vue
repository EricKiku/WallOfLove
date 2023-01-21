<template>
  <div>
    <div class="logo">
      <img src="@/assets/logo.png" alt="WallOfLove" />
    </div>
    <div class="login">
      <div class="input">
        <p class="title">登录</p>
        <input type="text" v-model="userAccount" placeholder="请输入手机号/用户名" />
        <input type="password" v-model="userPassword" show-password placeholder="请输入密码" />
        <button class="login" @click="login">登&nbsp;&nbsp;录</button>
        <p class="forget">忘记密码?</p>
        <p class="noAccess">
          还没有账号?<span @click="goRegister">立即注册</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

// 登录api
import { login } from "@/api";
export default {
  name: "Login",
  data() {
    return {
      value: "",
      userAccount:'',
      userPassword:''
    };
  },
  methods: {
    // 去注册
    goRegister() {
      this.$router.push({
        name: "register",
      });
    },
    // 登录
    login() {
      login(this.userAccount,this.userPassword)
      .then(res=>{
        if (res=='token') {
          this.$toast.success({
            message:'登录成功'
          });
          this.$router.replace({
            name:'homepage'
          })
        }else if(res=='AccountError'){
          this.$toast.fail({
            message:'账号错误'
          });
        }else if(res=='PasswordError'){
          this.$toast.fail({
            message:'密码错误'
          });
        }
      })
    },
  },
  mounted() {
    let account = this.$route.query.account;
    let password = this.$route.query.password;
    this.userAccount = account||'';
    this.userPassword = password||'';
  },
  components: {},
};
</script>

<style scoped>
.logo {
  background-color: #adddf2;
  background: linear-gradient(
    180deg,
    rgba(118, 213, 255, 0.9836309523809523) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
img {
  height: 150px;
  width: 60%;
  display: block;
  margin: 0 auto;
  height: 100px;
}
.login {
  width: 100%;
  height: 70%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-40%);
}
.input {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 75%;
  /* padding: 10px; */
}
.input .title {
  text-align: left;
  font-size: 37.5px;
  margin-left: 10px;
  margin-bottom: 15px;
}
.input button {
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.input .login {
  top: 40px;
  background-color: #2bb3ed;
  border: 1px solid #2bb3ed;
  color: #fff;
  overflow: hidden;
}
.input .login:focus {
  background: #06aaf0;
  border: 1px solid #2bb3ed;
}
input {
  width: 90%;
  margin-bottom: 15px;
  height: 50px;
  font-size: 16px;
  padding-left: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.16s ease-in-out;
}
input:focus {
  border: 2px solid #1890ff;
  color: rgba(0, 0, 0, 0.85);
}
input:focus-visible {
  outline-offset: 0px;
  outline: 0;
}

.input .forget {
  font-size: 12px;
  text-align: left;
  position: relative;
  top: 40px;
  color: rgb(127, 127, 127);
}
.login .noAccess {
  font-size: 12px;
  text-align: right;
  position: relative;
  top: 50px;
  color: rgb(127, 127, 127);
  margin-bottom: 5px;
}
.login .noAccess span {
  color: #2bb3ed;
  border-bottom: 1px solid #2bb3ed;
}
</style>
