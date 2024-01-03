<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	const { nav_links, social_links, contact_links } = data;

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/layout/footer/Footer.svelte';
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</svelte:head>

<div class="relative flex w-full flex-col items-center">
	<Header {nav_links} {social_links} />
	<span
		class="fixed -left-12 top-12 -z-50 aspect-square w-[80vw] rounded-full bg-blue-300 opacity-10 blur-3xl lg:w-[45vw]"
	/>

	<div
		class="relative flex min-h-screen w-full max-w-[2000px] flex-col overflow-x-clip px-8 lg:px-12"
	>
		<slot />
	</div>
	<Footer {nav_links} {social_links} {contact_links} />
</div>
