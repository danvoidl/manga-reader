<template>
  <div class="grid grid-cols-3 w-full h-screen bg-blue-100 mt-1 " >
    <section id="container_manga" class=" col-span-2 h-full  overflow-scroll overflow-x-hidden">
      <img class="w-full " :key='image' v-for="image in chapterImages" :src="image" alt="">
    </section>

    <section class="h-auto p-2 bg-main text-gray-50 border-t-2 ">
      <div class="text-center font-semibold mt-3 flex flex-col items-center border-radius-2 " v-if="mangaInfo.data">
        {{ mangaInfo.data.attributes.title.en}}
        <p class="border-b-2 border-main-secondary w-14 text-center mt-2 "></p>    
      </div>
      <div class="mt-4 text-sm"> 
        Reading Mode:
        <span>
        <button class="ring ring-main-secondary ring-opacity-80 ml-2 w-auto p-2 text-gray-50 rounded">Roll</button>
        <button class="ring ring-main-secondary ring-opacity-80 ml-2 w-auto p-2 text-gray-50 rounded">Pass pages</button>                
      </span>
      </div>
      


    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chapterImages: [],
      mangaInfo: {},
    }
  },
  mounted() {
    console.log('STORE',this.$store.state);
    this.chapterImages = this.$store.state.chapters.chapterImages;
    this.mangaInfo = this.$store.state.manga.mangaToRead;
    console.log('INFO', this.mangaInfo );
  }
}
</script>

<style>

#container_manga::-webkit-scrollbar{
  width: 11px;
  padding: 1px;
}

#container_manga::-webkit-scrollbar-track {  
  background: rgba(148, 148, 148, 0.8);
  border-radius: 10px;
}

/* Handle */
#container_manga::-webkit-scrollbar-thumb {
  background: rgb(56, 56, 56);
  border-radius: 10px;
}
</style>