<script setup>
import { fabric } from "fabric";
import { ref, reactive, onBeforeMount, onMounted, watch, onUpdated, onBeforeUpdate } from "vue";
import html2pdf from "html2pdf.js";
import domtoimage from "dom-to-image-more";
import { saveAs } from "file-saver";

const widthCanvas = ref(400);
const heightCanvas = ref(300);
const zoomScale = ref(1);

var canvas = null
var canvasb = null
// const canvas = ref(null)
const renderCanvas = () => {
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
}

onMounted(() => {
  // canvas.value = new fabric.Canvas("c");
  canvas = new fabric.Canvas("c")
  renderCanvas()
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

    canvas.add(rect);
    canvas.setActiveObject(rect);
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
  canvas.add(textbox)
  canvas.setActiveObject(textbox);;
  
}
const changeCanvasSize = () => {
  // if(widthCanvas.value == 400)
  //   widthCanvas.value = 800
  // else 
  //   widthCanvas.value = 400
  // console.log("changeCanvasSize", widthCanvas.value)
  zoomScale.value = 2
}

// const removeAll = () => {

//   canvas.clear()
// }

// onBeforeUpdate(()=>{
//   canvas.clear()
//   canvas = null

// })

onUpdated(() => {
  // renderCanvas()
  // renderCanvas("b")
  canvasb = new fabric.Canvas("b")
  var circle = new fabric.Circle({
    radius: 20,
    fill: "green",
    left: 100,
    top: 100,
    opacity: 1,
  })

    // canvas.value.add(circle, triangle, circle1, triangle1);
  canvasb.add(circle);
  canvasb.renderAll();

});
</script>

<template>
  <div class="w-full h-[95vh]">
    <h1>This is design page</h1>
    {{widthCanvas+'px'  }}
    <div id="element-to-convert" :class="'border border-[blue] '+'w-['+widthCanvas+'px]'+' h-['+heightCanvas+'px]' ">
      <canvas
        id="c"
        class="border border-slate-500"
        :width="widthCanvas-2"
        :height="heightCanvas"
        :style="{ 'zoom': zoomScale }"
      ></canvas>
      <canvas
        id="b"
        class="border border-slate-500"
        :width="widthCanvas-2"
        :height="heightCanvas"
      ></canvas>
      <!-- <canvas id="c" width="300" height="300"></canvas> -->
    </div>
    <div class="border border-slate-500" :width="widthCanvas-2"
        :height="heightCanvas">sdf</div>
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
    <button
      @click="changeCanvasSize"
      class="w-16 h-8 bg-pink-400 rounded-xl text-white font-medium"
    >
      up size
    </button>
    <button
      @click="changeCanvasSize"
      class="w-16 h-8 bg-pink-400 rounded-xl text-white font-medium"
    >
      down size
    </button>
    <button
      @click="removeAll"
      class="w-16 h-8 bg-pink-400 rounded-xl text-white font-medium"
    >
      rm all
    </button>
    
  </div>
</template>

<style>
#c {
  background-color: rgb(255, 255, 255);
}
</style>
