<script setup lang="ts">
import { Input } from './input'

const router = useRouter()
const workflowStore = useWorkflowStore();

onMounted(() => {
  workflowStore.fetchWorkflows();
});

// Ctrl + K to focus on searchbar
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      document.getElementById('searchbar')?.focus();
    }
});

// Searchbar logic
const searchWorkflows = ref<any[]>([]);

function filterResults() {
  searchWorkflows.value = [];

  const searchBar = document.getElementById('searchbar');
  const searchValue = searchBar?.value.toLowerCase();

  if (searchValue === '') {
    return;
  }

  const workflows = workflowStore.workflows;
  const filteredData = workflows.filter(item => item.name.toLowerCase().includes(searchValue)).slice(0, 5);

  filteredData.forEach(item => {
    searchWorkflows.value.push(item);
  });
}

function updateWorkflow(item: any) {
  router.push(`/workflows/${item.id}`);
}

function blur() {
  setTimeout(() => {
    searchWorkflows.value = [];
  }, 250);
}

</script>

<template>
    <div class="flex bg-searchbar-background items-center gap-2.5 px-2.5 py-1.5 text-navbar-inactive searchbar md:w-[300px] lg:w-[400px] rounded-md">
      <i class="fa-solid fa-search text-searchbar-icon "></i>
      <Input
        id="searchbar"
        placeholder="Search here..."
        class="w-full border-0 bg-transparent placeholder:text-navbar-inactive !ring-transparent !ring-offset-0"
        autocomplete="off"
        @input="filterResults"
        @focus="filterResults"
        @blur="blur"
      />
      <div class="flex searchbar-icon gap-1.5 h-full text-black">
        <div class="flex bg-white h-8 aspect-square items-center justify-center rounded-md font-bold leading-4 shadow-md">
          <span >⌘</span>
        </div>

        <div class="flex bg-white h-8 aspect-square items-center justify-center rounded-md font-medium shadow-md">
          <span>K</span>
      </div>
        </div>
      </div>
      <div class="absolute">
        <div id="results" class="border-t border-r border-l rounded-md overflow-hidden bg-white">
          <div class="border-b bg-white w-max md:w-[300px] lg:w-[400px]"  v-for="item in searchWorkflows">
            <button @click="updateWorkflow(item)" class="p-2 hover:scale-[1.03] transition-all place-items-start">
              <p class="pb-0">{{item.name}}</p>
              <p class="ps-1 text-xs text-gray-500">{{item.description}}</p>
            </button>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">


.searchbar:focus-within {
  .searchbar-icon {
    display: none;
  }
  color: black;
  @apply transition-all duration-150;
}
</style>