<template>
  <div class="h-screen w-full ml-1 bg-white">

    <div class="text-center my-20">
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
      <div class="flex  pl-28 pt-10 items-center cursor-pointer hover:scale-75 duration-1000 ">
        <transition name="slide-fade" :duration="{ enter: 500, leave: 500 }">
          <div v-if="show" >
          <img src="@/assets/fifh.jpg" alt="" />
           <p>You  can build your todolist</p>
        </div>
        </transition>
        <div class="w-96">
          <img src="@/assets/second.jpeg" alt="" />
        </div>
      </div>
     
      <div class="flex pl-28  pt-10 items-center cursor-pointer hover:scale-75 duration-1000">
        <div class=" ">
          <img src="@/assets/eaight.jpg" alt="" />
         
        </div>
        <div class="w-96">
           <img src="@/assets/fifh.jpg" alt="" />

        </div>
      </div>

      <div class="flex pl-28  pt-10  items-center cursor-pointer hover:scale-75 duration-1000 ">
        <div class=" ">
          <img src="@/assets/seven.jpg" alt="" />
        </div>
        <div class="w-96">
          <img src="@/assets/six.jpg" alt="" />

        </div>
      </div>
       <div class="flex pl-28 pt-10 items-center cursor-pointer hover:scale-75 duration-1000">
        <div class="   ">
          <img src="@/assets/third.jpeg" alt="" />
        </div>
        <div class="w-96 ">
          <img src="@/assets/first.jpg" alt="" />

        </div>
      </div>

      <div class="flex">
        <div
        class="h-full px-10 mt-12  text-gray-600 border-none text-xl bg-pink-300 hover:bg-orange-300"
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
          text-xl
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
        class="h-full px-10 text-gray-700 mt-12 border-none text-xl bg-pink-400 hover:bg-slate-100"
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
    <div  class=" bg-purple-200 h-52  mt-">
  <footer>
    <div class="pt-4">
      <img class="h-14 mx-auto " src="@/assets/facebook.jpg" alt="">
    </div>
    <div class=" text-center text-gray-600 pt-4">
      <P>Info Support Marketing  </P>
      <p>
        Terms of Uses Privacy Policy
      </p>
      <p>
        2022 memory@
      </p>
    </div>
  </footer>
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>