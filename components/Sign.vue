<template>
 <div class="bg-[url('/assets/seen16.jpg')] h-screen">
  <div class="ml-10">
    <p class="text-4xl text-white">If you are already logged in</p>
  </div>
<div class="mb-6">

 <transition name="bounce">

<div  v-if="showdataaa">
   <div>
    <img
      class="h-20 mx-auto mt-14 hover:bg-amber-200"
      src="@/assets/picture.jpg"
      alt=""
    />
  </div>
  <div
    class="text-center bg-indigo-300
      border
      bg-clip-border
      border-t
      h-auto
    
      w-2/6
      mx-auto
         grid
         grid-flow-row
      rounded-md
     
    "
  >
    <div class="py-10 ">
      <form onsubmit="event.preventDefault()" autocomplete="off">
        <teleport to="body">
        <div v-if="emptyField"  class="modal">
          <p class="mt-8">All fields are mendatry</p>
          <button
            class="bg-red-400 mt-5 text-white duration-500  text-xs h-8 w-16 hover:scale-110 p-1 rounded-md"
            @click="emptyField = false"
          >
            Close
          </button>
        </div>
      </teleport>
        <div class="py-4">
          <label for="name" class="text-2xl float-left ml-16 ">FullName::</label><br>
          <input class="rounded-md focus:bg-red-200 text-xl  h-10 w-4/5 p-4 border-none" type="text" v-model="userName" placeholder="enter your name" id="name" />
        </div>
        <div class="py-2">
          <label for="email" class="text-2xl float-left ml-16">Email::</label><br>
          <input
            
            type="text"
             v-model="userEmail"
            class="rounded-md focus:bg-red-200 h-10 w-4/5 p-4 text-xl "
            placeholder="enter your email"
            id="email"
          />
        </div>
        <div class="py-2">
          <label for="Pwd" class="text-2xl float-left ml-16 ">Password::</label><br>
          <input :type="isChecked ? 'text':'password'" @blur="Plength" v-model="userPassword" class="rounded-md focus:bg-red-200 text-xl p-4 h-10 w-4/5 " placeholder="enter your password" id="pwd" />
        </div>
        <div class="bg-red-400 w-5/6 text-center ml-7 animate-pulse p-1 mb-4 text-neutral-200" v-if="checkLenght">
             <p>
              password length must be 6 character
             </p>
        </div>

        <div class="py-3">
          <label for="cpwd" class="text-2xl float-left ml-16">Conform Password::</label><br>
          <input :type="isChecked ? 'text': 'password'" @blur="check" v-model="userCnf"  class="rounded-md focus:bg-red-200 p-4 h-10 w-4/5 text-xl" placeholder="conform password" id="cpwd" />
        </div>
         <div v-if="notEqual" class="bg-red-400 w-5/6 text-center ml-7 animate-pulse p-1 mb-4 text-neutral-200">
             <p>Password and Conform Password does not matched </p>
        </div>
        <div class="ml-60  my-4">
          <input class=" h-4 w-10" type="checkbox" id="show" v-model="isChecked" />
          <label for="show" class="text-2xl px-2  h-6">Show Password</label>
        </div>
        <div class="py-4 ml-10  flex">
          <div class="ml-8 text-2xl">
            <label for="male">Male</label>
          <input type="radio" class="" value="male" name="gender"  v-model="userGender1" id="male" />
          </div>
          <div class="ml-6 text-2xl  focus:text-orange-400">
            <label for="female">Female</label>
          <input type="radio" value="female" name="gender" v-model="userGender1" id="female" />
          </div>
          <div class="mx-6 text-2xl">
            <label for="unisex">Other</label>
          <input type="radio" value="unisex" name="gender" v-model="userGender1" id="unisex" />
          </div>
        </div>
       
        <div class="py-2">
          <button @click="signUpUser" class="bg-blue-400 h-14 w-36 text-2xl  hover:scale-110 duration-300 p-2 text-black hover:text-white hover:bg-blue-600 rounded-md ">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
 </div>
 </transition>
</div>
 </div>
</template>

<script setup lang="ts">
enum typeGender{
  MALE='Male',
  FEMALE='Female',
  OTHER='Other'
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
const userGender1=ref<typeGender>(null)
const notEqual=ref<boolean>(false)
  const checkLenght=ref(false)
  const ragister=ref('')
  const emptyField=ref(false)

  const signUpUser= async ()=>{
    
    if(userName.value.trim()==='' || userEmail.value.trim()===''
    || userPassword.value.trim()==='' || userCnf.value.trim()===''
    || userGender1.value===null
     ){
      return  emptyField.value=true
    }
  const data= await createUser(userEmail.value,userPassword.value)

  // alert('heelo callled')
  if(data){
   ragister.value=`Sucessfully registered: ${data.user.email}`
  //  setTimeout(() => {
  //   ragister.value=''
  //  },3000);
}

  userCnf.value=''
  userEmail.value=''
  userPassword.value=''
  userGender1.value=''
  userName.value=''

}



const check=()=>{
  if(userPassword.value != userCnf.value)
  {
     notEqual.value=true
  }
  else{
    notEqual.value=false
  }
}
const Plength=()=>{
  if(userPassword.value.length<6){
       checkLenght.value=true
  }
  else{
     checkLenght.value=false
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