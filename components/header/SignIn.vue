<script setup lang="ts"></script>

<template>
    <div class="flex flex-nowrap items-center gap-4">
        <AppLink
            title="Войти"
            to="/profile"
        >
            Войти
        </AppLink>

        <span class="text-input-field">/</span>
        <NuxtLink
            to="/login"
            class="rounded-full bg-gradient-to-b from-accent-green-main to-accent-green-dark px-6 py-3 shadow-md hover:to-accent-green-main"
        >
            Регистрация
        </NuxtLink>
    </div>
</template>

<style scoped></style>
