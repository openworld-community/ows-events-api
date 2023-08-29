<script setup lang="ts">
import { ROUTE } from '@/types/router';
import LocationIcon from '~icons/fluent/location-28-filled'



const events = [
    { id: 2, location: 'Serbia, Novi Sad', title: 'Фестиваль', searchParams: '“Цветы”, “Танцы”', date: 20230824 },
    { id: 3, location: 'Serbia, Novi Sad', title: 'Фестиваль', searchParams: '“Цветы”, “Танцы”', date: 20230824 },
    { id: 1, location: 'Serbia, Novi Sad', title: 'Фестиваль', searchParams: '“Цветы”, “Танцы”', date: 20230824 },
    { id: 4, location: 'Serbia, Novi Sad', title: 'Фестиваль', searchParams: '“Цветы”, “Танцы”', date: 20230824 }
];

const counter = 100

definePageMeta({ name: ROUTE.PROFILE });
</script>
<template>
    <div class="w-full">
        <div class=" flex flex-col justify-center items-center">
            <div class="flex flex-row  space-x-2 mt-12">
                <div class="bg-white w-1/3 px-4 py-3 rounded-md min-w-max">
                    <span class="text-black">g9H3mDp7kF2qR5sAg9H3mDp79H3mDp7kF2qR5sAg9H3mDp7kF2qR5sA</span>
                </div>
                <Button class="btn rounded-full px-5 py-3" label="Показать токен" />
            </div>
            <div class="flex flex-col justify-start w-1/3 mt-6 ">
                <div>Оставшийся лимит: 250</div>
                <ProgressBar :value="counter" class="rounded-full"></ProgressBar>
            </div>
            <div class="w-full">
                <div class=" grid grid-cols-5 bg-accent-teal-main px-6 py-4 self-stretch">
                    <span class="flex flex-row">
                        <LocationIcon class=" w-6 h-6 text-accent-green-light"></LocationIcon>Локация
                    </span>
                    <span>Название</span>
                    <span>Параметры поиска</span>
                    <span>Дата</span>
                </div>
                <EventBlock :events="events"></EventBlock>
            </div>

        </div>
    </div>
</template>
<style lang="postcss">
.btn {
    transition: background-position-y 300ms;
    background: linear-gradient(180deg,
            theme('colors.accent.green.main'),
            theme('colors.accent.green.main'),
            theme('colors.accent.green.main'),
            theme('colors.accent.green.dark'));
    background-size: 100% 200%;
    background-position-y: 100%;

    &:hover,
    &:focus-within {
        background-position-y: 10%;
    }
}
</style>
