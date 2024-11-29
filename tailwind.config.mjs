/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#1C84B6',
					50: '#e8f2f8',
          100: '#c9e0f2',
          200: '#a9cdf6',
          300: '#89bae0',
          400: '#698eb0',
          500: '#1c84b6',
          600: '#186ca0',
          700: '#14548a',
          800: '#0f3974',
          900: '#0a235e',
				},
			},
			fontFamily: {
				title: ['GFS Didot', 'serif'],
				body: ['GFS Neohellenic', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
