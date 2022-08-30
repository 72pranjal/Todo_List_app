import {initializeApp} from "firebase/app";


import {
  getAuth,
} from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  
    const config=useRuntimeConfig();

    const firebaseConfig={
        apiKey: config.apiBase,
        // apiKey: "AIzaSyDAzHVfy5b5DvGeRFT4x8T39Kg0AsHhW5s",
    };

    // Initialize Firebase

  const app = initializeApp(firebaseConfig);
    console.log(app)
    console.log(config.public.apiBase)
    initUser();
    const auth=getAuth()

    nuxtApp.vueApp.provide('auth',auth)
    nuxtApp.provide('auth',auth);
    
})