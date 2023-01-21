<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app{
  /* position: absolute; */
  height: 100%;
  width: 100%;
}
html,body{
  height: 100%;
}
</style>
