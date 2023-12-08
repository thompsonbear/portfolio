<script lang="ts">
	export let nav_links: NavLink[] = [];

	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<header
	class="flex justify-center h-16 sticky top-0 left-0 backdrop-blur-md w-full z-20 border-b {scrollY !=
		0 || 'border-opacity-0'} border-gray-800 duration-300 transition-all"
>
	<div class="flex justify-between items-center w-full px-12">
		<a
			href="/"
			class="font-semibold text-gray-100 tracking-wide hover:opacity-100 opacity-80 duration-300"
			>Thompson Bear</a
		>
		<nav class="space-x-2 lg:flex hidden">
			{#each nav_links as link}
				<a
					class="py-2 px-3 text-gray-300 font-semibold tracking-wide rounded-md hover:bg-gray-800 duration-300"
					href={link.href}>{link.text}</a
				>
			{/each}
		</nav>
	</div>
</header>
