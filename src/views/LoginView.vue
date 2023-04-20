<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>
<template>
  <div class="flex justify-center items-center flex-col mt-5">
    <div>login here</div>
    <button
      class="w-16 h-8 bg-pink-400 rounded-xl text-white font-medium"
      @click="router.push('/home')"
    >
      login
    </button>
  </div>
</template>
