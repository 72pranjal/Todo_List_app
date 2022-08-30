<template>
  <div class="text-center mb-16">
    <img class="h-28 mx-auto " src="@/assets/log.jpg" alt="" />

    <div class="w-3/6 rounded-lg h-auto mx-auto border-8 border-green-600 bg-zinc-300 ">
      <div class="p-4">
        <lable class="float-left ml-9 text-xl mt-3" for="email">Email:</lable><br />
        <input
          class="placeholder-slate-300 ml-7 p-2 float-left w-5/6 rounded-md border-none pl-4"
          type="email"
          id="email"
          v-model="email"
          placeholder="enter your email"
        />
      </div>
      <div class="p-1">
        <lable class=" p-1 float-left ml-10 text-xl mt-4" for="password">Password:</lable><br />
        <input
        class="placeholder-slate-300 mb-6 ml-10 p-2 float-left w-5/6 rounded-md border-none pl-4"
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          placeholder="enter your password"
        />
      </div>
      <div class="mt-32">
        <nuxt-link class="float-left text-xl ml-12" @click="Pforget" to="/">forget password?</nuxt-link>
        <div class="float-right mr-20 text-xl">
        <input class=" h-5 w-8" type="checkbox" name="aa" v-model="showPassword" id="" />
        <lable for="aa">Show Password</lable>
        </div>
      </div>
      <div class="p-16">
        <button
          @click="signIn"
          v-if="!firebaseUser"
          class="
            bg-slate-50
            
            h-11
            border-none border-4
            rounded-lg
            w-24 
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
            
            h-11
            border-none border-4
            rounded-lg
            w-24 
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
    <nuxt-link  class="  text-blue-500 ml-14 text-xl " to="/totalItems">GoTo Home</nuxt-link>
  </div>
  <div v-if="firebaseUser">
   <client-only>
    <pre>
  {{ firebaseUser }}
</pre
    >
   </client-only>
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

const Pforget= ()=>{
    resetEmail(email.value)
}

const signIn = () => {
  const data = signInUser(email.value, password.value);

  (email.value = ""), (password.value = "");
  // alert("helooo");
 
};

const signOut = async () => {
  userdata.value = await signOutUser();
};
</script>
