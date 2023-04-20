<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <Header />
  <div class="flex">
    <Navbar />
    <RouterView />
  </div>
  
</template>
