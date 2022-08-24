<template>
  <div class=" bg-zinc-300 ">
    <div class="pt-20">
      <transition name="slide-fade">
        <p v-if="line1Show" class="text-4xl ml-24 p-4 cursor-pointer hover:scale-105 duration-1000 hover:text-indigo-700 text-amber-600 ">=>You Can Add</p>
      </transition>

      <transition name="slide-fade">
        <p v-if="line2Show" class="text-4xl ml-44 cursor-pointer hover:scale-105 duration-1000 hover:text-stone-50 text-slate-500">=>Your Items Hear</p>
      </transition>
      <transition name="slide-fade">
        <p v-if="line3Show" class="text-4xl ml-64 cursor-pointer hover:scale-105 duration-1000 hover:text-red-600 text-sky-600 p-4">
          =>This Is A Type Of Todo List
        </p>
      </transition>
      <transition name="slide-fade">
        <p v-if="line4Show" class="text-4xl hover:text-pink-800   hover:scale-105 duration-1000 cursor-pointer text-emerald-500 ml-96">
          =>Todo List Is Use For Store Data
        </p>
      </transition>
    </div>
     <div class="mt-12 bg-gray-600 h-auto w-6/12 text-center rounded-2xl border-8 mx-auto">
        <div class="p-6">
            <label class="text-2xl mr-56 text-neutral-300 " for="name">Your Item Name...</label><br>
            <input class="h-10 w-3/4 p-4 focus:bg-gray-100 border-none bg-orange-100 my-4 rounded-md"  type="text" id="name" placeholder="enter your items names">
        </div>
        <div class="text-2xl text-neutral-300"><p>Choose Category of Your Item</p></div>
        <div class="flex my-10  mx-auto">
             <div class=" bg-orange-100 h-28 ml-24  rounded-2xl p-12 items-center">
            <label class="text-x" for="b">Business</label>
            <input type="radio" id="b" name="category" value="Business">
        </div>
         <div class=" bg-orange-100 h-28 ml-16 rounded-2xl p-12">
            <label for="p">Personal</label>
            <input type="radio" id="p" name="category" value="Personal">
        </div>
        </div>
        <div class="mb-10 mt-16 rounded-xl cursor-pointer  hover:bg-blue-400  bg-orange-100 h-10 w-2/4 mx-auto items-center">
            <button class="text-center p-2">Add Items</button>
        </div>
  </div>
  </div>

 
</template>

<script setup>
const line1Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line1Show.value = true;
  }, 500);
});

const line2Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line2Show.value = true;
  }, 1500);
});

const line3Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line3Show.value = true;
  }, 2500);
});

const line4Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line4Show.value = true;
  }, 3500);
});
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>