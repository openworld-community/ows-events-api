<script setup lang="ts"></script>

<template>
    <div class="flex items-center gap-4">
        <AppLink
            title="Войти"
            to="/profile"
        />

        <span class="text-input-field">/</span>
        <NuxtLink
            to="/login"
            class="btn-login rounded-full bg-gradient-to-l from-accent-green-dark to-accent-green-main px-6 py-3 shadow-md"
        >
            Регистрация
        </NuxtLink>
    </div>
</template>

<style scoped>
.btn-login:hover {
    background: #48c78e;
}
</style>
