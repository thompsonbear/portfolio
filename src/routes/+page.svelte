<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { projects, contributions, contribution_total } = data;

	import ScaleGrid from '$lib/components/scalegrid/ScaleGrid.svelte';
	import ScaleGridItem from '$lib/components/scalegrid/ScaleGridItem.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CardScroller from '$lib/components/cardscroller/CardScroller.svelte';
	import CardScrollerItem from '$lib/components/cardscroller/CardScrollerItem.svelte';
	import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';

	let innerWidth: number = 0;
	let scrollY: number = 0;

	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	function getNumCols(): number {
		if (innerWidth > 1200) return 3;
		if (innerWidth > 640) return 2;
		return 1;
	}
</script>

<svelte:head>
	<title>Thompson Bear</title>
	<meta name="description" content="Thompson Bear's web development portfolio website" />
</svelte:head>

<svelte:window bind:innerWidth bind:scrollY />

<div class="fixed left-0 top-0 h-screen w-screen">
	<Canvas>
		<Scene {contributions} {contribution_total} />
	</Canvas>
</div>

<section
	id="home"
	class="pointer-events-none relative flex h-[calc(100vh-4rem)] flex-col justify-around"
>
	<div class="grid gap-4 lg:grid-cols-2">
		<div class="flex flex-col">
			<div>
				<div class="space-y-4">
					<span class="flex w-fit -translate-x-2 text-3xl xs:text-4xl sm:text-6xl">👋</span>
					<h1 class="whitespace-nowrap text-3xl font-bold xs:text-4xl sm:text-6xl">
						<span class="font-normal">Hi,</span> I'm Thompson
					</h1>
					<p class="text w-fit rounded-md text-gray-400 backdrop-blur-xl sm:text-lg xl:text-2xl">
						Developer, Designer, and Engineer
					</p>
				</div>

				<a
					href="#work"
					class="pointer-events-auto my-12 grid w-fit place-items-center rounded-md bg-blue-600 px-8 py-3 text-xl font-medium duration-300 hover:bg-blue-500"
					>See Work</a
				>
			</div>
		</div>
	</div>
	<ScrollIndicator visible={scrollY < 100} />
</section>

<section id="work" class="z-10 mb-40 min-h-screen">
	<h1 class=" pointer-events-auto mb-6 text-3xl font-semibold tracking-wide">Recent Work</h1>

	<div class="hidden w-full max-w-7xl sm:block">
		{#key innerWidth}
			<ScaleGrid cols={getNumCols()} item_min_height="24rem">
				{#each projects as project}
					<ScaleGridItem>
						<ProjectCard {project} />
					</ScaleGridItem>
				{/each}
			</ScaleGrid>
		{/key}
	</div>

	<div class="block h-80 w-full sm:hidden">
		<CardScroller>
			{#each projects as project}
				<CardScrollerItem>
					<div class="h-80 w-[calc(100vw-4rem)]">
						<ProjectCard {project} />
					</div>
				</CardScrollerItem>
			{/each}
		</CardScroller>
	</div>
</section>
