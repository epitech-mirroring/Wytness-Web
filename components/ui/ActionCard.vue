<template>
    <div
      :class="[
        'p-4 rounded-lg shadow-md cursor-pointer',
        selected ? 'bg-blue-100 border-blue-600' : 'bg-gray-50 hover:bg-gray-100',
      ]"
      @click="$emit('select')"
    >
      <div class="text-3xl mb-2">{{ icon }}</div>
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="text-gray-600 text-sm">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps(['title', 'description', 'icon', 'selected']);
  </script>
  