<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>
<template> 
  <div class="flex justify-center items-center flex-col mt-5">
    <button
      class="w-80 h-16 bg-violet-300 rounded-3xl text-white font-medium text-3xl mb-5"
      @click="router.push('/login')"
    >
      Create new design
    </button>
    <div>landing page</div>
  </div>
</template>
