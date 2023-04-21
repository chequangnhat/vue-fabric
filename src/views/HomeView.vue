<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <Header />
  <div class="w-full h-[95vh] flex">
    <Navbar />
    <RouterView />
  </div>
  
</template>
