<script setup lang="ts"></script>

<template>
    <NuxtLink
        class="relative after:absolute after:bottom-[-4px] after:left-0 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-r after:from-accent-green-main after:to-accent-blue-main after:content-none hover:after:content-['']"
    >
        <slot> Пункт меню </slot>
    </NuxtLink>
</template>

<style scoped></style>
