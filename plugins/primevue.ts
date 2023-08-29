
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import { usePassThrough } from "primevue/passthrough";
import Button from "primevue/button";
import ProgressBar from 'primevue/progressbar';

//Tailwind customization
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        button: {
            root: { class: '' },
            label: 'text-white font-bold text-xl', // OR { class: 'text-white font-bold text-xl' }
            icon: 'text-white text-2xl'
        },
       progressbar: {
        root: {
            class: ['overflow-hidden relative', 'border-0 h-6 bg-accent-navy-main rounded-full dark:bg-gray-800']
        },
        value: {
            class: ['bg-gradient-to-r from-accent-blue-main to-accent-green-main']
        },
        label: {
            class: ['text-transparent']
        }
       }
    } 
    
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {unstyled: true, pt: CustomTailwind});
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("ProgressBar", ProgressBar)
    //other components that you need
});

