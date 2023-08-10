<script setup lang="ts">
import { ROUTE } from '@/types/router';

const { $trpc } = useNuxtApp();

const { data: events } = $trpc.event.findMany.useQuery();
</script>
<template>
    <div
        class="flex min-h-screen flex-col items-center justify-center bg-accent-navy-dark text-center text-2xl"
    >
        <div
            v-for="event in events"
            :key="event.id"
        >
            {{ event.title }}
        </div>
        <h1 class="mb-2 text-3xl font-extrabold">HOMEPAGE</h1>
        <nav>
            <ol>
                <li
                    v-for="route in ROUTE"
                    :key="route"
                >
                    <NuxtLink
                        :to="{ name: route }"
                        class="route-link"
                    >
                        {{ route }}
                    </NuxtLink>
                </li>
            </ol>
        </nav>
    </div>
</template>
<style scoped lang="postcss">
.route-link {
    transition: text-shadow 200ms;
    &:hover,
    &:focus {
        text-shadow: 2px 2px 3px var(--color-light);
    }
}
</style>
