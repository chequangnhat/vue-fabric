<script setup>
import { ref, computed } from "vue";

const isSidebarVisible = ref(true);
const isMainVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

const toggleMain = () => {
  isMainVisible.value = !isMainVisible.value;
};

const sidebarClasses = computed(() => ({
  "bg-[#2B3140] h-[95vh]": true,
  "w-16": isSidebarVisible.value,
  "w-0": !isSidebarVisible.value,
  hidden: !isSidebarVisible.value,
}));

const mainClasses = computed(() => ({
  "bg-black h-screen": true,
  "w-24": isSidebarVisible.value,
  "w-full": !isSidebarVisible.value,
  hidden: !isMainVisible.value,
}));
</script>

<template>
  <div class="flex">
    <div :class="sidebarClasses">
      <!-- Sidebar content goes here -->
      <div
        class="w-16 h-16 text-white font-light flex flex-col justify-center items-center cursor-pointer mb-3"
        @click="toggleMain"
      >
        <div>
          <font-awesome-icon icon="fa-solid fa-border-all" class="text-xl font-light"/>
        </div>
        <div class="text-base">layout</div>
      </div>

      <div
        class="w-16 h-16 text-white font-light flex flex-col justify-center items-center cursor-pointer"
        @click="toggleMain"
      >
        <div>
          <font-awesome-icon icon="fa-solid fa-image" class="text-xl font-light"/>
        </div>
        <div class="text-base">image</div>
      </div>
      <div><font-awesome-icon icon="fa-solid fa-image" /></div>
    </div>
    <div id="main" :class="mainClasses">
      <!-- Main content goes here -->
      <div class="text-white">hh</div>
    </div>
    <button
      @click="toggleSidebar"
      class="fixed bottom-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
    >
      {{ isSidebarVisible ? "Hide" : "Show" }} Sidebar
    </button>
  </div>
</template>

<style>
/* Optional custom styles can be added here */
</style>
