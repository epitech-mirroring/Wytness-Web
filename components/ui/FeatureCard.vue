<template>
    <div class="p-6 rounded-xl shadow-lg bg-white flex flex-col items-center text-center">
		<div class="text-4xl mb-4" v-html="icon"></div>
    	<h3 class="text-xl font-semibold text-gray-800">{{ title }}</h3>
    	<p class="text-gray-600 mt-2">{{ description }}</p>
    </div>
</template>

<script setup>
	defineProps({
		title: String,
		description: String,
		icon: String,
	});
</script>
