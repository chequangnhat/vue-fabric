<script setup>
import Header from '../components/Header/Header.vue';
import Navbar from '../components/Navbar/Navbar.vue';
</script>

<template>
  <Header />
  <div class="w-full h-[95vh] flex">
    <Navbar />
    <RouterView />
  </div>
  
</template>
