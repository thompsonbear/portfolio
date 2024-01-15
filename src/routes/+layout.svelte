<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	const { nav_links, social_links, contact_links } = data;

	import Header from '$lib/components/layout/header/Header.svelte';
	import Footer from '$lib/components/layout/footer/Footer.svelte';
	import NavMenu from '$lib/components/layout/NavMenu.svelte';

	let navOpen = false;
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</svelte:head>
<NavMenu bind:open={navOpen} {nav_links} {social_links} />
<div class="relative flex w-full flex-col items-center">
	<Header {nav_links} {social_links} bind:navOpen />
	<span
		class="fixed -left-12 top-12 -z-50 aspect-square w-[80vw] rounded-full bg-blue-300 opacity-10 blur-3xl lg:w-[45vw]"
	/>

	<div
		class="relative flex min-h-screen w-full max-w-[2000px] flex-col overflow-x-clip px-8 lg:px-20"
	>
		<slot />
	</div>
	<Footer {nav_links} {social_links} {contact_links} />
</div>
