<template>
  <div>
   

    <div class="flex mt-8">
        
        <div >
            <NuxtLink class="  text-blue-500 ml-14 text-xl " to="/signIn">GoTo SignIn Page</NuxtLink>
        </div>
        <div >
            <NuxtLink class="  text-blue-500 pl-96 ml-96 text-xl"  to="/signUp">GoTo SignUp Page</NuxtLink>
        </div>
    </div>
    <slot />
  </div>
</template>