<script setup lang="ts">
defineProps<{
    events: {
    id: number;
    location: string;
    title: string;
    searchParams: string;
    date: Date;
    }
}>();

import LocationIcon from '~icons/fluent/location-28-filled'
import DownloadIcon from '~icons/solar/download-linear'
</script>

<template>
    <div v-for="event in events" :key="event.id" :events="events" class="w-full pt-4" >
        <div class="grid grid-cols-5 bg-accent-navy-main items-center place-content-between px-6 py-4 rounded-md">
            <div class="flex flex-row"><LocationIcon class=" w-6 h-6 text-accent-green-light"></LocationIcon>{{ event.location }}</div>
            <div>{{ event.title }}</div>
            <div>{{ event.searchParams }}</div>
            <time datetime="2023.08.24T12:00">{{ event.date }}</time>
            <Button class="px-6 py-3 btn rounded-r-3xl rounded-l-3xl"><DownloadIcon></DownloadIcon></Button>
        </div>
    </div>
</template>



<style lang="postcss" scoped></style>