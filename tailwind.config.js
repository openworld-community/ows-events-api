/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue'
	],
	theme: {
		extend: {},
		colors: {
			text: {
				main: '#4E4E4E',
				secondary: '#ACACAC'
			},
			input: {
				field: '#DBDBDB',
				text: '#C3C3C3'
			},
			accent: {
				green: {
					main: '#48C78E',
					dark: '#21A86B',
					light: '#B6E9D2'
				},
				red: {
					main: '#EF5F5F',
					light: '#FBCFCF'
				},
				blue: { main: '#5C9AD2' },
				orange: { main: '#DB9758' },
				peach: { main: '#F2D8D8' },
				teal: { main: '#5C8984' },
				navy: {
					main: '#545B77',
					dark: '#374259'
				}
			},
			white: '#FFFFFF'
		}
	},
	plugins: []
};
