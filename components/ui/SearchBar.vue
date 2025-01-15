<script setup lang="ts">
import { Input } from './input'
</script>

<template>
  <div class="flex bg-searchbar-background items-center gap-2.5 px-2.5 py-1.5 text-navbar-inactive searchbar md:w-[300px] lg:w-[400px] rounded-md">
    <i class="fa-solid fa-search text-searchbar-icon "></i>
    <Input
      placeholder="Search here..."
      class="w-full border-0 bg-transparent placeholder:text-navbar-inactive !ring-transparent !ring-offset-0"
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