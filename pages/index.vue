<script setup lang="ts">
import { Route } from '@/types/router';

const routes = Object.keys(Route);
</script>
<template>
	<div class="flex flex-col items-center justify-center min-h-screen text-center text-2xl">
		<h1 class="font-extrabold text-3xl mb-2">HOMEPAGE</h1>
		<nav>
			<ol>
				<li v-for="route in routes">
					<NuxtLink
						:to="{ name: route }"
						class="route-link"
						>{{ route }}</NuxtLink
					>
				</li>
			</ol>
		</nav>
	</div>
</template>
<style scoped lang="postcss">
.route-link {
	transition: text-shadow 200ms;
	&:hover,
	&:focus {
		text-shadow: 2px 2px 3px var(--color-light);
	}
}
</style>
