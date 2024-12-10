<template>
    <div class="min-h-screen bg-gray-50 p-8">
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900">Create Your Automation</h1>
            <p class="text-gray-600 mt-2">Combine services to automate your workflows effortlessly.</p>
        </header>

        <main class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
            <section>
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Select a Trigger</h2>

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline">
                            {{ selectedTrigger?.title || 'Trigger' }}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-56">
                        <DropdownMenuLabel>Panel Trigger</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup v-model="selectedTriggerIndex">
                            <DropdownMenuRadioItem
                                :value="index"
                                v-for="(trigger, index) in triggers"
                                :key="trigger.id"
                            >
                                {{ trigger.title }}
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div v-if="selectedTrigger != null" v-for="(component, index) in selectedTrigger.components" :key="index" class="mt-4">
                    <label v-if="component.label" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ component.label }}
                    </label>
                    <div v-if="component.type === 'text'">
                        <input
                            type="text"
                            class="block w-full px-4 py-2 border rounded-md"
                            v-model="component.value"
                        />
                    </div>
                    <div v-else-if="component.type === 'checkbox'">
                        <input
                            type="checkbox"
                            class="mr-2"
                            v-model="component.value"
                        />
                        <span>{{ component.label }}</span>
                    </div>
                    <div v-else>
                        <input
                            v-type="component.type"
                            class="mr-2"
                            v-model="component.value"
                        />
                    </div>
                </div>
            </section>

            <!-- Arrow -->
            <div class="flex justify-center my-8">
                <Button @click="addNewAction">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 4v16m8-8H4" />
                    </svg>
                </Button>
            </div>

            <!-- Action Section -->
            <section>
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Select Actions</h2>
                <Card v-for="(selectedAction, index) in selectedActions" :key="index" class="mb-5">
                    <!-- Header -->
                    <CardHeader>
                        <CardTitle class="text-xl pb-5">Action number {{ index + 1 }}</CardTitle>
                        <CardDescription>
                            <DropdownMenu>
                                <DropdownMenuTrigger as-child>
                                    <Button variant="outline">
                                        {{ selectedAction?.title || 'Select an Action' }}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent class="w-56">
                                    <DropdownMenuLabel>Available Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup v-model="selectedAction.id">
                                        <DropdownMenuRadioItem
                                            v-for="action in actions"
                                            :key="action.id"
                                            :value="action.id"
                                            @click="updateSelectedAction(index, action)"
                                        >
                                            {{ action.title }}
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardDescription>
                    </CardHeader>

                    <!-- Content -->
                    <CardContent>
                        <div
                            v-if="selectedAction != null"
                            v-for="(component, i) in selectedAction.components"
                            :key="i"
                            class="mt-4"
                        >
                            <label v-if="component.label" class="block text-sm font-medium text-gray-700 mb-2">
                                {{ component.label }}
                            </label>
                            <div v-if="component.type === 'text'">
                                <input
                                    type="text"
                                    class="block w-full px-4 py-2 border rounded-md"
                                    v-model="component.value"
                                />
                            </div>
                            <div v-else-if="component.type === 'checkbox'">
                                <input
                                    type="checkbox"
                                    class="mr-2"
                                    v-model="component.value"
                                />
                                <span>{{ component.label }}</span>
                            </div>
                            <div v-else>
                                <p class="text-gray-500 italic">Unknown component type: {{ component.type }}</p>
                            </div>
                        </div>
                    </CardContent>

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

<script setup>
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const selectedTriggerIndex = ref(null);
const selectedTrigger = computed(() => (selectedTriggerIndex.value !== null ? triggers.value[selectedTriggerIndex.value] : null));

// Sample Data for Triggers and Actions
const triggers = ref([
    {
        id: 1,
        title: 'New Email',
        icon: '📧',
        description: 'When a new email from one person is received.',
        components: [
            { type: 'text', label: 'Recipient', value: 'example@example.com' },
            { type: 'checkbox', label: 'Mark as Read', value: false },
        ],
    },
    {
        id: 2,
        title: 'New Tweet',
        icon: '🐦',
        description: 'When a new tweet is posted.',
        components: [
            { type: 'text', label: 'Twitter Account', value: '@example' },
        ],
    },
]);

const selectedActionIndex = ref(null);
// const selectedAction = computed(() => (selectedActionIndex.value !== null ? actions.value[selectedActionIndex.value] : null));
const selectedActions = ref([]);

const actions = ref([
    {
        id: 1,
        title: 'New Email',
        icon: '📧',
        description: 'When a new email from one person is received.',
        components: [
            { type: 'text', label: 'Recipient', value: 'example@example.com' },
            { type: 'checkbox', label: 'Mark as Read', value: false },
        ],
    },
    {
        id: 2,
        title: 'New Tweet',
        icon: '🐦',
        description: 'When a new tweet is posted.',
        components: [
            { type: 'text', label: 'Twitter Account', value: '@example' },
        ],
    },
]);

const addNewAction = () => {
    selectedActions.value.push({
        id: null,
        title: null,
        components: [],
    });
};

const updateSelectedAction = (index, action) => {
    selectedActions.value[index] = {
        ...action,
        components: JSON.parse(JSON.stringify(action.components)),
    };
};

const removeAction = (index) => {
    selectedActions.value.splice(index, 1);
};

</script>
