<script setup lang="ts">
defineProps<{
    title: string;
    route: string;
}>();
</script>

<template>
    <NuxtLink
        class="footer-link relative after:absolute after:bottom-[-4px] after:left-0 after:h-1 after:w-full after:rounded-3xl after:bg-gradient-to-r after:from-accent-green-main after:to-accent-blue-main after:content-none hover:after:content-['']"
        :to="route"
    >
        {{ title }}
    </NuxtLink>
</template>

<style scoped></style>
