<template>
    <ul class="mt-8 flex w-full items-center justify-center gap-8">
        <NuxtLink
            v-for="link in links"
            :key="link.title"
            class="link relative pr-8 text-base text-white"
            :to="link.route"
        >
            {{ link.title }}
        </NuxtLink>
    </ul>
</template>

<script setup lang="ts">
const links = [
    { title: 'Пункт меню', route: '/' },
    { title: 'Пункт меню', route: '/' },
    { title: 'Пункт меню', route: '/' },
    { title: 'Пункт меню', route: '/' },
    { title: 'Пункт меню', route: '/' },
];
</script>

<style scoped>
.link::before {
    content: '/';
    width: 6px;
    height: 19px;
    position: absolute;
    right: 0;
}

.link:last-child::before {
    content: none;
}
.link::after {
    content: none;
    width: 74%;
    height: 4px;
    position: absolute;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #5c9ad2 0%, #48c78e 100%);
}
.link:hover::after {
    content: '';
}
.header-closed .nav .link::before {
    content: none;
}
.header-closed .nav .link {
    padding-right: 0;
}
.header-closed .nav .link::after {
    width: 100%;
}
</style>
