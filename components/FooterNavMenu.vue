<template>
    <div class="">
        <h3 class="mb-8 text-base text-white">{{ title }}</h3>
        <ul class="flex flex-col">
            <li
                v-for="link in footerLinks"
                :key="link.title"
                class="mb-4"
            >
                <NuxtLink
                    class="footer-link relative text-base text-white"
                    :to="link.route"
                >
                    {{ link.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: '',
    },
    footerLinks: {
        type: Array,
        default: () => [],
    },
});
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
