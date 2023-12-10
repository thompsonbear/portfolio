<script lang="ts">
	export let nav_links: NavLink[] = [];

	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<header
	class="sticky left-0 top-0 z-20 flex h-16 w-full justify-center border-b backdrop-blur-md {scrollY !=
		0 || 'border-opacity-0'} border-gray-800 transition-all duration-300"
>
	<div class="flex w-full items-center justify-between px-8 sm:px-12">
		<a
			href="/"
			class="font-semibold tracking-wide text-gray-100 opacity-80 duration-300 hover:opacity-100"
			>Thompson Bear</a
		>
		<nav class="hidden space-x-2 lg:flex">
			{#each nav_links as link}
				<a
					class="rounded-md px-3 py-2 font-semibold tracking-wide text-gray-300 duration-300 hover:bg-gray-800"
					href={link.href}>{link.text}</a
				>
			{/each}
		</nav>
	</div>
</header>
