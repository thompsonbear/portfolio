<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	const { nav_links } = data;

	let scrollY: number;

	import Header from '$lib/components/Header.svelte';

	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	let body: HTMLElement;
	let bodyHeight: number;

	function setBodyHeight() {
		setTimeout(() => {
			bodyHeight = body.scrollHeight;
		}, 1000);
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

<div class="fixed -z-50 h-screen w-screen">
	<Canvas>
		<Scene {scrollY} scrollYMax={bodyHeight / 2} />
	</Canvas>
</div>

<div class="flex w-full flex-col items-center">
	<Header {nav_links} />
	<div
		class="fixed -left-12 top-12 -z-50 aspect-square w-[80vw] rounded-full bg-blue-300 opacity-10 blur-3xl lg:w-[45vw]"
	/>
	<div
		class="fixed -right-12 bottom-12 -z-50 aspect-square w-[60vw] rounded-full bg-blue-100 opacity-5 blur-3xl lg:w-[35vw]"
	/>
	<div class=" relative flex w-full max-w-[2000px] flex-col px-8 lg:px-12">
		<slot />
	</div>
</div>
