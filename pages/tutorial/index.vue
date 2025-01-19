servicesLength<script setup lang="ts">
  definePageMeta({
    title: "Help & Support",
    description: "Help & Support page",
    middleware: ["auth"],
    layout: "dashboard",
  });

  useHead({
    title: 'Help & Support'
  });
</script>

<template>
  <div class="p-5">
    <h1 class="text-5xl mt-2 underline          ">Tutorials</h1>
    <div class="mt-5">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <h2 class="text-3xl">Getting Started</h2>
                </AccordionTrigger>
                <AccordionContent>
                    <div class="text-base">
                        <p class="mt-2 ms-1">Learn how to get started with Wytness and create your first automation.</p>
                        <p class="ms-1">Follow the two following tutorials for create a workflow</p>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <h2 class="text-3xl">Connecting a Service</h2>
                </AccordionTrigger>
                <AccordionContent>
                    <div class="flex">
                        <div class="text-base">
                            <p class="mt-2 ms-1">To get started with Wytness, you need to connect a service to create your first automation. Follow these steps to connect a service:</p>
                            <p class="ms-1">Click on the "Connections" tab in the dashboard.</p>
                            <p class="ms-1">Choose the service you want to connect from the list of available services, and click on the "connect" button.</p>
                            <p class="ms-1">Follow the on-screen instructions to connect the service to Wytness.</p>
                        </div>
                        <div>
                            <img src="/public/assets/images/tutorial/service_connection.png" alt="Service Connection" class="mt-2">
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <h2 class="text-3xl">Creating a Workflow</h2>
                </AccordionTrigger>
                <AccordionContent>
                    <div class="text-base">
                        <p class="mt-2 ms-1">Once you have connected at least one service, you can create your first automation by creating a workflow. Follow these steps to create a workflow:</p>
                        <p class="ms-1">Click on the "Workflows" tab in the dashboard.</p>
                        <p class="ms-1">Click on the small purple "+" button at the bottom right of the page.</p>
                        <img src="/public/assets/images/tutorial/creation_worflow.png" alt="Create a Workflow" class="my-2 ms-1">
                        <p class="text-lg ms-1">Select a trigger from your connected services.</p>
                        <p class="text-lg ms-1">Click the purple button once more and choose an actions module from a connected service.</p>
                        <img src="/public/assets/images/tutorial/add_node.png" alt="Add a Node" class="my-2 ms-1">
                        <p class="text-lg ms-1">You can configure your trigger and actions by clicking on them.</p>
                        <p class="text-lg ms-1">Next, click the gray button on your trigger. By dragging your mouse over the small gray triangle on your trigger, you can link the trigger and action in an exchange.</p>
                        <img src="/public/assets/images/tutorial/link_nodes.png" alt="Link Nodes" class="my-2 ms-1">
                        <p class="text-xl ms-1"><span class="font-bold">Congratulations!</span> You have successfully created your first workflow. Simply click on the Wytness logo to automatically save your workflow.</p>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  </div>
</template>
