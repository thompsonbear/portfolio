<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	import ProjectsScroller from './ProjectsScroller.svelte';

	const { nav_links } = data;

	import { quartInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import { scrollIntoView } from '$lib/utils/navigation';

	let quick_links: NavLink[] = [];
	onMount(() => {
		quick_links = nav_links;
	});

	let projects: Project[] = [
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
</script>

<svelte:window bind:scrollY />

<section id="home" class="relative flex h-[calc(100vh-4rem)] flex-col">
	<div class="grid h-[calc(80vh-2rem)] gap-4 lg:grid-cols-2">
		<div class="flex flex-col justify-around">
			<div>
				<h1 class="text-2xl lg:text-5xl">Hey,</h1>

				<div>
					<h1 class="whitespace-nowrap text-[9.5vw] font-bold lg:text-[4vw]">I'm Thompson</h1>
					<p
						class="text w-fit rounded-md border border-gray-600 bg-gray-600 bg-opacity-30 px-1.5 py-0.5 text-gray-400 backdrop-blur-xl sm:text-base xl:text-2xl"
					>
						Cloud/Systems Engineer and Developer
					</p>
				</div>

				<a
					on:click|preventDefault={(e) => scrollIntoView(e)}
					href="#work"
					class="my-12 grid w-full place-items-center rounded-md bg-blue-600 px-8 py-3 text-xl font-medium duration-300 hover:bg-blue-500 sm:w-fit"
					>See Work</a
				>
			</div>

			<div class="space-y-4">
				<h2 class="text-lg text-gray-300">Skipping Around?</h2>
				<div class="flex flex-wrap gap-3">
					{#each quick_links as link, i}
						<a
							in:fly|global={{ x: 100, duration: 600, delay: i * 50, easing: quartInOut }}
							class="flex h-fit items-center justify-between gap-2 rounded-md border border-gray-700 px-3 py-2 font-bold tracking-wide text-gray-300 backdrop-blur-xl duration-300 hover:bg-gray-700 hover:text-gray-200"
							href={link.href}><iconify-icon icon={link.icon} />{link.text}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div
		class="fixed bottom-20 left-0 z-20 flex w-full items-center justify-center {scrollY <= 100 ||
			'opacity-0'} duration-1000"
	>
		<a
			on:click|preventDefault={(e) => scrollIntoView(e)}
			href="#work"
			class="group flex flex-col items-center gap-2 text-gray-400"
		>
			<span class="pointer-events-none duration-300 group-hover:text-blue-500">Scroll</span>
			<div
				class="pointer-events-none relative flex h-14 w-6 justify-center overflow-clip rounded-full border border-gray-700"
			>
				<span
					class="scroll pointer-events-none absolute bottom-0 left-0 h-14 w-6 rounded-t-full bg-gray-500 duration-300 group-hover:bg-blue-500 lg:top-0 lg:rounded-b-full"
				/>
			</div>
		</a>
	</div>
</section>

<section id="work" class="h-screen pt-16">
	<div class="flex flex-col justify-between gap-2 py-12 sm:flex-row sm:items-center">
		<h1 class="text-2xl font-bold">Recent Projects</h1>
		<a
			href="/projects"
			class="flex items-center gap-2 text-gray-400 duration-300 hover:text-gray-300"
		>
			All Projects
			<iconify-icon icon="mdi:chevron-double-right" height="1.5rem" />
		</a>
	</div>
	<ProjectsScroller {projects} />
</section>

<style>
	.scroll {
		animation: scroll 3s infinite;
	}

	@keyframes scroll {
		0% {
			height: 0;
		}
		50% {
			opacity: 1;
			height: 100%;
		}
		100% {
			opacity: 0;
			height: 100%;
		}
	}
</style>
