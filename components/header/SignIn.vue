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
            class="register rounded-full px-6 py-3 shadow-md"
        >
            Регистрация
        </NuxtLink>
    </div>
</template>

<style scoped lang="postcss">
.register {
    transition: background-position-y 300ms;
    background: linear-gradient(
        180deg,
        theme('colors.accent.green.main'),
        theme('colors.accent.green.main'),
        theme('colors.accent.green.main'),
        theme('colors.accent.green.dark')
    );
    background-size: 100% 200%;
    background-position-y: 100%;

    &:hover,
    &:focus-within {
        background-position-y: 0%;
    }
}
</style>
