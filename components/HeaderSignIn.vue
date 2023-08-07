<template>
    <div class="header-btn ml-auto flex items-center gap-4">
        <NuxtLink
            class="btn-login text-base text-white"
            to="/profile"
        >
            Войти
        </NuxtLink>
        <span class="text-base text-white">/</span>
        <NuxtLink
            to="/login"
            class="btn-register rounded-3xl bg-accent-green-dark px-6 py-2 text-base text-white hover:bg-accent-green-main"
        >
            Регистрация
        </NuxtLink>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn-login {
    position: relative;
}
.btn-login::after {
    content: none;
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #5c9ad2 0%, #48c78e 100%);
}
.btn-login:hover::after {
    content: '';
}
</style>
