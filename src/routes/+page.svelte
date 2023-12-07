<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { nav_links } = data;

	import { quartInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let quick_links: NavLink[] = [];
	onMount(() => {
		quick_links = nav_links;
	});
</script>

<section class="grid lg:grid-cols-2 gap-4 h-[80vh]">
	<div class="flex flex-col justify-around">
		<div class="w-fit space-y-2">
			<h1 class="text-2xl lg:text-5xl">Hey,</h1>
			<h1 class="text-[9vw] lg:text-[4vw] font-bold whitespace-nowrap">I'm Thompson</h1>
			<p class="font-light text-gray-400">Cloud/Systems Engineer and Developer</p>
		</div>

		<div class="space-y-4">
			<h2 class="text-lg text-gray-300">Skipping Around?</h2>
			<div class="flex flex-wrap gap-3">
				{#each quick_links as link, i}
					<a
						in:fly|global={{ x: 100, duration: 600, delay: i * 50, easing: quartInOut }}
						class="font-bold flex gap-2 px-2 py-1 h-fit justify-between items-center text-gray-400 tracking-wide rounded-md border-2 border-gray-800 hover:bg-gray-800 duration-300"
						href={link.href}><iconify-icon icon={link.icon} />{link.text}</a
					>
				{/each}
			</div>
		</div>
	</div>
	<div class="lg:grid place-items-center bg-gray-900 hidden font-bold rounded-xl">Hero Image</div>
</section>
