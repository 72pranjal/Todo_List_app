<template>
 <div class="bg-[url('/assets/seen18.jpg')] h-screen">
  <div class="pt-3">
    <nuxt-link  class="  text-blue-100  hover:text-green-500 ml-20 text-4xl " to="/totalItems">GoTo Home =></nuxt-link>
    <p class="text-3xl ml-20 text-black ">if you logged in</p>
  </div>
  <div class="text-center mt-32 mb-16">

    <div class="w-3/6 mb-40  rounded-lg h-auto mx-auto border-8 border-green-600 bg-gradient-to-r from-amber-100 to-amber-300 ">
      <div class="p-4">
        <lable class=" float-left ml-14 pt-6  text-2xl mt-3" for="email">Email:</lable><br />
        <input
          class="placeholder-slate-300 ml-12 p-3 text-xl mb-5 float-left w-5/6 rounded-md border-none pl-4"
          type="email"
          id="email"
          v-model="email"
          placeholder="enter your email"
        />
      </div>
      <div class="p-1">
        <lable class=" p-1 float-left ml-14 text-2xl mt-4" for="password">Password:</lable><br />
        <input
        class="placeholder-slate-300 text-xl mb-12 ml-14 p-3 float-left w-5/6 rounded-md border-none pl-4"
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          placeholder="enter your password"
        />
      </div>
      <div class="mt-32">
        <nuxt-link class="float-left text-2xl ml-16" @click="Pforget" to="/">forget password?</nuxt-link>
        <div class="float-right mr-20 text-xl">
        <input class=" h-5 w-8" type="checkbox" name="aa" v-model="showPassword" id="" />
        <lable class="text-2xl mr-6" for="aa">Show Password</lable>
        </div>
      </div>
      <div class="p-20">
        <button
          @click="signIn"
          v-if="!firebaseUser"
          class="
            bg-slate-50
            text-2xl
            mt-20
            h-16
            border-none border-4
            rounded-lg
            w-48 
            hover:bg-blue-600
            text-slate-900
            hover:text-white
            hover:scale-110
            duration-300
          "
        >
          Login
        </button>
        <button
          @click="signOut"
          v-if="firebaseUser"
          class="
            bg-slate-50
            text-2xl
            mt-20
            h-16
            border-none border-4
            rounded-lg
            w-48 
            hover:bg-blue-600
            text-slate-900
            hover:text-white
            hover:scale-110
            duration-300
          "
        >
          Log Out
        </button>
      </div>
    </div>
    
  </div>
  <div v-if="firebaseUser">
   <client-only>
    <pre>
  <!-- {{ firebaseUser }} -->
</pre
    >
   </client-only>
  </div>
 </div>
</template>

<script setup>
// definePageMeta({
//   middleware: ["auth"],
// });
// errorMessage=ref(false)
const userdata = ref();
const showPassword=ref(false)
const firebaseUser = useFirebaseUser()
const email = ref("");
const password = ref("");
const authorty=ref(false)

const Pforget= ()=>{
    resetEmail(email.value)
}

const signIn = () => {
  authorty.value=true
  const data = signInUser(email.value, password.value);

  (email.value = ""), (password.value = "");
  // alert("helooo");
 
};

const signOut = async () => {
  userdata.value = await signOutUser();
};
</script>
