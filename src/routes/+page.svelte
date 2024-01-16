<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	export let form;

	const { projects, contributions, contribution_total, contact_links, social_links } = data;

	let innerWidth: number = 0;
	let scrollY: number = 0;

	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	import Home from './Home.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
</script>

<svelte:head>
	<title>Thompson Bear</title>
	<meta name="description" content="Thompson Bear's web development portfolio" />
</svelte:head>

<svelte:window bind:innerWidth bind:scrollY />

<div class="fixed right-0 top-0 h-screen w-screen">
	<Canvas>
		<Scene {contributions} {contribution_total} />
	</Canvas>
</div>

<Home {scrollY} />
<div class="pointer-events-none z-10 flex flex-col gap-24">
	<Projects {projects} {innerWidth} />
	<Contact {form} {contact_links} {social_links} />
</div>
