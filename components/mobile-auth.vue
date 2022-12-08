<template>


   <div class="text-center mt-80 mb-28 text-2xl ">
    <h1>
        Enter Mobli Number To Create Account
    </h1>
  <form>
    <input type="text" id="number" placeholder="enter your mobile number "   v-model="mobileNumer">
    <div id = recaptcha-container>
<button type="button" @click="phoneAuth();">SendCode</button>
    </div>
  </form>
  <br>

  <h1>Enter Verification code </h1>

  <form>
    <input type="text" id="" placeholder="enter verification code" v-model="otp">
    <button type="button" @click="codeverify()"> verfiy code</button>
  </form>
   </div>
</template>

<script setup lang="ts">

const mobileNumer = ref()
const otp = ref()
console.log(typeof(mobileNumer))

const phoneAuth = () => {
  const data = getNumber(mobileNumer.value);
  // return alert('please check your email and password')
  (mobileNumer.value = "")
};

const codeverify =() =>{
  getCode(otp.value)
}
</script>