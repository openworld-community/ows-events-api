<script setup lang="ts"></script>

<template>
    <div class="flex items-center gap-4">
        <AppLink
            title="Войти"
            route="/profile"
        />

        <span class="text-input-field">/</span>
        <NuxtLink
            to="/login"
            class="rounded-3xl bg-gradient-to-r from-accent-green-dark to-accent-green-main px-6 py-3 shadow-md hover:bg-accent-green-light"
        >
            Регистрация
        </NuxtLink>
    </div>
</template>

<style scoped></style>
