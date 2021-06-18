<template>
  <div class="bg-main min-h-screen">       
    <navbar :screenWidth="windowWidth"></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {      
      windowWidth: window.innerWidth,      
    };
  },
  mounted() {        
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };      
  },
};
</script>

<style>
</style>