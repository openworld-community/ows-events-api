<script setup lang="ts">
import '@/assets/base.pcss';
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
