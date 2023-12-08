<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { nav_links } = data;

	import { quartInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import { scrollIntoView } from '$lib/utils/navigation';

	let quick_links: NavLink[] = [];
	onMount(() => {
		quick_links = nav_links;
	});

	interface Project {
		title: string;
		description: string;
		tags: string[];
		href: string;
	}

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

<section id="home" class="flex flex-col">
	<div class="grid lg:grid-cols-2 gap-4 h-[calc(80vh-2rem)]">
		<div class="flex flex-col justify-around">
			<div>
				<h1 class="text-2xl lg:text-5xl">Hey,</h1>

				<div>
					<h1 class="text-[9vw] lg:text-[4vw] font-bold whitespace-nowrap">I'm Thompson</h1>
					<p class="font-light text-gray-400 xl:text-2xl sm:text-base text-sm">
						Cloud/Systems Engineer and Developer
					</p>
				</div>

				<a
					on:click|preventDefault={(e) => scrollIntoView(e)}
					href="#work"
					class="bg-blue-600 py-3 px-8 sm:w-fit w-full text-xl font-medium rounded-md grid place-items-center my-12 hover:bg-blue-500 duration-300"
					>See Work</a
				>
			</div>

			<div class="space-y-4">
				<h2 class="text-lg text-gray-300">Skipping Around?</h2>
				<div class="flex flex-wrap gap-3">
					{#each quick_links as link, i}
						<a
							in:fly|global={{ x: 100, duration: 600, delay: i * 50, easing: quartInOut }}
							class="font-bold flex gap-2 px-3 py-2 h-fit justify-between items-center text-gray-300 tracking-wide rounded-md border border-gray-700 hover:bg-gray-700 hover:text-gray-200 duration-300"
							href={link.href}><iconify-icon icon={link.icon} />{link.text}</a
						>
					{/each}
				</div>
			</div>
		</div>
		<div class="lg:grid place-items-center border-2 border-gray-900 hidden font-bold rounded-xl">
			Hero Image
		</div>
	</div>
	<div
		class="flex justify-center items-center overflow-clip h-[calc(20vh-2rem)] {scrollY == 0 ||
			'opacity-0'} duration-1000"
	>
		<a
			on:click|preventDefault={(e) => scrollIntoView(e)}
			href="#work"
			class="flex items-center text-gray-400 flex-col gap-2 group"
		>
			<span class="group-hover:text-blue-500 duration-300 pointer-events-none">Scroll</span>
			<div
				class="h-14 w-6 border border-gray-700 rounded-full flex justify-center relative overflow-clip pointer-events-none"
			>
				<span
					class="h-14 pointer-events-none scroll w-6 bg-gray-500 group-hover:bg-blue-500 duration-300 absolute bottom-0 lg:top-0 lg:rounded-b-full left-0 rounded-t-full"
				/>
			</div>
		</a>
	</div>
</section>

<section id="work">
	<div class="h-screen pt-8">
		<div class="py-12 flex gap-2 sm:flex-row flex-col justify-between sm:items-center">
			<h1 class="text-2xl font-bold">Recent Projects</h1>
			<a
				href="/projects"
				class="flex gap-2 items-center text-gray-400 hover:text-gray-300 duration-300"
			>
				All Projects
				<iconify-icon icon="mdi:chevron-double-right" height="1.5rem" />
			</a>
		</div>
		<div
			class="flex flex-nowrap lg:grid gap-4 md:grid-cols-2 w-full overflow-scroll snap-x lg:snap-none lg:overflow-auto hide-scroll-bar"
		>
			{#each projects as project}
				<div class="w-full snap-center">
					<a
						class="flex flex-col gap-4 border justify-between border-gray-700 rounded-md p-4 duration-300 lg:w-full w-[65vw] h-96"
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>
							<h2 class="text-xl font-bold">{project.title}</h2>
							<p class="text-gray-400">{project.description}</p>
						</div>

						<div class="flex flex-wrap gap-2 left-4 bottom-4">
							{#each project.tags as tag}
								<span class="border border-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm">
									{tag}
								</span>
							{/each}
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
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
