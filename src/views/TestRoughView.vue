<script setup>
import { fabric } from "fabric";
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  watch,
  onUpdated,
  onBeforeUpdate,
} from "vue";
import html2pdf from "html2pdf.js";
import domtoimage from "dom-to-image-more";
import { saveAs } from "file-saver";

import rough from "roughjs";

const generator = rough.generator();

const canvas = ref(null);
let rc = null; // RoughCanvas instance

const elements = reactive([]);
const action = reactive("none");
const tool = reactive("line");
const selectedElement = reactive(null);

const createElement = (id, x1, y1, x2, y2, type) => {
  const roughElement =
    type == "line"
      ? generator.line(x1, y1, x2, y2)
      : generator.rectangle(x1, y1, x2 - x1, y2 - y1);

  return { id, x1, y1, x2, y2, type, roughElement };
};

const isWithinElement = (x, y, element) => {
  const { x1, x2, y1, y2, type } = element;
  if (type == "rectangle") {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);

    return x >= minX && x <= maxX && y >= minY && y <= maxY;
  } else {
    const a = { x: x1, y: y1 };
    const b = { x: x2, y: y2 };
    const c = { x, y };
    const offset = distance(a, b) - (distance(a, c) + distance(b, c));
    console.log("distance ab", distance(a, b));
    console.log("distance ac", distance(a, c));
    console.log("distance bc", distance(b, c));
    console.log("off ", offset);
    return Math.abs(offset) < 1;
  }
};

const distance = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const getElementAtPosition = (x, y, elements) => {
  return elements.find((element) => isWithinElement(x, y, element));
};



const handleMouseDown = (event) => {
  console.log("mousedown");
  const { clientX, clientY } = event;
  console.log("clientx", clientX);
  if (tool == "selection") {
    console.log("selection mousedown");
    //moving
    const element = getElementAtPosition(clientX, clientY, elements);
    if (element) {
      const offsetX = clientX - element.x1;
      const offsetY = clientY - element.y1;
      element = { ...element, offsetX, offsetY };
      action = "moving";
    }
  } else {
    const id = elements.length;
    const element = createElement(id, clientX, clientY, clientX, clientY, tool);
    elements.push(element);
    console.log(elements);

    action = "drawing";
  }
};

const handleMouseMove = (event) => {
  const { clientX, clientY } = event;

  if (tool == "selection") {
    event.target.style.cursor = getElementAtPosition(clientX, clientY, elements)
      ? "move"
      : "default";
  }

  if (action == "drawing") {
    const index = elements.length - 1;
    const { x1, y1 } = elements[index];
    updateElement(index, x1, y1, clientX, clientY, tool);
  } else if (action == "moving") {
    const { id, x1, x2, y1, y2, type, offsetX, offsetY } = selectedElement;
    const width = x2 - x1;
    const height = y2 - y1;
    const newX1 = clientX - offsetX;
    const newY1 = clientY - offsetY;
    updateElement(id, newX1, newY1, newX1 + width, newY1 + height, type);
  }
};

const handleMouseUp = () => {
  action = false;
  selectedElement = null;
};


onMounted(() => {
  rc = rough.canvas(canvas.value);

  // Draw a simple rectangle
  const rectangle = rc.rectangle(10, 10, 100, 50);
  const line = generator.line(10, 10, 100, 50)
  rc.draw(rectangle);
  rc.draw(line);
});

watch(elements, async () => {
  rc = rough.canvas(canvas.value);
  // const context = canvas.getContext("2d");
  // context.clearRect(0, 0, canvas.width, canvas.height);

  // const line = generator.line(10, 10, 210, 210);
  // roughCanvas.draw(line);

  elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));
});

const updateElement = (id, x1, y1, x2, y2, type) => {
  const updatedElement = createElement(id, x1, y1, x2, y2, type);

  const elementsCopy = [...elements];
  elementsCopy[id] = updatedElement;
  elements = elementsCopy;
};
</script>

<template>
  <div class="w-full h-full bg-orange-200">
    <div :style="{ position: 'fixed' }">
      <input
        type="radio"
        id="selection"
        :checked="tool === 'selection'"
        :onChange="() => (tool = 'selection')"
      />
      <label htmlFor="selection">Selection</label>
      <input
        type="radio"
        id="line"
        :checked="tool === 'line'"
        :onChange="() => (tool = 'line')"
      />
      <label htmlFor="line">Line</label>
      <input
        type="radio"
        id="rectangle"
        :checked="tool === 'rectangle'"
        :onChange="() => (tool = 'rectangle')"
      />
      <label htmlFor="rectangle">Rectangle</label>
    </div>
    <canvas
      ref="canvas"
      class=" bg-red-300"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
    >
      Canvas
    </canvas>
  </div>
</template>
