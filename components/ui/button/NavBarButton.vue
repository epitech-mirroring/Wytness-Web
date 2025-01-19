<template>
  <div v-if="selected" tabindex="0" class="relative flex gap-2.5 p-2.5 self-stretch items-center rounded-lg cursor-pointer bg-navbar-selected-background text-[#574AE2]">
    <div class="h-8 w-0.5 bg-[#574AE2] rounded-md absolute -left-1.5 top-0.5">

    </div>
    <i class="h-4 w-5 " :class="iconName"></i>

    <span class="text-[#574AE2]">
      {{ buttonName }}
    </span>

  </div>

  <div v-else tabindex="0" class="flex text-gray-600 gap-2.5 p-2.5 self-stretch items-center rounded-lg cursor-pointer hover:bg-navbar-hover-background hover:text-navbar-hover">
    <i class="h-4 w-5 " :class="iconName"></i>

    <span class="text-gray-600">
      {{ buttonName }}
    </span>

  </div>
</template>

<script setup lang="ts">
  interface NavBarButtonProps {
    buttonName: string,
    iconName: string,
    selected: boolean
  }

  const props = withDefaults(defineProps<NavBarButtonProps>(), {
    buttonName: 'Button',
    iconName: 'fa fa-home',
    selected: false
  })
</script>

<style scoped>

</style>
