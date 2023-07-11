<script setup lang="ts">
</script>

<template>
    <header class="header">
        <NuxtLink to="/"><h1>OWS-EVENTS</h1></NuxtLink>
        <div class="nav-link">Пункт меню</div>
        /
        <div class="nav-link">Пункт меню</div>
        /
        <div class="nav-link">Пункт меню</div>
        /
        <div class="nav-link">Пункт меню</div>
        <NuxtLink to="/profile">Войти/профайл</NuxtLink> <!--сделать что бы менялось -->
        <NuxtLink
            to="/login"
            class="login-button"
        >
            LOGIN
        </NuxtLink>
    </header>
</template>
<style scoped>
.header {
    background-color: #374259;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

.header h1 {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
}
.header .nav-link {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
}
.header .login-button {
    border-radius: 24px;
    background: var(--gradient-primary-vertical, linear-gradient(180deg, #48c78e 0%, #21a86b 100%));

    /* airbnb-box-shadow */
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
    display: flex;
    height: 44px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.header .login-button:hover {
    border-radius: 24px;
    background: var(--primary-green, #48c78e);

    /* airbnb-box-shadow */
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
}
</style>
