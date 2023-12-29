<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	import ScaleGrid from '$lib/components/scalegrid/ScaleGrid.svelte';
	import ScaleGridItem from '$lib/components/scalegrid/ScaleGridItem.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const { nav_links } = data;

	import { quartInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import { scrollIntoView } from '$lib/utils/navigation';
	import CardScroller from '$lib/components/cardscroller/CardScroller.svelte';
	import CardScrollerItem from '$lib/components/cardscroller/CardScrollerItem.svelte';
	import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';

	let quick_links: NavLink[] = [];
	onMount(() => {
		quick_links = nav_links;
	});

	let projects: Project[] = [
		{
			title: 'Thompson Bear Portfolio',
			description: 'You are here!',
			tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Vercel'],
			href: 'https://thompsonbear.com',
			github: 'https://github.com/thompsonbear/portfolio'
		},
		{
			title: 'Auction Koi',
			description: 'A Japanese koi auction website for Select Koi in Sevierville, TN.',
			tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
			href: 'https://auctionkoi.com'
		},
		{
			title: 'Dainichi USA',
			description:
				'A Japanese koi auction website for one of the most prestigious koi farms in the world.',
			tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
			href: 'https://dainichiusa.com'
		}
	];

	let scrollY: number = 0;
	let innerWidth: number = 0;

	function getNumCols(): number {
		if (innerWidth > 1200) return 3;
		if (innerWidth > 640) return 2;
		return 1;
	}
</script>

<svelte:window bind:scrollY bind:innerWidth />

<section id="home" class="relative flex h-[calc(100vh-4rem)] flex-col justify-around">
	<div class="grid gap-4 lg:grid-cols-2">
		<div class="flex flex-col">
			<div>
				<div class="space-y-4">
					<span class="flex w-fit -translate-x-2 text-6xl">👋</span>
					<h1 class="whitespace-nowrap text-6xl font-bold">I'm Thompson</h1>
					<p class="text w-fit rounded-md text-gray-400 backdrop-blur-xl sm:text-base xl:text-2xl">
						Developer, Designer, and Engineer
					</p>
				</div>

				<a
					on:click|preventDefault={(e) => scrollIntoView(e)}
					href="#work"
					class="my-12 grid w-fit place-items-center rounded-md bg-blue-600 px-8 py-3 text-xl font-medium duration-300 hover:bg-blue-500"
					>See Work</a
				>
			</div>
		</div>
	</div>
	<ScrollIndicator visible={scrollY < 100} />
</section>

<section id="work">
	<h1 class="mb-6 text-3xl font-semibold tracking-wide">Recent Work</h1>

	<div class="hidden w-full max-w-6xl sm:block">
		{#key innerWidth}
			<ScaleGrid cols={getNumCols()} item_min_height="20rem">
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
