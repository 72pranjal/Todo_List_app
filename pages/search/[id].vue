<template>
<div class="bg-orange-200">
    <div>
    <NuxtLink to="/totalItems">
      <div class="text-center pt-28">
        <button class="mt-20 bg-green-400 h-14 w-28 p-2 rounded-md hover:bg-blue-600 hover:text-white duration-300 hover:scale-110 ">Back</button>
      </div>
    </NuxtLink>
    <h3 class="mt-9  text-center  text-3xl text-orange-500">List Of Episodes</h3>
   
    <div class="grid grid-flow-row grid-cols-4 mt-8 w-full">
      <div class="flex  flex-col items-center p-4 " v-for="episode in episodes" :key="episode.id">
        <div class="h-auto border-8 border-amber-200 w-64 p-6 hover:scale-110  duration-500  bg-gray-50 text-blue-500">
          <div>
          {{ episode.name }}
        </div>
        Season: {{ episode.season }} Episode: {{ episode.number }}
        <img class=" cursor-pointer " :src="episode.image?.medium" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>

const route = useRoute();
const episodes = ref([]);
onMounted(async () => {
  const fetchData = await fetch(
    `https://api.tvmaze.com/shows/${route.params.id}?embed=episodes`
    // `https://api.unsplash.com/search/photes/${route.params.id}?query=minimal`
  );
  const json = await fetchData.json();
  episodes.value = json._embedded.episodes;
});
console.log("route", route.params.id);
</script>