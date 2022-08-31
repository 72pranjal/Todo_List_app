<template>
   <div class=" bg-gradient-to-r from-amber-100 to-amber-400 h-full">
    <div class="pt-28   text-center">
      <p class="text-4xl text-cyan-600">You can search hear WebShows</p>
    </div>
     <div>
    <form @submit.prevent="submit" class="flex justify-center">
      <input type="text" class="mt-10 h-14 p-3   w-96 rounded-xl focus:bg-amber-100 items-center" v-model="search" />
      <button class="bg-slate-400 hover:scale-105 duration-500 hover:bg-blue-600 hover:text-white text-x rounded-md ml-2 h-14 w-28  mt-10 p-1">Search</button>
    </form>

    <div class="grid grid-flow-row grid-cols-4 lg:grid-cols-3  w-auto mt-10">
      <div class="flex  flex-col items-center p-4  " v-for="show in shows" :key="show.id">
        <div class="h-auto p-6 pl-12 pt-4  border-8 hover:scale-110 duration-300 border-slate-400  w-72 bg-white">
          <nuxt-link class="text-blue-600" :to="'/search/' + show.show.id">
          {{ show.show.name }}
          <img class="h-44 w-44  bg-slate-50" :src="show.show.image?.medium" alt="" />
        </nuxt-link>
        </div>
      </div>
    </div>
  </div>
   </div>
</template>


<script setup>

const shows=ref([])
const search=ref("")
const URL="https://api.tvmaze.com/search/shows?q="
// const URL="https://api.unsplash.com/search/photes?query=minimal"

async function searchShows(search){
    const grabData = await fetch(URL + search.value);
  const json = await grabData.json();
  shows.value = json;
}

async function submit() {
  if (!search.value) return;
  searchShows(search);
}
 </script>