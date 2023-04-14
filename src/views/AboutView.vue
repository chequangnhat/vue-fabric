<script setup>
import { fabric } from "fabric";
import { ref, onBeforeMount, onMounted } from "vue";
import html2pdf from "html2pdf.js";
import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';

const canvas = ref({});

onMounted(() => {
  var canvas = new fabric.Canvas("c");
  var circle = new fabric.Circle({
    radius: 20,
    fill: "green",
    left: 100,
    top: 100,
    opacity: 1,
  });
  var triangle = new fabric.Triangle({
    width: 20,
    height: 30,
    fill: "blue",
    left: 50,
    top: 50,
  });
  var circle1 = new fabric.Circle({
    radius: 20,
    fill: "green",
    left: 90,
    top: 200,
    opacity: 1,
  });
  var triangle1 = new fabric.Triangle({
    width: 20,
    height: 30,
    fill: "blue",
    left: 30,
    top: 100,
  });

  canvas.add(circle, triangle, circle1, triangle1);
  canvas.renderAll();
});

const exportToPDF = () => {
  html2pdf(document.getElementById("element-to-convert"));
};

const element = document.getElementById('element-to-convert');
const toImageClick = () => {
  domtoimage.toBlob(document.getElementById('element-to-convert')).then(function (blob) {
    saveAs(blob, 'element-to-convert.png');
});
}

</script>

<template>
  <div class="about">
    <h1>This is an about pag hsihfe</h1>
    
    <div id="element-to-convert" width="300" height="300">
    <center>
      <canvas id="c" width="300" height="300"></canvas>
      
    </center> 
    </div>
    <button @click="exportToPDF">Export to PDF</button>
    <button @click="toImageClick">Export to img</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

#canvas {
  background-color: aqua;
}
</style>
