<script setup lang="ts">
import { ref, onMounted } from "vue";
import LogoSVG from "./LogoSVG.vue";

interface NodeCardProps {
  id: number,
  nodeId: number,
  x: number,
  y: number,
  maxX: number,
  maxY: number,
}

const emit = defineEmits(['linkNode', 'dropLinkOnNode', 'moveNode', 'unlinkNode', 'drop']);

const props = withDefaults(defineProps<NodeCardProps>(), {
  id: 0,
  nodeId: 0,
  x: 100,
  y: 100,
  maxX: 1080,
  maxY: 920,
})

const node = ref<ListNode>({} as ListNode);
const service = ref<ListService>({} as ListService);
const serviceStore = useServiceStore();
const nodeStore = useNodeStore();

const x = ref(props.x);
const y = ref(props.y);
const newX = ref(props.x);
const newY = ref(props.y);
const startX = ref(0);
const startY = ref(0);

onMounted(async () => {
  node.value = await serviceStore.getNode(props.nodeId) || {id: 0, name: 'Node', description: "This is a Node", type: NodeType.ACTION, labels: []};
  service.value = serviceStore.getServiceFromNode(props.nodeId) || {name: 'Service', description: "This is a Service", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", color: "#1ED760", nodes: [{} as ListNode], useOAuth: false};
});

function drag(event: MouseEvent) {
  startX.value = event.clientX;
  startY.value = event.clientY;

  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", drop);
}

function drop(event: MouseEvent) {
  window.removeEventListener("mousemove", move);
  window.removeEventListener("mouseup", drop);
  emit('drop', props.id, x.value, y.value);
}

function move(event: MouseEvent) {
  newX.value = x.value + event.clientX - startX.value;
  newY.value = y.value + event.clientY - startY.value;
  startX.value = event.clientX;
  startY.value = event.clientY;

  const nodeCard = document.getElementById(`node-card${props.id}`);
  if (!nodeCard) {
    return;
  }

  x.value = Math.floor(newX.value < 0 ? 0 : newX.value);
  y.value = Math.floor(newY.value < 73 ? 73 : newY.value);
  x.value = Math.floor(x.value > props.maxX - nodeCard.getBoundingClientRect().width ? props.maxX - nodeCard.getBoundingClientRect().width : x.value);
  y.value = Math.floor(y.value > props.maxY - 50 ? props.maxY - 50 : y.value);
  emit('moveNode', props.id, x.value, y.value);
}

function linkNode(event: MouseEvent, label: string) {
  event.stopPropagation();
  const outputLink = document.getElementById(`${label}${props.id}`);
  if (!outputLink) {
    return;
  }
  emit('linkNode', props.id, label, outputLink.getBoundingClientRect().left + outputLink.getBoundingClientRect().width / 2, outputLink.getBoundingClientRect().top + outputLink.getBoundingClientRect().height / 2);
}

function unlinkNode(event: MouseEvent) {
  event.stopPropagation();
  emit('unlinkNode', props.id);
}

function dropLinkOnNode(event: MouseEvent) {
  const inputLink = document.getElementById('input'+props.id);
  if (!inputLink) {
    return;
  }
  emit('dropLinkOnNode', props.id, inputLink.getBoundingClientRect().left + inputLink.getBoundingClientRect().width / 2, inputLink.getBoundingClientRect().top + inputLink.getBoundingClientRect().height / 2);
}
</script>

<template>
  <div
    :id="`node-card${props.id}`"
    class="flex items-center pl-1.5 gap-1.5 pr-2.5 bg-white rounded border border-black absolute cursor-pointer select-none service-card"
    :style="{ top: y + 'px', left: x + 'px', zIndex: 2, 'border-color': service.color === '#FFFFFF' ? '#F0EAEE' : service.color, '--color': service.color }"
    @mousedown="drag"
    @mouseup="dropLinkOnNode"
  >
    <div class="h-8 w-8 rounded-full">
      <LogoSVG
        :serviceName="service.name"
        :logoUrl="service.logo"
        :color="service.color"
        :width="22"
        :height="22"
      />
    </div>

    <span class="text-sm font-medium">{{ node.name }}</span>


    <TooltipProvider v-if="node && node.labels && node.labels.length >= 1">
      <Tooltip>
        <TooltipTrigger as-child>
          <div
            class="flex items-center bg-white absolute -bottom-2.5 inset-x-2/4 -translate-x-2/4 p-0.5 h-4 w-4 rounded-full shadow-md"
            @mousedown="(event) => linkNode(event, node.labels[0])"
            :id="node.labels[0] + props.id"
          >
            <div
              class="rounded-full h-3 aspect-square"
              :style="{ backgroundColor: nodeStore.getUsedLabelsValue(props.id, node.labels[0]) ? '#574AE2' : '#9593AE' }"
            ></div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" class="border-0 px-2.5 py-1.5 rounded-sm tooltip-card text-white" >
          <span>{{ node.labels[0] }}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>


    <TooltipProvider v-if="node && node.labels && node.labels.length > 1">
      <Tooltip>
        <TooltipTrigger as-child>
          <div
            class="flex items-center bg-white absolute -right-2.5 inset-y-2/4 -translate-y-2/4 p-0.5 h-4 w-4 rounded-full shadow-md"
            @mousedown="(event) => linkNode(event, node.labels[1])"
            :id="node.labels[1] + props.id"
          >
            <div
              class="rounded-full h-3 aspect-square"
              :style="{ backgroundColor: nodeStore.getUsedLabelsValue(props.id, node.labels[1]) ? '#574AE2' : '#9593AE' }"
            ></div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" class="border-0 px-2.5 py-1.5 rounded-sm tooltip-card text-white">
          <span>{{ node.labels[1] }}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider v-if="node.type === NodeType.ACTION">
      <Tooltip>
        <TooltipTrigger as-child>
          <svg
            :id="'input'+props.id"
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
            <path d="M26 15.7679C27.3333 16.5377 27.3333 18.4623 26 19.2321L14.75 25.7272C13.4167 26.497 11.75 25.5348 11.75 23.9952V11.0048C11.75 9.46521 13.4167 8.50296 14.75 9.27276L26 15.7679Z" :fill="nodeStore.getUsedLabelsValue(props.id, 'input') ? '#574AE2' : '#9593AE'"/>
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
        </TooltipTrigger>
        <TooltipContent class="border-0 px-2.5 py-1.5 rounded-sm tooltip-card text-white">
          <span>input</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>

<style scoped lang="scss">
  .service-card {
    --color: #1CD760;
    --shadow-color: rgb(from var(--color) r g b / 0.3);
    box-shadow: 0px 2px 4.2px 0px var(--shadow-color);
  }


</style>

<style>
.tooltip-card {
  background: rgba(105, 98, 255, 0.90);
  backdrop-filter: blur(2px);
}
</style>
