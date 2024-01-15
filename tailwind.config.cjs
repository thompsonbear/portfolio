/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				xs: '320px'
			}
		}
	},
	safelist: ['bg-gray-900', 'peer-focus:bg-gray-900'],

	plugins: []
};

module.exports = config;
