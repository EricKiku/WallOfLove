<template>
  <div>
    <div class="self">
      <div v-if="!user" class="goLogin" @click="goLogin">
        登录 / 注册
      </div>
      <div v-if="user" class="userInfo">
        <div class="touxiang">
          <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="information">
          <p class="nick"><b>{{ user.userNick }}</b></p>
          <div class="msg">
            <span>获赞&nbsp;<b>55000</b></span>
            <span>粉丝&nbsp;<b>900</b></span>
          </div>
        </div>
        <div class="setting" @click="clickSetBtn">
          <van-icon name="setting-o" />
        </div>
      </div>
      <div v-if="user" class="selfinfo">
        <span v-if="!user.userSelfinfo">这是用户的个人介绍，点击编辑</span>
        <span v-if="user.userSelfinfo">{{ user.userSelfinfo }}</span>
      </div>
      <div v-if="user" class="selfpost">
        <HomePage></HomePage>
      </div>
    </div>

    <!-- 设置弹出层 -->
    <van-popup
      v-model="showSetting"
      position="bottom"
      :style="{ height: '40px' }"
    >
      <button class="logout" @click="goLogin">退&nbsp;出&nbsp;登&nbsp;录</button>
    </van-popup>
  </div>
</template>

<script>
import HomePage from "@/views/Home/HomePage";
import { tokenCheckout,getUserByUserAccount } from "@/api";
import { mapState } from "vuex";
export default {
  name: "SelfPage",
  data() {
    return {
      showSetting: false,
      // 当前用户信息
      user:null
    };
  },
  computed: {
    ...mapState(["token", "userAccount"]),
  },
  methods: {
    clickSetBtn() {
      this.showSetting = true;
    },
    goLogin(){
      localStorage.removeItem("userAccount")
      localStorage.removeItem("token")
      this.$router.replace({
        name:"login"
      })
    }
  },
  mounted() {
    // 获取当前用户信息
    // 先验证token，再把账号传过去，获取该账号的信息
    tokenCheckout(this.token).then(res=>{
      // 获取用户信息
      getUserByUserAccount(this.userAccount).then(res=>{
        this.user = res
      })
    },reason=>{
      this.$toast.fail("服务器错误")
    })
  },
  components: {
    HomePage,
  },
};
</script>

<style scoped>
.self{
  height: 145px;
  background-color: #fff;
}
.self .userInfo {
  padding: 20px 20px 20px 20px;
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  height: 70px;
  background-color: #fff;
}
.self .userInfo .touxiang {
  height: 62px;
  width: 20%;
  text-align: left;
}
.self .userInfo .van-image {
  width: 62px;
  height: 62px;
}
.self .userInfo .information {
  width: 70%;
  text-align: left;
  margin-left: 20px;
  height: 62px;
}
.self .userInfo .setting {
  width: 10%;
}
.self .userInfo .information .nick {
  font-size: 20px;
  line-height: 31px;
}
.self .userInfo .information .msg {
  line-height: 31px;
}
.self .userInfo .information .msg span {
  width: 50%;
  text-align: left;
  font-size: 14px;
  background-color: #fff;
  margin-right: 20px;
}
.self .selfinfo {
  font-size: 14px;
  color: #ccc;
  background-color: #fff;
  padding: 0px 20px 5px 20px;
}
.logout {
  font-size: 16px;
  margin: auto auto;
  width: 100%;
  height: 40px;
  background-color: red;
  color: #fff;
  border: 0px;
}

.goLogin{
  padding: 20px;
  font-size: 26px;
}
</style>
