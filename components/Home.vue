<template>
  <div class="h-full w-full bg-gradient-to-r from-pink-50 to-pink-300">

    <div class="text-center pt-32">
      <transition name="slide-fade" :duration="{ enter: 500, leave: 500 }">
        <p class="text-5xl p-2 text-yellow-500" v-if="show">
          ---Welcome My Todo_List App---
        </p>
      </transition>
      <div>
        <div class="p-4 text-center animate-pulse hover:text-zinc-500 hover:scale-105 duration-1000  text-indigo-500">
          <NuxtLink class="text-4xl" to="/addItems">ADD<br />ITEMS</NuxtLink>
        </div>

        <div class="text-center pb-4">
          <p class="text-3xl  hover:text-clip animate-pulse">THIS IS MY TODO LIST</p>
        </div>
      </div>
      <div class="flex  my-16 mx-96  md:my-20 lg:my-24">
          <div class="pr-7 md:pr-9  duration-500 hover:scale-110 " >
          <img class="h-5/6 md:h-5/6 " src="@/assets/fifh.jpg" alt="" />
           <p class="text-2xl md:text-3xl lg:text-3xl">You  can build your todolist</p>
        </div>
        <div class="duration-500 hover:scale-110 ">
          <img  class=" h-5/6  w-full" src="@/assets/second.jpeg" alt="" />
        </div>
      </div>
     
      <div class="flex   mx-96 ">
        <div class="pr-7 md:pr-9  duration-500 hover:scale-110 ">
          <img class="h-5/6 md:h-5/6" src="@/assets/eaight.jpg" alt="" />
         
        </div>
        <div class="duration-500 hover:scale-110">
           <img class=" h-5/6 w-full" src="@/assets/fifh.jpg" alt="" />

        </div>
      </div>

      <div class="flex  my-16 mx-96  md:my-20 lg:my-24">
        <div class="pr-7 md:pr-9  duration-500 hover:scale-110 ">
          <img class="h-5/6 md:h-5/6" src="@/assets/seven.jpg" alt="" />
        </div>
        <div class="duration-500 hover:scale-110">
          <img class=" h-5/6 w-full" src="@/assets/six.jpg" alt="" />

        </div>
      </div>
       <div class="flex  my-16 mx-96  md:my-20 lg:my-24">
        <div class="pr-7 duration-500 hover:scale-110 md:pr-9  ">
          <img class="h-5/6 md:h-5/6" src="@/assets/third.jpeg" alt="" />
        </div>
        <div class="duration-500 hover:scale-110">
          <img class=" h-5/6 w-full" src="@/assets/first.jpg" alt="" />

        </div>
      </div>

      <div class="flex h-96 pb-11">
        <div
        class="h p-10  px-10 mt-12  text-gray-600 border-none text-2xl bg-pink-300 hover:bg-orange-300"
      >
        <p class="p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque eum
          culpa maiores iusto ipsam voluptate repudiandae error sed sequi ab
          neque voluptatum, a, asperiores modi ipsum impedit, quia optio?
          Consectetur.
        </p>
      </div>
      <div
        class="
          h-full
          px-10
          text-orange-600
          mt-12
          border-none
          text-2xl
          p-10
          bg-pink-100
          hover:bg-blue-300
        "
      >
        <p class="p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque eum
          culpa maiores iusto ipsam voluptate repudiandae error sed sequi ab
          neque voluptatum, a, asperiores modi ipsum impedit, quia optio?
          Consectetur.
        </p>
      </div>
      <div
        class="h-full px-10 text-gray-700 mt-12 border-none text-2xl bg-pink-400 hover:bg-slate-100"
      >
        <p class="p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque eum
          culpa maiores iusto ipsam voluptate repudiandae error sed sequi ab
          neque voluptatum, a, asperiores modi ipsum impedit, quia optio?
          Consectetur.
        </p>
      </div>
      </div>
    </div>
  </div>

</template>
<script setup>

const show = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 1000);
  // show.value=true
});
</script>

<style>
/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
</style>