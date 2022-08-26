<template>
   <div >

  <header>
 
    <div class="fixed top-0 left-0 w-full h-12 bg-gray-100">
        <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid blue ">
           <a class="flex items-center h-full text-xl  text-fuchsia-700" >Todo_List</a>
           <nav  class="h-full gird grid-cols-5 ">
            <ul class=" flex h-full p-0 m-0 list-none ml-10  ">
              <li class="h-full  ">
                <a class="flex text-sm items-center h-full py-2.5 hover:text-amber-500 text-fuchsia-700 ml-10" href="/">Home</a>
              </li>
               <li class="h-full  ">
                <a class="flex grid-flow-row text-sm items-center h-full py-2.5 ml-16  hover:text-amber-500  text-fuchsia-700" href="/addItems">Add Items</a>
              </li>
               <li class="h-full  ">
                <a class="flex text-sm items-center h-full py-2.5  ml-16  hover:text-amber-500 text-fuchsia-700" href="/totalItems">Total Added Items</a>
              </li>
               <div class="flex text-sm items-center h-full ml-96">
                <li class=" ">
                <a  class="   hover:text-amber-500 text-fuchsia-700" href="/signIn">Sign In /</a>
              </li>
               <li class=" ">
                <a class="  text-fuchsia-700  hover:text-amber-500" href="/signUp">Sign Up</a>
              </li>
               </div>
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