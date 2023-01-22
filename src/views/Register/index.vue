<template>
  <div>
    <div class="logo">
      <img src="@/assets/logo.png" alt="WallOfLove" />
    </div>
    <div class="register">
      <div class="input">
        <p class="title">注册</p>
        <span v-show="accountError" class="errorInfo">{{ accErrInfo }}</span>
        <input
          type="text"
          :class="{ accError: accountError }"
          v-model="account"
          @blur="formCheckout('account')"
          placeholder="账号"
        />
        <input
          type="text"
          v-model="nick"
          placeholder="昵称"
        />
        <span v-show="passwordLengthErr" class="errorInfo">{{
          pwdErrInfo
        }}</span>
        <input
          type="password"
          v-model="password"
          @blur="formCheckout('password')"
          placeholder="密码"
        />
        <span v-show="passwordError" class="errorInfo">{{ pwdErrInfo }}</span>
        <input
          type="password"
          :class="{ pwdError: passwordError }"
          v-model="password_again"
          placeholder="确认密码"
          @blur="formCheckout('password_again')"
        />

        <button class="register" @click="register">注&nbsp;&nbsp;册</button>
        <p class="goregister">
          已有账号？<span @click="goRegister">立即登录</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// 引入注册api
import { register, findAccount } from "@/api";

export default {
  name: "Register",
  data() {
    return {
      agree: false,
      // 表单全部完整才为true
      accountError: false,
      accErrInfo: "",
      passwordError: false,
      passwordLengthErr: false,
      pwdErrInfo: "",
      // 表单数据
      account: "",
      password: "",
      password_again: "",
      nick:''
    };
  },
  methods: {
    // 立即登录
    goRegister() {
      this.$router.push({
        name: "login",
      });
    },
    // 发送注册请求方法
    register() {
      // 判断表单是否完整
      if (!this.accountError && !this.passwordError && !this.passwordLengthErr&&(this.account.length!=0&&this.password.length!=0&&this.password_again.length!=0)) {
        // 完成才能发送请求
        register(this.account, this.password,this.nick).then(
          (res) => {
            this.$toast.success({
              message: "注册成功",
            });
            // 跳转到昵称页
            this.$router.replace({
              name: "login",
              query: {
                account: this.account,
                password: this.password,
                nick:this.nick || this.account
              },
            });
          },
          (reason) => {
            this.$toast.success({
              message: "注册失败[服务器错误]",
            });
          }
        );
      }else{
        this.$toast.fail({
          message: "表单数据错误",
        });
      }
    },
    // 表单校验方法
    formCheckout(el) {
      if (el === "account" ) {
        if (this.account.length == 0) {
          this.accountError = false;
          this.accErrInfo = "";
        }
        // 发送请求，判断数据库是否存在账号，并且最大长度是12
        findAccount(this.account).then((res) => {
          if (res === "have") {
            // 判断是否存在
            this.accountError = true;
            this.accErrInfo = "账号已使用";
            return;
          } else if (res === "havent" && this.account.length <= 12) {
            this.accountError = false;
            this.accErrInfo = "";
          }
          // 判断长度 是否超出
          console.log(this.account.length);
          if (this.account.length < 8 || this.account.length > 12) {
            this.accountError = true;
            this.accErrInfo = "账号长度必须在8-12位";
          } else if (this.account.length >=8 && this.account.length <= 12) {
            this.accountError = false;
            this.accErrInfo = "";
          }
          
        });
      } else if (el === "password_again") {
        // 判断是否与密码相同
        if (this.password != this.password_again) {
          this.passwordError = true;
          this.pwdErrInfo = "两次输入密码不一致";
        } else if (this.password == this.password_again) {
          this.passwordError = false;
          this.pwdErrInfo = "";
        }
      } else if (el === "password") {
        // 密码不少于6位不多于20位
        if (this.password.length < 6 || this.password.length > 20) {
          this.passwordLengthErr = true;
          this.pwdErrInfo = "密码长度必须大于6位，小于20位";
        } else {
          this.passwordLengthErr = false;
          this.pwdErrInfo = "";
        }
      }
    },
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
.register {
  width: 100%;
  height: 70%;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%) translateY(-40%);
}
.input {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 75%;
  padding: 10px;
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
.input .register {
  top: 25px;
  background-color: #2bb3ed;
  border: 1px solid #2bb3ed;
  color: #fff;
  overflow: hidden;
}
.input .register:focus {
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

.register .goregister {
  font-size: 12px;
  text-align: right;
  margin-top: 25px;
  color: rgb(127, 127, 127);
  margin-bottom: 5px;
}
.register .goregister span {
  color: #2bb3ed;
  border-bottom: 1px solid #2bb3ed;
}
.errorInfo {
  display: block;
  font-size: 12px;
  text-align: left;
  margin-left: 5px;
  color: red;
}
.pwdError {
  border: 1px solid red;
}
.accError {
  border: 1px solid red;
}
</style>
