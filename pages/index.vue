<script setup lang="ts">
import { ROUTE } from '@/types/router';

const { $trpc } = useNuxtApp();

const filters = {
    after: new Date('08.01.2023').getTime(),
    before: new Date('08.30.2023').getTime(),
    title: 'a',
};

const { data: events } = await $trpc.event.findMany.useQuery({ filters });
</script>
<template>
    <div
        class="flex min-h-screen flex-col items-center justify-center bg-accent-navy-dark text-center text-2xl"
    >
        <div class="flex flex-col gap-6 text-white">
            <div
                v-for="event in events"
                :key="event.id"
                class="relative text-3xl after:absolute after:-bottom-3 after:left-0 after:h-2 after:w-full after:bg-gradient-to-r after:from-accent-green-main after:to-accent-blue-main"
            >
                <div>
                    {{ event.title }}
                </div>
                <div>
                    {{ new Date(event.date).toLocaleString() }}
                </div>
                <div>{{ ((event.durationInSeconds ?? 0) / (60 * 60 * 24)).toFixed(0) }} days</div>
                <div class="flex justify-center p-2">
                    <div
                        v-for="tag in event.tags"
                        :key="tag"
                        class="bg-accent-navy-dark after:bg-gradient-to-r after:from-accent-green-main after:to-accent-blue-main after:bg-clip-text after:font-extrabold after:text-[transparent] after:content-['~'] last:after:content-none"
                    >
                        {{ tag }}
                    </div>
                    <div
                        v-if="!event.tags.length"
                        class="text-accent-red-main"
                    >
                        no tags
                    </div>
                </div>
            </div>
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
