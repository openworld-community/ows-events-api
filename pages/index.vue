<script setup lang="ts">
import { Route } from '@/types/router';

const routes = Object.keys(Route);
</script>
<template>
	<div class="root">
		<h1>HOMEPAGE</h1>
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
.root {
	min-height: 100dvh;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
}
h1 {
	font-size: 1.7rem;
	font-weight: 800;
	margin-bottom: 0.5rem;
}
.route-link {
	transition: text-shadow 200ms;
	&:hover,
	&:focus {
		text-shadow: 2px 2px 3px var(--color-light);
	}
}
</style>
