<template>
    <ul class="flex w-9/12 items-center justify-end gap-10">
        <li
            v-for="link in linksBottomNav"
            :key="link.title"
        >
            <NuxtLink
                :to="link.route"
                class="footer-link relative text-base text-white"
            >
                {{ link.title }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
const linksBottomNav = [
    {
        route: '/',
        title: 'Политика чего-нибудь',
    },
    {
        route: '/',
        title: 'Политика чего-нибудь',
    },
    {
        route: '/',
        title: 'Юридическая информация',
    },
];
</script>

<style scoped>
.footer-link::after {
    content: none;
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #5c9ad2 0%, #48c78e 100%);
}
.footer-link:hover::after {
    content: '';
}
</style>
