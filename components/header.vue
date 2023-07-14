<script setup lang="ts">
const isClosed = ref(true);
onMounted(() => {
    window.addEventListener('scroll', () => {
        isClosed.value = window.scrollY > 0;
    });
});
</script>

<template>
    <header :class="{ 'header-open': !isClosed, 'header-closed': isClosed }">
        <NuxtLink to="/">
            <img
                src=""
                alt="logo"
            />
        </NuxtLink>

        <div class="nav-link">Пункт меню</div>
        /
        <div class="nav-link">Пункт меню</div>
        /
        <div class="nav-link">Пункт меню</div>
        /
        <div class="nav-link">Пункт меню</div>

        <NuxtLink
            class=""
            to="/profile"
        >
            Войти
        </NuxtLink>
        /
        <NuxtLink
            to="/login"
            class="login-button"
        >
            LOGIN
        </NuxtLink>
    </header>
</template>

<style scoped>
header {
    transition: height 0.3s ease;
    height: 165px;
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

.header-closed {
    height: 115px;
}

header h1 {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
}

header .nav-link {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
}
header .login-button {
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

header .login-button:hover {
    border-radius: 24px;
    background: var(--primary-green, #48c78e);

    /* airbnb-box-shadow */
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
}
</style>
