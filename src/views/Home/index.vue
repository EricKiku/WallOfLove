<template>
 <div class="home">
    <Header></Header>
    <router-view></router-view>
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
  }
}
</script>

<style scoped>

 
</style>
