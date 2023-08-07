<template>
    <header
        class="header bg-accent-navy-dark sm:px-6 sm:py-6 md:px-8 md:py-6 lg:px-10 lg:py-8 xl:px-16 xl:py-10"
        :class="{ 'header-open': !isClosed, 'header-closed': isClosed }"
    >
        <div class="relative flex items-center">
            <NuxtLink
                to="/"
                class="logo absolute flex w-full justify-center"
            >
                <Logo />
            </NuxtLink>
            <HeaderSignIn />
        </div>

        <Navbar class="nav" />
    </header>
</template>

<script setup lang="ts">
const isClosed = ref(true);
const scrollHandler = () => {
    isClosed.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
});
</script>

<style scoped>
.header {
    transition: all 0.3s ease;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

.header-closed .logo {
    bottom: -65px;
    left: 0;
    width: 87px;
    transition: all 0.3s ease;
}
.header-closed .nav {
    justify-content: flex-start;
    padding-left: 120px;
}
.header-closed .nav .link::before {
    content: none;
}
.header-closed .nav .link {
    padding-left: 0;
}
.header-closed .header-btn {
    bottom: -64px;
    right: 0;
    position: absolute;
    transition: all 0.3s ease;
}

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
