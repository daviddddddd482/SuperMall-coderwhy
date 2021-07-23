<template>
  <div id="app">
    <MainTabBar  />
  </div>
</template>

<script>
// import Home from '@/views/home/Home'  
import MainTabBar from "@/components/content/mainTabBar/MainTabBar.vue";
  export default {
    name: 'App',
    components: {
      // Home,
      MainTabBar
     }
  }
</script>
<style>
  @import 'assets/css/base.css';

</style>
