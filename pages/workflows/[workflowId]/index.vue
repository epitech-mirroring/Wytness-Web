<script setup lang="ts">
import { ref, computed } from "vue";
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

const workflowId = parseInt(useRoute().params.workflowId as string);
const workflowStore = useWorkflowStore();
const serviceStore = useServiceStore();
const triggerConfig = ref("{}");
const workflow = computed(() => workflowStore.getWorkflow(workflowId));

onMounted(() => {
  workflowStore.fetchWorkflows();
  serviceStore.fetchServices();
});

// Watch workflow changes
watch(workflow, (workflow) => {
  if (workflow) {
    triggerConfig.value = JSON.stringify(
      workflow.entrypoints[0].config,
      null,
      2,
    );
  }
});

const addNewAction = () => {};

const updateSelectedAction = (index, action) => {};

const removeAction = (index) => {};
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900">Create Your Automation</h1>
      <p class="text-gray-600 mt-2">
        Combine services to automate your workflows effortlessly.
      </p>
    </header>

    <main
      v-if="workflow"
      class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8"
    >
      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          1. Select a Trigger
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              {{
                workflow!.entrypoints.length > 0
                  ? serviceStore.getNodeName(workflow!.entrypoints[0].nodeID)
                  : "No Triggers Available"
              }}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <template
              v-for="service in serviceStore.services"
              :key="service.id"
            >
              <DropdownMenuLabel class="capitalize">{{
                service.name
              }}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem
                  v-for="node in service.nodes.filter(
                    (n) => n.type === 'trigger',
                  )"
                  :key="node.id"
                  :value="node.id"
                >
                  {{ node.name }}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </template>
          </DropdownMenuContent>
        </DropdownMenu>

        <Textarea class="mt-4" placeholder="{}" :model-value="triggerConfig" />
      </section>

      <div class="flex justify-center my-8">
        <Button @click="addNewAction">
          <i class="fas fa-arrow-down" />
        </Button>
      </div>

      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          1. Select Actions
        </h2>
        <Card
          v-for="(node, index) in workflow.nodes"
          :key="node.id"
          class="mb-5"
        >
          <!-- Header -->
          <CardHeader>
            <CardTitle class="text-xl pb-5"
              >Action number {{ index + 1 }}</CardTitle
            >
            <CardDescription>
              <DropdownMenu v-model="node.nodeID">
                <DropdownMenuTrigger as-child>
                  <Button variant="outline">
                    {{ serviceStore.getNodeName(node.nodeID) }}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56">
                  <template
                    v-for="service in serviceStore.services"
                    :key="service.id"
                  >
                    <DropdownMenuLabel class="capitalize">{{
                      service.name
                    }}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup>
                      <DropdownMenuRadioItem
                        v-for="action in service.nodes.filter(
                          (n) => n.type === 'action',
                        )"
                        :key="action.id"
                        :value="action.id"
                      >
                        {{ action.name }}
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </template>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardDescription>
          </CardHeader>

          <!-- Footer -->
          <CardFooter>
            <Button variant="destructive" @click="removeAction(index)">
              Delete Action
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  </div>
</template>
