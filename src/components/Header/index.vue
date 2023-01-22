<template>
  <div v-show="$route.meta.showHead" class="header">

        <div class="logo">Wall</div>
        <div class="type">
        <span
            @click="checkToAttention"
            :class="{ active: attention, typeItem: !attention }"
            >关注</span
        >
        <span
            @click="checkToRecommend"
            :class="{ active: recemmend, typeItem: !recemmend }"
            >推荐</span
        >
        </div>
        <div class="search">
            <van-icon @click="toSearchPage" name="search" />
        </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchMsg: "",
      // 关注与推荐
      attention: false,
      recemmend: true,
    };
  },
  methods: {
    // 关注与推荐切换之切换到关注
    checkToAttention() {
      this.attention = true;
      this.recemmend = false;
    },
    checkToRecommend() {
      this.attention = false;
      this.recemmend = true;
    },
    // 去搜索页，历史搜索记录页
    toSearchPage() {
      this.$router.push({
        name: "searchPage",
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  padding-top: 10px;
  line-height: 50px;
  position: fixed;
  z-index: 1;
  opacity: 1;
  background-color: rgb(255, 255, 255);
}

.logo {
  width: 20%;
  color: #2bb3ed;
  text-align: center;
}
.type {
  width: 60%;
  display: flex;
  justify-content: space-around;
}
.type span {
  width: 30%;
}
.type .typeItem {
  color: #ccc;
  font-size: 20px;
}
.type span:nth-child(1) {
  text-align: right;
}
.type span:nth-child(0) {
  text-align: left;
}
.search {
  width: 20%;
  text-align: right;
  margin-right: 10px;
}
.active {
  transition: all 0.1s ease-in-out;
  font-size: 24px;
  color: #000;
}
</style>
