<script setup lang="ts">
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap',
            fetchpriority: 'high'
        }
    ]
});
</script>
<template>
    <div class="w-full bg-accent-navy-dark">
        <Header />
        <div class="sm:px-6 md:px-8 lg:px-10 xl:px-16">
            <NuxtPage />
        </div>
        <Footer />
    </div>
</template>
<style></style>
