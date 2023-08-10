<script setup lang="ts">
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Raleway:wght@400;500;600;700&display=swap',
            fetchpriority: 'high'
        }
    ]
});
</script>
<template>
    <div class="bg-accent-navy-dark font-sans text-base text-white">
        <HeaderTemplate
            class="bg-accent-navy-dark p-2 before:absolute before:bottom-0 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-accent-green-main before:to-accent-blue-main lg:px-12 lg:py-10"
        />
        <NuxtPage class="px-2 lg:px-12" />
        <FooterTemplate class="p-2 lg:px-12 lg:pb-10" />
    </div>
</template>
<style></style>
