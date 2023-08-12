<script setup lang="ts">
import InstagramLogo from '~icons/icon-park-solid/instagram';
import TelegramLogo from '~icons/basil/telegram-solid';
import TwitterLogo from '~icons/mdi/twitter';
import LinkedInLogo from '~icons/bx/bxl-linkedin';
import GithubLogo from '~icons/codicon/github-inverted';
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
    { url: '/', icon: InstagramLogo },
    { url: '/', icon: TelegramLogo },
    { url: '/', icon: TwitterLogo },
    { url: '/', icon: LinkedInLogo },
    { url: '/', icon: GithubLogo },
];
</script>

<template>
    <footer>
        <div class="grid grid-cols-2">
            <div class="grid grid-cols-2 items-center">
                <Logo class="w-36" />
                <div class="flex gap-6 text-3xl">
                    <NuxtLink
                        v-for="item in socialIcons"
                        :key="item.url"
                        :to="item.url"
                    >
                        <component :is="item.icon" />
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
