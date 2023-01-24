<template>
 <div v-show="$route.meta.showTabBar" class="tabbar">
  <van-tabbar v-model="active" placeholder safe-area-inset-bottom>
    <van-tabbar-item icon="home-o" @click="goHomePage">首页</van-tabbar-item>
    <van-tabbar-item icon="edit" @click="goPutPage">发墙</van-tabbar-item>
    <van-tabbar-item icon="user-o" @click="goSelfPage">我的</van-tabbar-item>
  </van-tabbar>
 </div>
</template>

<script>
export default {
  name:'TabBar',
  data () {
      return {
        
      }
  },
  computed:{
    active:{
      get(){
        return this.$route.meta.tabBarActive;
      },
      set(){
        return this.$route.meta.tabBarActive;
      }
    }
  },
  methods: {
    goHomePage(){
      this.$router.push({
        name:'homepage'
      })
    },
    goPutPage(){
      this.$router.push({
        name:'putpage'
      })
    },
    goSelfPage(){
      this.$router.push({
        name:'selfpage'
      })
    }
  },
  components: {

  }
}
</script>

<style scoped>
.tabbar{
  height: 50px;
}
.van-tabbar__placeholder{
  height: 0px !important;
}
</style>
