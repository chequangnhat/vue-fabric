<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'

const canvasRef = ref(null)
const canvasSize = reactive({
  width: 100,
  height: 100
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  console.log("resize", window.innerWidth,)
  canvasSize.width = window.innerWidth - 100
  canvasSize.height =  window.innerHeight - 100
  console.log(canvasSize)
}
</script>
<template>
  <canvas class="bg-black" :width="canvasSize.width" :height="canvasSize.height" ref="canvasRef"></canvas>
</template>


