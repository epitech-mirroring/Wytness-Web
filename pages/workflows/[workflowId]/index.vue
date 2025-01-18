<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";
import LogoSVG from "~/components/ui/LogoSVG.vue";
import NodeCard from "~/components/ui/NodeCard.vue";
import NodeCardSimplified from "~/components/ui/NodeCardSimplified.vue";
import { ScrollArea } from "~/components/ui/scroll-area";


definePageMeta({
    title: "Workflow",
    description: "Page to manage workflow",
    middleware: ["auth"],
    layout: "workflows",
  });

const workflowId = parseInt(useRoute().params.workflowId as string);
const workflowStore = useWorkflowStore();
const serviceStore = useServiceStore();
const nodeStore = useNodeStore();
const workflowNodes = ref<WorkflowNode[]>([]);

onMounted(async () => {
  await workflowStore.fetchWorkflows();
  await serviceStore.fetchServices();
  await synchronizeWorkflow();
  const background = document.getElementById("background");
  if (background) {
    maxNodeX.value = background.getBoundingClientRect().width;
    maxNodeY.value = background.getBoundingClientRect().height;
  }
});

function resetWorkflow() {
  links.value.forEach((link) => {
    link.remove();
  });
  linksBetweenNodes.value.forEach((link) => {
    link.htmlDivElem.remove();
  });
  links.value = [];
  workflowNodes.value = [];
  nodesElements.value = [];
  linksBetweenNodes.value = [];
  nodeStore.clear();
}

async function synchronizeWorkflow() {
  if (workflowNodes.value.length > 0) {
    resetWorkflow();
  }
  try {
    workflowNodes.value = await workflowStore.fetchWorkflowNodes(workflowId);
  } catch (e) {
    console.log(e);
  }
  workflowNodes.value.forEach((node) => {
    addNewWorkflowNodeElement(node);
  });
  setTimeout(() => {
    workflowNodes.value.forEach((node) => {
      addLinkBetweenWorkflowNodes(node);
    });
  }, 200);
}

interface Node {
  id: number;
  nodeId: number;
  config: unknown;
  position: { x: number; y: number };
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
  nodeStore.usedLabels[workflowNode.id] = {};
  workflowNode.next.map((nextNode) => {
    nodeStore.usedLabels[workflowNode.id][nextNode.label] = false;
  });
  nodeStore.usedLabels[workflowNode.id]["input"] = false;
  nodesElements.value.push({
    id: workflowNode.id,
    nodeId: workflowNode.nodeId,
    config: workflowNode.config,
    position: { x: workflowNode.position.x, y: workflowNode.position.y },
  });
  workflowNode.next.forEach((nextNode) => {
    nextNode.next.forEach((nextNode) => {
      addNewWorkflowNodeElement(nextNode);
    });
  });
}

function addLinkBetweenWorkflowNodes(workflowNode : WorkflowNode) {
  const workflowId = workflowNode.id;
  workflowNode.next.forEach((nextNode) => {
    const label = nextNode.label;
    nextNode.next.forEach((nextNode) => {
      linkTwoNode(nextNode.id, workflowId, label);
      addLinkBetweenWorkflowNodes(nextNode);
    });
  });
}

async function addNewNodeElement(id: number) {
  try {
    const node = await nodeStore.createNode(workflowId, id, { x: 100, y: 100 });
    if (node) {
      addNewWorkflowNodeElement(node);
    }
  } catch (e) {
    console.log(e);
    await synchronizeWorkflow();
  }
}

const linksBetweenNodes = ref<Link[]>([]);

const isLinking = ref(false);
const currentLinkingNodePosition = ref({ x: 0, y: 0 });
const currentLinkingNodeId = ref(0);
const currentLabel = ref("");

const maxNodeX = ref(100);
const maxNodeY = ref(100);

const links = ref<HTMLDivElement[]>([]);

onUnmounted(() => {
  links.value.forEach((link) => {
    link.remove();
  });
  linksBetweenNodes.value.forEach((link) => {
    link.htmlDivElem.remove();
  });
  nodeStore.clear();
});

async function unlinkNode(nodeId: number) {
  const link = linksBetweenNodes.value.find((link) => link.inputNodeId === nodeId);
  linksBetweenNodes.value = linksBetweenNodes.value.filter((link) => link.inputNodeId !== nodeId);
  if (link) {
    link.htmlDivElem.remove();
    nodeStore.usedLabels[link.outputNodeId][link.label] = false;
    nodeStore.usedLabels[link.inputNodeId]["input"] = false;
    try {
      await nodeStore.removeNodePreviousLink(workflowId, link.inputNodeId);
    } catch (e) {
      console.log(e);
      await synchronizeWorkflow();
    }
  }
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

async function dropLinkOnNode(nodeId: number, x: number, y: number) {
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
    nodeStore.usedLabels[nodeId]["input"] = true;
    nodeStore.usedLabels[currentLinkingNodeId.value][currentLabel.value] = true;
    try {
      await nodeStore.addNodePreviousLink(workflowId, nodeId, currentLinkingNodeId.value, currentLabel.value);
    } catch (e) {
      console.log(e);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", drop);
      await synchronizeWorkflow();
      return;
    }
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
      return;
    }
    updateLink(
      finalLink,
      inputNode.getBoundingClientRect().left + inputNode.getBoundingClientRect().width / 2,
      inputNode.getBoundingClientRect().top + inputNode.getBoundingClientRect().height / 2,
      outputNode.getBoundingClientRect().left + outputNode.getBoundingClientRect().width / 2,
      outputNode.getBoundingClientRect().top + outputNode.getBoundingClientRect().height / 2
    );

    linksBetweenNodes.value.push({
      outputNodeId: outputNodeId,
      inputNodeId: inputNodeId,
      htmlDivElem: finalLink,
      label: label,
    });
    nodeStore.usedLabels[inputNodeId]["input"] = true;
    nodeStore.usedLabels[outputNodeId][label] = true;
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

async function saveNodeNewPosition(nodeId: number, x: number, y: number) {
  try {
    await nodeStore.updateNodePosition(workflowId, nodeId, { x: x, y: y });
  } catch (e) {
    console.log(e);
    await synchronizeWorkflow();
  }
}

</script>

<template>
  <div id="background" class="h-full w-full bg-[url('/assets/images/background_item.svg')] bg-repeat bg-[length:20px_20px]">

    <NodeCard
      v-for="(node, index) in nodesElements"
      :key="index"
      :id="node.id"
      :node-id="node.nodeId"
      :x="node.position.x"
      :y="node.position.y"
      :max-x="maxNodeX"
      :max-y="maxNodeY"
      @link-node="linkNode"
      @drop-link-on-node="dropLinkOnNode"
      @move-node="updateLinkWhenNodeMoved"
      @unlink-node="unlinkNode"
      @drop="saveNodeNewPosition"
    />

  </div>

  <div class="flex items-center gap-5 bg-white border border-navbar-border fixed bottom-14	inset-x-2/4 -translate-x-2/4 py-2 px-2.5 w-52 rounded-full">
    <div class="flex justify-between items-center w-full">
      <i class="fa-regular fa-gauge-simple-min fa-lg cursor-pointer"></i>
      <i class="fa-regular fa-gear fa-lg cursor-pointer"></i>
      <i class="fa-regular fa-broom fa-lg cursor-pointer"></i>
    </div>

  <DropdownMenu>
    <DropdownMenuTrigger as-child class="flex rounded-full bg-primary hover:bg-primary/90 text-white h-8 aspect-square items-center justify-center cursor-pointer plus-button">
      <div>
        <span class="text-2xl select-none">+</span>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-72 h-120">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator class="mb-2" />
      <ScrollArea dir="rtl" class="h-[90%] flex flex-col pl-3">
        <div
          v-for="(service, index) in serviceStore.services"
          class="flex flex-col gap-1 items-stretch content pb-2.5"
        >

          <div class="flex gap-1.5 font-medium">
            <div class="">
              <LogoSVG
                :serviceName="service.name"
                :logoUrl="service.logo"
                :color="service.color"
                :width="20"
                :height="20"
              />
            </div>
            <span>{{ service.name.charAt(0).toUpperCase() + service.name.slice(1) }}</span>
          </div>

          <div
            v-if ="service.nodes.filter((node) => node.type === 'action').length > 0"
            class="flex flex-col gap-1 items-stretch"
          >
            <span class="text-xs text-text-muted font-medium">Actions</span>
              <ScrollArea class="flex gap-1.5">
                <div class="flex gap-1.5 pb-2">
                  <NodeCardSimplified
                    v-for="(node, index) in service.nodes.filter((node) => node.type === 'action')"
                    :key="index"
                    :nodeId="node.id"
                    :nodeName="node.name"
                    :serviceName="service.name"
                    :serviceColor="service.color"
                    :serviceLogo="service.logo"
                    @click="addNewNodeElement(node.id)"
                  ></NodeCardSimplified>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea >
          </div>

          <div
            v-if ="service.nodes.filter((node) => node.type === 'trigger').length > 0"
            class="flex flex-col gap-1 items-stretch"
          >
            <span class="text-xs text-text-muted font-medium">Triggers</span>
              <ScrollArea class="flex gap-1.5">
                <div class="flex gap-1.5 pb-2">
                  <NodeCardSimplified
                    v-for="(node, index) in service.nodes.filter((node) => node.type === 'trigger')"
                    :key="index"
                    :nodeId="node.id"
                    :nodeName="node.name"
                    :serviceName="service.name"
                    :serviceColor="service.color"
                    :serviceLogo="service.logo"
                    @click="addNewNodeElement(node.id)"
                  ></NodeCardSimplified>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea >
          </div>
        </div>
    </ScrollArea>
    </DropdownMenuContent>
  </DropdownMenu>
  </div>
</template>

<style scoped>
  .scroll-left {
    direction: rtl;
  }

  .content {
    direction: ltr;
  }

  .plus-button {
    box-shadow: 0px 4px 5.7px 0px rgba(127, 117, 232, 0.77);
  }
</style>
