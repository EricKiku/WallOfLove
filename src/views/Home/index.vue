<template>
 <div class="home">
    <Header></Header>
    <keep-alive include="HomePage,SelfPage">
      <router-view></router-view>
    </keep-alive>
    <TabBar></TabBar>
    
   
 </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name:'Home',
  data () {
      return {

      }
  },
  methods: {
  },
  components: {
    [Header.name]:Header,
    [TabBar.name]:TabBar
  },
  mounted() {
  },
}
</script>

<style scoped>
.home{
  background-color: #e5e7eb;
  height: 100vh;
}

</style>
