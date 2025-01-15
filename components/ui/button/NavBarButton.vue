<template>
  <div v-if="selected" class="relative flex gap-2.5 p-2.5 self-stretch items-center rounded-lg cursor-pointer bg-navbar-selected-background text-primary">
    <div class="h-8 w-0.5 bg-primary rounded-md absolute -left-1.5 top-0.5">

    </div>
    <i class="h-4 w-5 " :class="iconName"></i>

    <span class="navbar-pagelink-text ">
      {{ buttonName }}
    </span>

  </div>

  <div v-else class="flex gap-2.5 p-2.5 self-stretch items-center rounded-lg cursor-pointer hover:bg-navbar-hover-background hover:text-navbar-hover">
    <i class="h-4 w-5 " :class="iconName"></i>

    <span class="navbar-pagelink-text ">
      {{ buttonName }}
    </span>

  </div>
</template>

<script setup lang="ts">
  interface NavBarButtonProps {
    buttonName: String,
    iconName: String,
    selected: Boolean
  }

  const props = withDefaults(defineProps<NavBarButtonProps>(), {
    buttonName: 'Button',
    iconName: 'fa fa-home',
    selected: false
  })
</script>

<style scoped>

</style>
