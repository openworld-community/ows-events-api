<script setup lang="ts">
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
            fetchpriority: 'high',
        },
        { rel: 'icon', href: 'favicon.ico' },
    ],
});
</script>
<template>
    <div class="bg-accent-navy-dark font-sans text-base text-white">
        <HeaderTemplate class="p-2 lg:px-12 lg:py-10" />
        <NuxtPage class="px-2 lg:px-12" />
        <FooterTemplate class="p-2 lg:px-12 lg:pb-10" />
    </div>
</template>
<style></style>
