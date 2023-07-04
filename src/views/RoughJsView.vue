<template>
  <div class="w-screen h-screen" >
    <canvas ref="canvas" id="cv"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, watch } from 'vue';
import rough from 'roughjs';


const generator = rough.generator();
const canvas = ref(null);
const rc = ref(null); // RoughCanvas instance

onMounted(()=>{
  rc.value = rough.canvas(canvas.value);

})

watch(rc, () => {
  const rectangle = rc.value.rectangle(10, 10, 100, 50);
  const line = generator.line(10, 10, 100, 50)
  rc.value.draw(rectangle);
  rc.value.draw(line);
})
// Initialize RoughCanvas on component mount
onUpdated(() => {

  // Draw a simple rectangle
  const rectangle = rc.rectangle(10, 10, 100, 50);
  const line = generator.line(10, 10, 100, 50)
  rc.draw(rectangle);
  rc.draw(line);
});

// rc = rough.canvas(canvas.value);

// // Draw a simple rectangle
// const rectangle = rc.rectangle(10, 10, 100, 50);
// const line = generator.line(10, 10, 100, 50)
// rc.draw(rectangle);
// rc.draw(line);
</script>

<style type="text/css" scoped>
#cv{
  width: 1000px;
  height: 1000px;
  background-color: yellowgreen;
}
</style>