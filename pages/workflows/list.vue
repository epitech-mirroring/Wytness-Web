<template>
    <div class="min-h-screen bg-gray-50 p-8">
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900">Workflows</h1>
            <p class="text-gray-600 mt-2">Manage your automation workflows effortlessly.</p>
        </header>

        <main class="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
            <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Your Workflows</h2>
            <Button variant="primary" @click="addWorkflow">
                Add New Workflow
            </Button>
            </div>

            <div v-if="workflows.length > 0" class="space-y-4">
                <Card
                    v-for="workflow in workflows"
                    :key="workflow.id"
                    class="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm"
                >
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">{{ workflow.title }}</h3>
                        <p class="text-gray-700 text-sm">{{ workflow.description }}</p>
                    </div>
                    <div class="flex space-x-2">
                        <Button variant="outline" @click="viewWorkflow(workflow.id)">
                            View
                        </Button>
                        <Button variant="outline" @click="editWorkflow(workflow.id)">
                            Edit
                        </Button>
                        <Button variant="destructive" @click="deleteWorkflow(workflow.id)">
                            Delete
                        </Button>
                    </div>
                </Card>
            </div>
            <div v-else class="text-center text-gray-600 mt-10">
                <p>No workflows found. Click "Add New Workflow" to create one.</p>
            </div>
        </main>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';

    // Sample workflows data
    const workflows = ref([
        {
        id: 1,
        title: 'Email Notification Workflow',
        description: 'Sends an email when a new user registers.',
        },
        {
        id: 2,
        title: 'Social Media Automation',
        description: 'Posts tweets automatically based on events.',
        },
        {
        id: 3,
        title: 'Task Management Workflow',
        description: 'Creates a task in your to-do list after a meeting.',
        },
    ]);

    // Methods to handle workflow actions
    const addWorkflow = () => {
        // Redirect or open a modal for creating a new workflow
        console.log('Add workflow clicked');
    };

    const viewWorkflow = (id) => {
        // Navigate to the workflow detail page
        console.log('View workflow:', id);
    };

    const editWorkflow = (id) => {
        // Redirect to the workflow editing page
        console.log('Edit workflow:', id);
    };

    const deleteWorkflow = (id) => {
        // Delete the workflow from the list
        workflows.value = workflows.value.filter((workflow) => workflow.id !== id);
        console.log('Deleted workflow:', id);
    };
</script>
