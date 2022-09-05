<template>
   <div >

  <header>
 
    <div class="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-gray-50 to-gray-200">
        <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid blue ">
           <a class="flex items-center h-full text-2xl  text-fuchsia-700" >Todo_List</a>
           <nav  class="h-full gird grid-cols-5 ">
            <ul class=" flex h-full p-0 m-0 list-none ml-16  ">
              <li class="h-full   ">
                <NuxtLink class="flex text-xl items-center h-full py-2.5 hover:text-amber-500 text-fuchsia-700 ml-16" to="/homePage">Home</NuxtLink>
              </li>
               <li class="h-full ml-16  ">
                <NuxtLink class="flex grid-flow-row text-xl items-center h-full py-2.5 ml-16  hover:text-amber-500  text-fuchsia-700" to="/addItems">Add Items</NuxtLink>
              </li>
               <li class="h-full ml-16  ">
                <NuxtLink class="flex text-xl items-center h-full py-2.5  ml-16  hover:text-amber-500 text-fuchsia-700" to="/totalItems">WebShows</NuxtLink>>
              </li>
               <div class="flex text-xl float-right items-center h-full ml-">
               
               </div>
               <li class=" float-none h-full text-xl pt-6 ml-96 pl-32  ">
                <NuxtLink class="   hover:text-amber-500 text-fuchsia-700" to="/signIn">Sign In /</NuxtLink>>
              </li>
               <li class="h-full text-xl pt-6">
                <NuxtLink class=" float-right   text-fuchsia-700  hover:text-amber-500" to="/">Sign Up</NuxtLink>
              </li>
            </ul>
           </nav>
        </div>
    </div>
   
  </header>
   </div>
    
</template>

<script setup>

</script>

<style>

</style>