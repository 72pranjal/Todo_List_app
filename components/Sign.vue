<template>
<div>

 <transition name="bounce">

<div  v-if="showdataaa">
   <div>
    <img
      class="h-16 mx-auto mt-20 hover:bg-amber-200"
      src="@/assets/picture.jpg"
      alt=""
    />
  </div>
  <div
    class="text-center bg-indigo-300
      border-b
      bg-clip-border
      border-t
      h-auto
      <!-- w-96 -->
      mx-auto
         grid
         grid-flow-row
      rounded-md
     
    "
  >
    <div class="py-4">
      <form onsubmit="event.preventDefault()" autocomplete="off">
        <div class="py-2">
          <label for="name" class="text-x mr-60 ">FullName::</label><br>
          <input class="rounded-md focus:bg-red-200 text-sm  h-6 w-80 p-2 border-none" type="text" v-model="userName" placeholder="enter your name" id="name" />
        </div>
        <div class="py-2">
          <label for="email" class="text-x mr-64">Email::</label><br>
          <input
            
            type="text"
             v-model="userEmail"
            class="rounded-md focus:bg-red-200 h-6 w-80 p-2 text-sm "
            placeholder="enter your email"
            id="email"
          />
        </div>
        <div class="py-2">
          <label for="Pwd" class="text-x mr-60 ">Password::</label><br>
          <input :type="isChecked ? 'text':'password'" v-model="userPassword" class="rounded-md focus:bg-red-200 text-sm p-2  h-6 w-80 " placeholder="enter your password" id="pwd" />
        </div>

        <div class="py-2">
          <label for="cpwd" class="text-x mr-44">Conform Password::</label><br>
          <input :type="isChecked ? 'text': 'password'" @blur="check" v-model="userCnf"  class="rounded-md focus:bg-red-200 p-2 h-6 w-80 text-sm" placeholder="conform password" id="cpwd" />
        </div>
         <div v-if="notEqual" class="bg-red-400 w-5/6 text-center ml-7 animate-pulse p-1 mb-4 text-neutral-200">
             <p>Password and Conform Password does not matched </p>
        </div>
        <div class="ml-48">
          <input type="checkbox" id="show" class="" v-model="isChecked" />
          <label for="show" class="text-x px-2  h-6">Show Password</label>
        </div>
        <div class="py-2 flex">
          <div class="ml-8">
            <label for="male">Male</label>
          <input type="radio" value="male" name="gender" v-model="userGender" id="male" />
          </div>
          <div class="ml-6 text-x  focus:text-orange-400">
            <label for="female">Female</label>
          <input type="radio" value="female" name="gender" v-model="userGender" id="female" />
          </div>
          <div class="mx-6">
            <label for="unisex">Unisex</label>
          <input type="radio" value="unisex" name="gender" v-model="userGender" id="unisex" />
          </div>
        </div>
       
        <div class="py-2">
          <button class="bg-sky-600 h-10 w-28  hover:scale-110 duration-300 p-2 text-white hover:bg-red-400 rounded-md ">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
 </div>
 </transition>
</div>
</template>

<script setup lang="ts">
enum typeGender{
  MALE='Male',
  FEMALE='Female',
  UNISEX='Unisex'
}
interface userType{
  name:string,
  email:string,
  password:string,
  gender:typeGender
}
const userData=ref<userType[]>([])

const userName=ref<string>('')
const userEmail=ref<string>('')
const userPassword=ref<string>('')
const userCnf=ref<string>('')
const userGender=ref<typeGender>(null)
const notEqual=ref<boolean>(false)

const check=()=>{
  if(userPassword.value != userCnf.value)
  {
     notEqual.value=true
  }
  else{
    notEqual.value=false
  }
}
const isChecked=ref<boolean>(false)
const showdataaa=ref<boolean>(false)

onMounted(()=>{
  setTimeout(() => {
    showdataaa.value=true
  },200);
})
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>