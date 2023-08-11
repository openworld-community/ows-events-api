<script setup lang="ts">
defineProps<{
    title: string;
    to: string;
}>();
</script>

<template>
    <NuxtLink
        class="link relative block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-r after:from-accent-green-main after:to-accent-blue-main after:content-none hover:after:content-['']"
        :to="to"
    >
        <slot>
            {{ title }}
        </slot>
    </NuxtLink>
</template>

<style scoped></style>
