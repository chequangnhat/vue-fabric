<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import rough from 'roughjs';


const generator = rough.generator();
const canvas = ref(null);
let rc = null; // RoughCanvas instance

// Initialize RoughCanvas on component mount
onMounted(() => {
  rc = rough.canvas(canvas.value);

  // Draw a simple rectangle
  const rectangle = rc.rectangle(10, 10, 100, 50);
  const line = generator.line(10, 10, 100, 50)
  rc.draw(rectangle);
  rc.draw(line);
});
</script>