<script setup lang="ts">
import '@/assets/colors.pcss';

useHead({
	link: [
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap',
			fetchpriority: 'high'
		}
	]
});
</script>
<template>
	<NuxtPage />
</template>
