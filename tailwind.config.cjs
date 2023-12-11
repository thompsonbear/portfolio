/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				'xs': '320px',
			}
		}
	},

	plugins: []
};

module.exports = config;
