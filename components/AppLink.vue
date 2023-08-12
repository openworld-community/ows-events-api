<script setup lang="ts">
import type { NuxtLinkProps } from 'nuxt/app';

const props = withDefaults(defineProps<NuxtLinkProps>(), {
    prefetch: undefined,
    noPrefetch: undefined,
});
</script>

<template>
    <NuxtLink
        class="relative after:absolute after:-bottom-1/4 after:left-0 after:h-1 after:w-full after:origin-right after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-accent-green-main after:to-accent-blue-main after:transition-transform focused:after:origin-left focused:after:scale-x-100"
        v-bind="props"
    >
        <slot />
    </NuxtLink>
</template>

<style scoped></style>
