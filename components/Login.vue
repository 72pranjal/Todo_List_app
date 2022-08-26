<template>


  <div class="text-center mb-16" >
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
        
          <input  type="checkbox" id="aa">
            <lable class=" text-amber-200" for="aa">Show Password</lable>
        </div>
           <div class="p-3">
            <button class=" bg-slate-50 h-8 border-none border-4 rounded w-24  hover:bg-blue-500 text-slate-900">Login</button>
           </div>
    </div>
  </div>
</template>

<script setup>


</script>
