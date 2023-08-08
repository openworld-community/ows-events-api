<template>
    <div class="footer__item flex w-full justify-end gap-60">
        <FooterNavProject
            title="Проект "
            :project-links="projectLinks"
        />
        <FooterNavMenu
            title="Сообщество"
            :footer-links="footerLinks"
        />
    </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
