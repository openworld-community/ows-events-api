// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/base.pcss'],
	postcss: {
		plugins: {
		tailwindcss: {},
		autoprefixer: {},
		},
	},
})