<script setup lang="ts">
import { ref, computed } from "vue";

interface NodeCardProps {
  id: number,
  name: string,
  logoLink: string,
  x: number,
  y: number
}

const emit = defineEmits(['linkNode', 'dropLinkOnNode', 'moveNode', 'unlinkNode']);

const props = withDefaults(defineProps<NodeCardProps>(), {
  id: 0,
  name: 'This is a Node',
  logoLink: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
  x: 100,
  y: 100,
})
const x = ref(props.x);
const y = ref(props.y);
const newX = ref(props.x);
const newY = ref(props.y);
const startX = ref(0);
const startY = ref(0);

function drag(event: MouseEvent) {
  startX.value = event.clientX;
  startY.value = event.clientY;

  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", drop);
}

function drop(event: MouseEvent) {
  window.removeEventListener("mousemove", move);
  window.removeEventListener("mouseup", drop);
}

function move(event: MouseEvent) {
  newX.value = x.value + event.clientX - startX.value;
  newY.value = y.value + event.clientY - startY.value;
  startX.value = event.clientX;
  startY.value = event.clientY;

  x.value = newX.value < 0 ? 0 : newX.value;
  y.value = newY.value < 73 ? 73 : newY.value;
  emit('moveNode', props.id, x.value, y.value);
}

function linkNode(event: MouseEvent) {
  event.stopPropagation();
  const outputLink = document.getElementById('outputLink'+props.id);
  if (!outputLink) {
    return;
  }
  emit('linkNode', props.id, outputLink.getBoundingClientRect().left + outputLink.getBoundingClientRect().width / 2, outputLink.getBoundingClientRect().top + outputLink.getBoundingClientRect().height / 2);
}

function unlinkNode(event: MouseEvent) {
  event.stopPropagation();
  emit('unlinkNode', props.id);
}

function dropLinkOnNode(event: MouseEvent) {
  const inputLink = document.getElementById('inputLink'+props.id);
  if (!inputLink) {
    return;
  }
  emit('dropLinkOnNode', props.id, inputLink.getBoundingClientRect().left + inputLink.getBoundingClientRect().width / 2, inputLink.getBoundingClientRect().top + inputLink.getBoundingClientRect().height / 2);
}

</script>

<template>
  <div
    class="flex items-center pl-1.5 gap-1.5 pr-2.5 bg-white rounded border border-black shadow-sm absolute cursor-pointer select-none"
    :style="{ top: y + 'px', left: x + 'px', zIndex: 2 }"
    @mousedown="drag"
    @mouseup="dropLinkOnNode"
  >
    <img :src="props.logoLink" alt="spotify logo" class="h-8 w-8 rounded-full">

    <span class="text-sm font-medium">{{ props.name }}</span>

    <div
      class="flex items-center bg-white absolute -bottom-2.5 inset-x-2/4 -translate-x-2/4 p-0.5 h-4 w-4 rounded-full shadow-md"
      @mousedown="linkNode"
      :id="'outputLink'+props.id"
    >
      <div class="bg-primary rounded-full h-3 aspect-square"></div>
    </div>


    <svg
      :id="'inputLink'+props.id"
      class="absolute -left-5 inset-y-2/4 -translate-y-2/4 select-none"
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 35 36"
      fill="none"
      @mousedown="unlinkNode"
    >
      <g filter="url(#filter0_d_79_4862)">
        <path d="M29 14.0359C31.6667 15.5755 31.6667 19.4245 29 20.9641L14.75 29.1913C12.0833 30.7309 8.75 28.8064 8.75 25.7272V9.27275C8.75 6.19355 12.0833 4.26906 14.75 5.80866L29 14.0359Z" fill="white"/>
      </g>
      <path d="M26 15.7679C27.3333 16.5377 27.3333 18.4623 26 19.2321L14.75 25.7272C13.4167 26.497 11.75 25.5348 11.75 23.9952V11.0048C11.75 9.46521 13.4167 8.50296 14.75 9.27276L26 15.7679Z" fill="#574AE2"/>
      <defs>
        <filter id="filter0_d_79_4862" x="4.75" y="3.26679" width="30.25" height="32.4664" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.359538 0 0 0 0 0.359538 0 0 0 0 0.359538 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_79_4862"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_79_4862" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
</style>
