// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/main.css'],
  	postcss: {
		plugins: {
		tailwindcss: {},
		autoprefixer: {},
		},
  	},
  })