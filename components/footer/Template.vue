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
const projectLinks = [
    {
        route: '/',
        title: 'О проекте',
    },
    {
        route: '/',
        title: 'Поддержка',
    },

    {
        route: '/',
        title: 'Afisha',
    },

    {
        route: '/',
        title: 'Пункт меню',
    },
];
const footerLinks = [
    {
        route: '/',
        title: 'Пункт меню',
    },
    {
        route: '/',
        title: 'Пункт меню',
    },

    {
        route: '/',
        title: 'Пункт меню',
    },

    {
        route: '/',
        title: 'Пункт меню',
    },
];
const socialIcons = [
    { url: '/', icoName: 'instagram-icon' },
    { url: '/', icoName: 'twitter-icon' },
    { url: '/', icoName: 'telegram-icon' },
    { url: '/', icoName: 'linkedin-icon' },
    { url: '/', icoName: 'github-icon' },
];
</script>

<template>
    <footer>
        <div class="grid grid-cols-2">
            <div class="grid grid-cols-2 items-center">
                <Logo class="w-36" />
                <div class="flex gap-6">
                    <NuxtLink
                        v-for="item in socialIcons"
                        :key="item.url"
                        :to="item.url"
                    >
                        <img
                            class="w-8"
                            :src="`/icons/${item.icoName}.svg`"
                            alt=""
                        />
                    </NuxtLink>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <FooterNavLinks
                    title="Проект"
                    :link-list="projectLinks"
                />
                <FooterNavLinks
                    title="Сообщество"
                    :link-list="footerLinks"
                />
            </div>
        </div>
        <div class="grid grid-cols-4 pt-8">
            <ul class="col-span-2 col-start-2 flex justify-between">
                <li
                    v-for="link in linksBottomNav"
                    :key="link.title"
                >
                    <AppLink :to="link.route">
                        {{ link.title }}
                    </AppLink>
                </li>
            </ul>
            <div class="flex justify-end text-input-text">@ Afisha Peredelano</div>
        </div>
    </footer>
</template>

<style scoped></style>
