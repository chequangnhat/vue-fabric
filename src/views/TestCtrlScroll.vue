<template>
  <div
  class="flex justify-center items-center h-full w-full"
  >
    <div
      @wheel.prevent="onScroll"
      ref="container"
      :style="{ zoom: zoomScale }"
      class="flex justify-center items-center h-5/6 w-5/6 border border-black overflow-hidden"
    >
      <canvas
        id="c"
        class="border border-slate-500"
        width="400"
        height="400"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeMount } from "vue";

const container = ref(null);
const zoomScale = ref(1);
var canvas = null


const onScroll = (event) => {
  const deltaY = event.deltaY;
  console.log(zoomScale.value);
  if (event.ctrlKey) {
    if (deltaY < 0) {
      // Scrolling up, do something
      zoomScale.value = zoomScale.value + 0.01;
      console.log("Scrolling up");
    } else if (deltaY > 0) {
      // Scrolling down, do something
      if (zoomScale.value >= 0.15) {
        zoomScale.value = zoomScale.value - 0.1;
      }
      console.log("Scrolling down");
    }
    // Do something when ctrl + scroll is detected
    console.log("Ctrl + Scroll detected");
  }
};

onBeforeMount(()=>{

})

onMounted(() => {
  container.value.addEventListener("wheel", onScroll);
  canvas = new fabric.Canvas("c")
  
  var circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100,
      opacity: 1,
    })
  
    // canvas.value.add(circle, triangle, circle1, triangle1);
    canvas.add(circle);
    canvas.renderAll(); 
  
});
</script>
