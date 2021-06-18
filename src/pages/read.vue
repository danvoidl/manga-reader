<template>
  <div >
    <div>ZA WARUDO</div>
    <img :key='image' v-for="image in chapterImages" :src="image" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return {
      chapterImages: []
    }
  },
  mounted() {
    console.log(this.$store.state);
    this.chapterImages = this.$store.state.chapters.chapterImages;
  }
}
</script>

<style>

</style>