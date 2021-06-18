<template>
  <section class="w-full relative">
    <div class="w-11/12 m-auto mb-5">
      <p class="font-bold text-gray-50 text-2xl">Most Viewed</p>
      <p class="w-10 border-b-2 border-main-secondary"></p>      
    </div>
    
    <div class="bg-gray-900 w-11/12 m-auto h-84  mb-6 ">
      <img src="../assets/frame1.png" class="w-full h-full" alt="">
    </div>

  </section>


  <!--Latest Updates-->  
  <div class="w-11/12 m-auto mb-5">
    <p class="font-bold text-gray-50 text-2xl">Latest Updates</p>
    <p class="w-10 border-b-2 border-main-secondary"></p>
  </div>
  <section class="flex flex-nowrap overflow-y-hidden overflow-scroll last-updated" v-if='mangas.length > 0'>
    <div
      class="w-56 h-80 bg-green-50 rounded-md shadow-md relative m-4 flex-shrink-0 "
      :key="index"
      v-for="(manga, index) in mangas"         
    >
      <router-link :to="`/info/${replaceTitle(manga.data.attributes.title.en) }`" @click="readManga(manga)">
        <img :src="manga.cover" class="w-full h-full rounded-md" alt="" />
        
        <span class="absolute top-0 right-0 w-12 h-8 rounded-md bg-main-secondary grid place-items-center font-semibold"> 55 </span>
        
        <div
          class="absolute bottom-0 w-full h-14 bg-main bg-opacity-60 rounded-md grid place-items-center"
        >
          <span
            class="text-center text-gray-50 break-all overflow-hidden p-1 font-sans font-medium "
          >
            {{
              manga.data.attributes.title.en.length > 30
                ? `${manga.data.attributes.title.en.substring(0, 30)}...`
                : manga.data.attributes.title.en
            }}
          </span>
          <span>

          </span>
        </div>
      </router-link>
    </div>
  </section>
  
  <section v-else class="h-80 w-full grid place-items-center">    
    <div class="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-50"></div>    
  </section>

  
</template>

<script>
export default {
  data() {
    return {
      mangas: [],
      cssInfo: "background-color: black; color: #41b883",      
      chapter: "",      
    };
  },
  methods: {
    readManga(manga) {      
      this.$store.dispatch('manga/readManga', manga);      
    },
    replaceTitle(title){      
      return title.replace(/(\s)/g, '-')
    }
  },
  mounted() {
    this.$store.dispatch('manga/getMangaList', { query: '?limit=10&offset=0' }).then(() => {      
      this.mangas = this.$store.state.manga.mangaList;
      console.log(this.mangas);
    })    
  },
};
</script>

<style>
.last-updated::-webkit-scrollbar{
  display: none;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>