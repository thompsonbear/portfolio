<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	const { nav_links } = data;

	let scrollY: number;

	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</svelte:head>

<svelte:window bind:scrollY />

<div class="w-full flex flex-col items-center">
	<Header {nav_links} />
	<div class=" flex flex-col w-full px-12 relative">
		<div
			class="fixed top-12 -left-12 rounded-full bg-blue-300 w-[80vw] lg:w-[45vw] aspect-square -z-50 blur-3xl opacity-10"
		/>
		<div
			class="fixed bottom-12 -right-12 rounded-full bg-blue-100 w-[60vw] lg:w-[35vw] aspect-square -z-50 blur-3xl opacity-5"
		/>
		<slot />
	</div>
</div>
