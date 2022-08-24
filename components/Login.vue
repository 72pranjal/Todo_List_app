<template>


  <div class="text-center" >
    <img class="h-28  mx-auto mt-4   " src="@/assets/log.jpg" alt="">
      
    <div class=" w-96 h-64 mx-auto border-4 rounded-md bg-pink-600 ">
        <div class="p-4">
          <lable class=" text-amber-200" for="email">Email:</lable><br>
          <input class=" placeholder-slate-300 rounded-md  border-none pl-4" type="email" id="email" placeholder="enter your email">
        </div>
        <div class="p-1">
          <lable class=" text-amber-200" for="password">Password:</lable><br>
          <input class=" rounded-md placeholder-slate-300 pl-4" :type="ischecked2 ? 'text':'password'" id="password" placeholder="enter your password">
        </div>
        <div class="p-3">
        
          <input  type="checkbox" id="aa" v-model="ischecked2">
            <lable class=" text-amber-200" for="aa">Show Password</lable>
        </div>
           <div class="p-3">
            <button class=" bg-slate-50 h-8 border-none border-4 rounded w-24  hover:bg-blue-500 text-slate-900">Login</button>
           </div>
    </div>
  </div>
<div>
  <transition name="slide-fade">
    <div v-if="showdata" class=" bg-purple-900 h-52  mt-4">
  <footer>
    <div class="pt-4">
      <img class="h-14 mx-auto " src="@/assets/facebook.jpg" alt="">
    </div>
    <div class=" text-center text-gray-200 pt-4">
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
  </transition>
</div>
</template>

<script setup>
const ischecked2=ref(false)

const showdata=ref(false)

onMounted(()=>{
  setTimeout(() => {
     showdata.value=true
  },800);
})

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