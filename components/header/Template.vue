<script setup lang="ts">
const isClosed = ref(false);
const scrollHandler = () => {
    isClosed.value = window.scrollY > 0;
};
const links = [
    { title: 'Пункт меню', route: '/' },
    { title: 'Пункт меню', route: '/' },
    { title: 'Пункт меню', route: '/' },
    { title: 'Пункт меню', route: '/' },
    { title: 'Страница пользователя', route: '/profile' },
];

onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
});
onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
});
</script>
<template>
    <header
        class="sticky top-0 grid items-center gap-6 bg-accent-navy-dark after:absolute after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-accent-green-main after:to-accent-blue-main"
        :class="[isClosed ? 'header-closed' : 'grid-flow-dense grid-cols-4']"
    >
        <NuxtLink
            to="/"
            class="justify-self-center"
            :class="[{ 'col-span-2 col-start-2': !isClosed }]"
        >
            <Logo class="h-9" />
        </NuxtLink>
        <ul
            class="flex gap-6"
            :class="[isClosed ? 'col-span-3' : 'nav-open col-span-4 justify-center']"
        >
            <li
                v-for="link in links"
                :key="link.title"
                class="navlink"
            >
                <AppLink :to="link.route">
                    {{ link.title }}
                </AppLink>
            </li>
        </ul>
        <HeaderSignIn
            class="justify-self-end"
            :class="[{ 'col-start-4': !isClosed }]"
        />
    </header>
</template>

<style scoped>
.nav-open .navlink:not(:last-child)::after {
    content: '/';
    margin-left: theme('margin.8');
    margin-right: theme('margin.2');
}
.header-closed {
    grid-template-columns: auto repeat(4, 1fr);
}
</style>
