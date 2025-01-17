<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NodeCard from "~/components/ui/NodeCard.vue";
import { node } from "@unovis/ts/components/sankey/style";
import { set } from "zod";

definePageMeta({
    title: "Workflow",
    description: "Page to manage workflow",
    middleware: ["auth"],
    layout: "workflows",
  });

const workflowId = parseInt(useRoute().params.workflowId as string);
const workflowStore = useWorkflowStore();
const serviceStore = useServiceStore();
const workflowNodes = ref<WorkflowNode[]>([]);
// const triggerConfig = ref("{}");
// const workflow = computed(() => workflowStore.getWorkflow(workflowId));

onMounted(async () => {
  await workflowStore.fetchWorkflows();
  await serviceStore.fetchServices();
  try {
  workflowNodes.value = await workflowStore.fetchWorkflowNodes(workflowId);
  } catch (e) {
    console.log(e);
  }
  console.log(workflowNodes.value);
  workflowNodes.value.forEach((node) => {
    addNewWorkflowNodeElement(node);
  });
  setTimeout(() => {
  workflowNodes.value.forEach((node) => {
    addLinkBetweenWorkflowNodes(node);
  });
  }, 1000);
  console.log(nodesElements.value);
  console.log(linksBetweenNodes.value);
});

// // Watch workflow changes
// watch(workflow, (workflow) => {
//   if (workflow) {
//     triggerConfig.value = JSON.stringify(
//       workflow.entrypoints[0].config,
//       null,
//       2,
//     );
//   }
// });

// const addNewAction = () => {};

// const updateSelectedAction = (index, action) => {};

// const removeAction = (index) => {};

interface Node {
  id: number;
  nodeId: number;
  config: unknown;
}

interface Link {
  outputNodeId: number;
  inputNodeId: number;
  htmlDivElem: HTMLDivElement;
  label: string;
}

const nodesElements = ref<Node[]>([
]);

function addNewWorkflowNodeElement(workflowNode : WorkflowNode) {
  nodesElements.value.push({
    id: workflowNode.id,
    nodeId: workflowNode.nodeId,
    config: workflowNode.config,
  });
  workflowNode.next.forEach((nextNode) => {
    nextNode.next.forEach((nextNode) => {
      addNewWorkflowNodeElement(nextNode);
    });
  });
  console.log(nodesElements.value);
}

function addLinkBetweenWorkflowNodes(workflowNode : WorkflowNode) {
  const workflowId = workflowNode.id;
  workflowNode.next.forEach((nextNode) => {
    const label = nextNode.label;
    nextNode.next.forEach((nextNode) => {
      console.log("Try to link", workflowId, nextNode.id);
      linkTwoNode(nextNode.id, workflowId, label);
      addLinkBetweenWorkflowNodes(nextNode);
    });
  });
}

// const addNewNodeElement = (id: number, config: unknown) => {
//   nodesElements.value.push({
//     id: id,
//     name: "This is a Node",
//     logoLink: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
//     config: config,
//   });
// };

const linksBetweenNodes = ref<Link[]>([]);

const isLinking = ref(false);
const currentLinkingNodePosition = ref({ x: 0, y: 0 });
const currentLinkingNodeId = ref(0);
const currentLabel = ref("");

const links = ref<HTMLDivElement[]>([]);

onUnmounted(() => {
  links.value.forEach((link) => {
    link.remove();
  });
  linksBetweenNodes.value.forEach((link) => {
    link.htmlDivElem.remove();
  });
});

function unlinkNode(nodeId: number) {
  const link = linksBetweenNodes.value.find((link) => link.inputNodeId === nodeId);
  if (link) {
    link.htmlDivElem.remove();
  }
  linksBetweenNodes.value = linksBetweenNodes.value.filter((link) => link.inputNodeId !== nodeId);
}

function linkNode(nodeId: number, label: string, x: number, y: number) {
  if (isLinking.value) {
    isLinking.value = false;
    currentLinkingNodePosition.value = { x: 0, y: 0 };
    currentLinkingNodeId.value = 0;
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", drop);
  } else {
    isLinking.value = true;
    currentLinkingNodeId.value = nodeId;
    currentLinkingNodePosition.value = { x: x-2, y: y-2 };
    currentLabel.value = label;
    links.value.push(createLink(x-2, y-2, x-2, y-2));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", drop);
  }
}

function move(event: MouseEvent) {
  if (isLinking.value) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const lastLink = links.value[links.value.length - 1];
    updateLink(lastLink, mouseX, mouseY, currentLinkingNodePosition.value.x, currentLinkingNodePosition.value.y);
  }
}

function updateLink(htmlDivElem : HTMLDivElement, x1: number, y1: number, x2: number, y2: number) {
  htmlDivElem.style.width = `${Math.abs(x1 - x2) + 2}px`;
  htmlDivElem.style.height = `${Math.abs(y1 - y2) + 2}px`;
  htmlDivElem.style.left = `${Math.min(x1, x2)}px`;
  htmlDivElem.style.top = `${Math.min(y1, y2)}px`;

  if (x1 < x2) {
    htmlDivElem.style.borderRight = "4px solid black";
    htmlDivElem.style.borderLeft = "none";
  } else {
    htmlDivElem.style.borderLeft = "4px solid black";
    htmlDivElem.style.borderRight = "none";
  }

  if (y1 < y2) {
    htmlDivElem.style.borderTop = "4px solid black";
    htmlDivElem.style.borderBottom = "none";
    if (x1 < x2) {
      htmlDivElem.style.borderRadius = "0 40px 0 0";
    } else {
      htmlDivElem.style.borderRadius = "40px 0 0 0";
    }
  } else {
    htmlDivElem.style.borderBottom = "4px solid black";
    htmlDivElem.style.borderTop = "none";
    if (x1 < x2) {
      htmlDivElem.style.borderRadius = "0 0 40px 0";
    } else {
      htmlDivElem.style.borderRadius = "0 0 0 40px";
    }
  }
}

function drop(event: MouseEvent) {
  isLinking.value = false;
  currentLinkingNodePosition.value = { x: 0, y: 0 };
  currentLabel.value = "";
  currentLinkingNodeId.value = 0;
  const lastLink = links.value[links.value.length - 1];
  lastLink.remove();
  links.value.pop();
  window.removeEventListener("mousemove", move);
  window.removeEventListener("mouseup", drop);
}

function hasAlreadyAnInputLink(nodeId: number) {
  return linksBetweenNodes.value.some((link) => link.inputNodeId === nodeId);
}

function dropLinkOnNode(nodeId: number, x: number, y: number) {
  if (!isLinking.value) {
    return;
  }
  const lastLink = links.value[links.value.length - 1];
  if (currentLinkingNodeId.value !== nodeId && !hasAlreadyAnInputLink(nodeId)) {
    const finalLink = lastLink.cloneNode() as HTMLDivElement;
    document.body.appendChild(finalLink);
    updateLink(finalLink, x, y, currentLinkingNodePosition.value.x, currentLinkingNodePosition.value.y);

    linksBetweenNodes.value.push({
      outputNodeId: currentLinkingNodeId.value,
      inputNodeId: nodeId,
      htmlDivElem: finalLink,
      label: currentLabel.value,
    });
  }
  lastLink.remove();
  links.value.pop();
  isLinking.value = false;
  currentLinkingNodePosition.value = { x: 0, y: 0 };
  currentLabel.value = "";
  window.removeEventListener("mousemove", move);
  window.removeEventListener("mouseup", drop);
}

function linkTwoNode(inputNodeId: number, outputNodeId: number, label: string) {
  if (inputNodeId !== outputNodeId && !hasAlreadyAnInputLink(inputNodeId)) {
    const finalLink = createLink(0, 0, 0, 0);
    document.body.appendChild(finalLink);
    const outputNode = document.getElementById(`${label}${outputNodeId}`);
    const inputNode = document.getElementById(`input${inputNodeId}`);
    if (!outputNode || !inputNode) {
      console.log("Node not found");
      console.log(outputNode, inputNode);
      return;
    }
    updateLink(
      finalLink,
      outputNode.getBoundingClientRect().left + outputNode.getBoundingClientRect().width / 2,
      outputNode.getBoundingClientRect().top + outputNode.getBoundingClientRect().height / 2,
      inputNode.getBoundingClientRect().left + inputNode.getBoundingClientRect().width / 2,
      inputNode.getBoundingClientRect().top + inputNode.getBoundingClientRect().height / 2
    );

    linksBetweenNodes.value.push({
      outputNodeId: outputNodeId,
      inputNodeId: inputNodeId,
      htmlDivElem: finalLink,
      label: label,
    });
  }
}

function createLink(x1: number, y1: number, x2: number, y2: number) {
  const line = document.createElement("div");
  line.style.position = "absolute";
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;
  line.style.width = `${x2 - x1}px`;
  line.style.height = `${y2 - y1}px`;
  line.style.zIndex = "1";
  document.body.appendChild(line);
  return line;
}

function updateLinkWhenNodeMoved(nodeId: number, x: number, y: number) {
  linksBetweenNodes.value.forEach((link) => {
    const divElem = link.htmlDivElem;
    const label = link.label;
    if (link.inputNodeId === nodeId) {
      const outputNode = document.getElementById(`${label}${link.outputNodeId}`);
      const inputNode = document.getElementById(`input${link.inputNodeId}`);
      if (outputNode && inputNode) {
        updateLink(
          divElem,
          inputNode.getBoundingClientRect().left + inputNode.getBoundingClientRect().width / 2,
          inputNode.getBoundingClientRect().top + inputNode.getBoundingClientRect().height / 2,
          outputNode.getBoundingClientRect().left + outputNode.getBoundingClientRect().width / 2,
          outputNode.getBoundingClientRect().top + outputNode.getBoundingClientRect().height / 2
        );
      }
    } else if (link.outputNodeId === nodeId) {
      const inputNode = document.getElementById(`input${link.inputNodeId}`);
      const outputNode = document.getElementById(`${label}${link.outputNodeId}`);
      if (inputNode && outputNode) {
        updateLink(
          divElem,
          inputNode.getBoundingClientRect().left + inputNode.getBoundingClientRect().width / 2,
          inputNode.getBoundingClientRect().top + inputNode.getBoundingClientRect().height / 2,
          outputNode.getBoundingClientRect().left + outputNode.getBoundingClientRect().width / 2,
          outputNode.getBoundingClientRect().top + outputNode.getBoundingClientRect().height / 2
        );
      }
    }
  });
}

</script>

<template>
  <div class="h-full w-full bg-[url('/assets/images/background_item.svg')] bg-repeat bg-[length:20px_20px]">

    <NodeCard
      v-for="(node, index) in nodesElements"
      :key="index"
      :id="node.id"
      :node-id="node.nodeId"
      @link-node="linkNode"
      @drop-link-on-node="dropLinkOnNode"
      @move-node="updateLinkWhenNodeMoved"
      @unlink-node="unlinkNode"
    />

  </div>

  <div class="flex items-center gap-5 bg-white border border-navbar-border absolute bottom-14	inset-x-2/4 -translate-x-2/4 py-2 px-2.5 w-52 rounded-full">
    <div class="flex justify-between items-center w-full">
      <i class="fa-regular fa-gauge-simple-min fa-lg cursor-pointer"></i>
      <i class="fa-regular fa-gear fa-lg cursor-pointer"></i>
      <i class="fa-regular fa-broom fa-lg cursor-pointer"></i>
    </div>

    <div class="flex rounded-full bg-primary hover:bg-primary/90 text-white h-8 aspect-square items-center justify-center cursor-pointer" @click="addNewNodeElement(0, {})">
      <span class="text-2xl select-none">+</span>
    </div>

  </div>
</template>
