<template>
  <div class="h-80 z-20">
    <img
      class="absolute filter blur-sm h-auto w-full z-0 -top-10"
      :src="manga.cover"
      alt=""
    />
    <img
      class="absolute -top-10 opacity-5 w-full h-11/12"
      src="http://bgfons.com/uploads/iron/iron_texture2387.jpg"
      alt=""
    />
  </div>
  <section class="relative bg-main flex flex-col mt-22" v-if="manga">
    <div class="absolute left-6 -top-32 text-gray-900">
      <img :src="manga.cover" class="h-96" alt="" />

      <!-- Manga Status -->
      <p
        v-if="manga.data.attributes.status == 'ongoing'"
        class="w-32 h-6 mt-3 bg-green-400 rounded-md text-center"
      >
        Status: {{ manga.data.attributes.status }}
      </p>
      <p v-else class="w-32 h-6 mt-3 bg-yellow-300 rounded-md text-center"></p>

      <!-- Typeof Reading -->
      <p class="w-32 h-6 mt-3 bg-green-400 rounded-md text-center">
        Type: {{ manga.data.type }}
      </p>
    </div>

    <div class="ml-80 text-gray-50 top-6">
      <p class="font-bold text-3xl mt-2">
        {{ manga.data.attributes.title.en }}
      </p>
      <p class="mt-2 border border-b-2 border-main-secondary w-20"></p>
      <p class="mt-5 w-2/3">{{ manga.data.attributes.description.en }}</p>

      <!-- GENRES -->
      <div class="flex mt-6">
        <p class="mr-4 text-center">Genres:</p>
        <div
          class="w-32 h-6 ml-2 bg-gray-50 rounded-md text-black-main text-center"
          :key="genre.id"
          v-for="genre in genres"
        >
          {{ genre.attributes.name.en }}
        </div>
      </div>

      <!-- THEMES -->
      <div class="flex mt-3">
        <p class="mr-4 text-center">Themes:</p>
        <div
          class="w-32 h-6 ml-2 bg-gray-50 rounded-md text-black-main text-center"
          :key="theme.id"
          v-for="theme in themes"
        >
          {{ theme.attributes.name.en }}
        </div>
      </div>
    </div>

    <div class="ml-6 mt-10">
      <p class="text-gray-50 mt-9">Chapters:</p>
      <ul>
        <li :key="chapter" v-for="chapter in chapters" class="text-gray-50">
          <div
            class="cursor-pointer bg-gray-900 mt-2 grid h-12 w-5/6"
            @click="read(chapter)"
          >
            <p class="ml-2 self-center">Capítulo: {{ chapter }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      manga: {},
      genres: [],
      themes: [],
      chapters: [],
    };
  },
  methods: {
    filterGenres(obj){
      return obj.attributes.group === 'genre';
    },
    filterThemes(obj){
      return obj.attributes.group === 'theme';
    },
    filterChapters(obj){
      return obj != obj.none;
    },
    read(chapter){
      this.$store.dispatch('chapters/getMangaChapter', { sort: `?manga=${this.manga.data.id}&chapter=${chapter}&limit=1` }).then(() => {
        this.$router.replace(`/read/${this.manga.data.attributes.title.en}/${chapter}`)
      })
    }
  },
  created() {
    this.manga = this.$store.state.manga.mangaToRead;
  },
  mounted(){
    this.$store.dispatch('manga/getMangaChapters', { sort: `/${this.manga.data.id}/aggregate` }).then(() => {
      let chapters = this.$store.state.manga.mangaChapters.volumes;

      for(let index in chapters){
        for(let index2 in chapters[index].chapters){
          if(chapters[index].chapters[index2].chapter != 'none') this.chapters.push(parseFloat(chapters[index].chapters[index2].chapter))
        }
      }

      this.chapters = [...new Set(this.chapters)];

      this.chapters = this.chapters.sort((a,b) => {
          if(a > b) return 1;
          if(a < b) return -1;
          return 0;
        });
    })

    this.genres = this.manga.data.attributes.tags.filter(this.filterGenres);
    this.themes = this.manga.data.attributes.tags.filter(this.filterThemes);
  }
};
</script>

<style></style>
