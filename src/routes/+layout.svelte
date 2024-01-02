<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	const { nav_links, social_links, contact_links, contributions } = data;

	let scrollY: number;

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/layout/footer/Footer.svelte';

	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	let body: HTMLElement;
	let bodyHeight: number;

	function setBodyHeight() {
		bodyHeight = body.scrollHeight;
	}

	function setBody(node: HTMLElement) {
		body = node;
		setBodyHeight();
	}
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</svelte:head>

<svelte:body use:setBody />
<svelte:window bind:scrollY on:resize={setBodyHeight} />

<div class="relative flex w-full flex-col items-center">
	<Header {nav_links} {social_links} />
	<div
		class="fixed -left-12 top-12 -z-50 aspect-square w-[80vw] rounded-full bg-blue-300 opacity-10 blur-3xl lg:w-[45vw]"
	/>

	<div
		class="relative flex min-h-screen w-full max-w-[2000px] flex-col overflow-x-clip px-8 lg:px-12"
	>
		<div class="fixed left-0 top-0 h-screen w-screen">
			<Canvas>
				<Scene {scrollY} {contributions} />
			</Canvas>
		</div>

		<slot />
	</div>
	<Footer {nav_links} {social_links} {contact_links} />
</div>
