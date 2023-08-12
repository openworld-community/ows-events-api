<template>
    <div class="text-end">
        <h3 class="mb-8 text-base font-bold text-input-text">{{ title }}</h3>
        <ul class="flex flex-col gap-4">
            <li
                v-for="link in linkList"
                :key="link.title"
            >
                <AppLink :to="link.route">
                    {{ link.title }}
                </AppLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    linkList: { title: string; route: string }[];
}>();
</script>

<style scoped></style>
