<script setup>
import Header from '../components/Header/Header.vue';
import Navbar from '../components/Navbar/Navbar.vue';
</script>

<template>
  <Header />
  <div class="w-full h-[95vh] flex">
    <Navbar />
    <!-- <RouterView /> -->
    <div id="routerview-container" class="bg-slate-100 w-full h-full flex justify-center items-center">
      <div class="h-5/6 w-11/12  bg-white"></div>
    </div>
  </div>
  
</template>
