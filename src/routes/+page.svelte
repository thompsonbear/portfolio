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
</script>

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
	<div class="flex justify-center items-center h-[calc(20vh-2rem)]">
		<a
			on:click|preventDefault={(e) => scrollIntoView(e)}
			href="#work"
			class="flex justify-center group w-fit hover:scale-110 transition-all duration-300"
		>
			<iconify-icon
				class="animate-bounce pointer-events-none text-gray-300 group-hover:text-blue-400 text-4xl pt-4 px-4 pb-2"
				icon="bi:arrow-down-circle-fill"
			/>
		</a>
	</div>
</section>

<section
	id="work"
	class="border-gray-900 h-screen grid place-items-center font-bold rounded-xl border-2"
>
	Work
</section>
