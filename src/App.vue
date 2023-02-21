<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { tokenCheckout } from '@/api';
import { mapState } from 'vuex';
export default {

  name: "App",
  computed: {
    ...mapState(["token"])
  },
  mounted() {
    // 先查看token是否到期，如果到期就返回登录界面
    tokenCheckout(this.token).then(res => {
      if (res.static === 'timeout') {
        this.$router.push({ name: 'login' });
      }
    })
  },
  components: {},
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  /* position: absolute; */
  /* height: 100%; */
  width: 100%;
}

html,
body {
  height: 100%;
}

body {
  font-size: 24px !important;
}

/* 设置浏览器滚动条的样式 */
::-webkit-scrollbar {
  width: 0px;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
</style>
