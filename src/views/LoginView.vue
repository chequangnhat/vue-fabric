<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const submitLogin = () => {
  router.push('/home')
}

</script>
<template>
  <!-- <div class="flex justify-center items-center flex-col">
    <div>login here</div>
    <button
      class="w-16 h-8 bg-pink-400 rounded-xl text-white font-medium"
      @click="router.push('/home')"
    >
      login
    </button>
  </div>
  <div class="w-20 h-20 p-2 bg-blue-500 rounded-md animate-spin"></div> -->

  <div
    class="h-screen w-full bg-[#F8F8F8] flex justify-center items-center mb-10"
  >
    <div
      class="login-container w-80 h-[450px] bg-white rounded-xl drop-shadow-2xl flex items-center justify-center flex-col"
    >
      <div class="header-title mb-10">
        <span class="font-normal text-4xl">vis</span>
        <span class="font-semibold text-4xl">me</span>
      </div>
      <div
        class="input-container w-full flex justify-center items-center flex-col"
      >
        <input
          type="text"
          placeholder="user name"
          v-model="userName"
          class="border w-72 h-10 mb-3 outline-none pl-2 rounded-xl"
        />
        <input
          type="password"
          placeholder="password"
          v-model="password"
          class="border w-72 h-10 outline-none pl-2 rounded-xl"
        />
      </div>
      <button
        class="border w-44 h-10 mt-5 rounded-xl text-white bg-violet-300 hover:bg-violet-500"
        type="button"
        @click="submitLogin()"
      >
        login
      </button>
    </div>
  </div>
</template>

<style></style>
