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
        <div class="grid grid-cols-4 items-center">
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
            <div class="flex flex-col items-end text-right">
                <h3 class="mb-8 font-bold text-input-text">Проект</h3>
                <ul class="flex flex-col gap-4">
                    <li
                        v-for="link in projectLinks"
                        :key="link.title"
                    >
                        <AppLink
                            :title="link.title"
                            :to="link.route"
                        />
                    </li>
                </ul>
            </div>
            <div class="flex flex-col items-end">
                <h3 class="mb-8 font-bold text-input-text">Сообщество</h3>
                <ul class="flex flex-col gap-4">
                    <li
                        v-for="link in footerLinks"
                        :key="link.title"
                    >
                        <AppLink
                            :title="link.title"
                            :to="link.route"
                        />
                    </li>
                </ul>
            </div>
        </div>
        <div class="grid grid-cols-[3fr,1fr] items-center pt-8">
            <ul class="flex items-center justify-end gap-14">
                <li
                    v-for="link in linksBottomNav"
                    :key="link.title"
                >
                    <AppLink
                        :title="link.title"
                        :to="link.route"
                    />
                </li>
            </ul>
            <div class="flex justify-end text-input-text">@ Afisha Peredelano</div>
        </div>
    </footer>
</template>

<style scoped></style>
