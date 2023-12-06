<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	const { nav_links } = data;

	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</svelte:head>

<div class="w-full flex flex-col items-center">
	<div class="max-w-[1200px] flex flex-col w-full px-12">
		<div class="absolute top-0 left-0 rounded-full bg-blue-300 w-[60vw]" />
		<Header {nav_links} />
		<slot />
	</div>
</div>
