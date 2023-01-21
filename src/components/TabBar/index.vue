<template>
 <div class="tabbar">
  <van-tabbar v-model="active" placeholder safe-area-inset-bottom>
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">发墙</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
 </div>
</template>

<script>
export default {
  name:'TabBar',
  data () {
      return {
        active: 0,
      }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.tabbar{
  height: 50px;
}
 
</style>
