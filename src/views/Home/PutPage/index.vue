<template>
  <div class="putpage">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <van-field
      v-model="message"
      rows="1"
      autosize
      type="textarea"
      placeholder="请输入您的话~"
    />
    <!-- 话题 -->
    <div class="topic" @click="showTopicFun">
      <div v-if="!topic">
        <p># &nbsp;添加话题</p>
      </div>
      <div v-if="topic">#&nbsp;{{ topic }}</div>
      <p style="color: #ccc">全部 &nbsp; ></p>
    </div>
    <button @click="putPost">发&nbsp;&nbsp;布</button>

    <!-- 话题弹出层 -->
    <van-popup
      v-model="showTopic"
      position="bottom"
      :style="{ height: '30%' }"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { putPost, tokenCheckout } from "@/api";
export default {
  name: "PutPage",
  data() {
    return {
      message: "",
      topic: undefined,
      showTopic: false,
    };
  },
  computed: {
    ...mapState(["token", "userAccount", "userNick"]),
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showTopicFun() {
      this.showTopic = true;
    },
    putPost() {
      // 发帖，如果帖子字数少于10个不让发
      if (this.message.length > 400) {
        this.$toast("字数不得多于400!");
        return;
      }
      if (this.message.length < 10) {
        this.$toast("至少写10个字吧!");
      } else {
        this.getDate();
        // 把写的内容和vuex中的token和userAccount一起发送到后端接口
        // 先判断token是否过期
        tokenCheckout(this.token).then(
          (res) => {
            if (res.static == "tokenSuccess") {
              putPost(this.userAccount, this.message, this.getDate()).then(
                (res) => {
                  if (res=='success') {
                    this.$toast.success("发布成功");
                    // 发布成功跳到首页
                    this.$router.replace({
                        name:'homepage'
                    })
                  }else{
                    this.$toast.fail("发布失败");
                  }
                }
              );
            }
          },
          (reason) => {}
        );
      }
    },
    // 获取当前时间
    getDate() {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      let datetime =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
      return datetime;
    },
  },
  components: {},
};
</script>

<style scoped>
.van-nav-bar {
  border-bottom: 0.5px solid rgb(203, 203, 203);
}
.van-field {
  width: 100%;
  padding-bottom: 40px;
  font-size: 16px;
}
.topic {
  font-size: 14px;
  margin-top: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.putpage button {
  width: 90%;
  height: 40px;
  font-size: 18px;
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2bb3ed;
  color: #fff;
  border: 0px;
  border-radius: 5px;
}
</style>
