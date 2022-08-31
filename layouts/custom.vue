<template>
  <div>
   

    <div class="flex p-5 border-b-8 bg-gradient-to-r from-cyan-400 to-blue-500  ">
        
        <div >
            <NuxtLink class="  text-white hover:text-orange-300 ml-24 text-3xl " to="/signIn">GoTo SignIn Page</NuxtLink>
        </div>
        <div >
            <NuxtLink class="  text-white  hover:text-orange-300 ml-96 pl-80  text-3xl"  to="/">GoTo SignUp Page</NuxtLink>
        </div>
    </div>
    <slot />
  </div>
</template>