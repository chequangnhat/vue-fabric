<script setup>
import { fabric } from "fabric";
import { ref, onBeforeMount, onMounted } from "vue";
import html2pdf from "html2pdf.js";
import domtoimage from "dom-to-image-more";
import { saveAs } from "file-saver";

const widthCanvas = ref(400);
const heightCanvas = ref(300);

// var canvas = null
const canvas = ref(null)

onMounted(() => {
  canvas.value = new fabric.Canvas("c");

  // var circle = new fabric.Circle({
  //   radius: 20,
  //   fill: "green",
  //   left: 100,
  //   top: 100,
  //   opacity: 1,
  // });
  // var triangle = new fabric.Triangle({
  //   width: 20,
  //   height: 30,
  //   fill: "blue",
  //   left: 50,
  //   top: 50,
  // });
  // var circle1 = new fabric.Circle({
  //   radius: 20,
  //   fill: "green",
  //   left: 90,
  //   top: 200,
  //   opacity: 1,
  // });
  // var triangle1 = new fabric.Triangle({
  //   width: 20,
  //   height: 30,
  //   fill: "blue",
  //   left: 30,
  //   top: 100,
  // });

  // canvas.value.add(circle, triangle, circle1, triangle1);
  // canvas.add(circle);
  // canvas.renderAll();
});

const exportToPDF = () => {
  html2pdf(document.getElementById("element-to-convert"));
};

const toImageClick = () => {
  domtoimage
    .toBlob(document.getElementById("element-to-convert"))
    .then(function (blob) {
      saveAs(blob, "element-to-convert.png");
    });
};

const addRect = () => {
  console.log("addRect")
  var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: 'yellow',
      width: 200,
      height: 100,
      objectCaching: false,
      stroke: 'lightgreen',
      strokeWidth: 4,
    });

    canvas.value.add(rect);
    canvas.value.setActiveObject(rect);
  // canvas.setActiveObject(triangle2);
  
}
const addText = () => {
  var textbox = new fabric.Textbox('edit this text', {
  left: 50,
  top: 50,
  width: 150,
  height: 150,
  fontSize: 20
  })
  canvas.value.add(textbox)
  canvas.value.setActiveObject(textbox);;
  
}
</script>

<template>
  <div class="w-full h-[95vh]">
    <h1>This is design page</h1>
    <div id="element-to-convert" :class="'border border-slate-900 '+'w-['+widthCanvas+'px]'+' h-['+heightCanvas+'px]' ">
      <!-- <canvas
        id="c"
        :width="widthCanvas-2"
        :height="heightCanvas"
      ></canvas> -->
      <canvas id="c" width="300" height="300"></canvas>
    </div>
    <button
      @click="exportToPDF"
      class="w-40 h-8 bg-pink-400 rounded-xl text-white font-medium mt-5"
    >
      Export to PDF
    </button>
    <button
      @click="toImageClick"
      class="w-40 h-8 bg-pink-400 rounded-xl text-white font-medium"
    >
      Export to img
    </button>
    <button
      @click="addRect"
      class="w-16 h-8 bg-pink-400 rounded-xl text-white font-medium"
    >
      add rect
    </button>
    <button
      @click="addText"
      class="w-16 h-8 bg-pink-400 rounded-xl text-white font-medium"
    >
      add Text
    </button>
  </div>
</template>

<style>
#c {
  background-color: rgb(255, 255, 255);
}
</style>
