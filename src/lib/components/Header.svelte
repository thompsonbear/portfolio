<script lang="ts">
	export let nav_links: NavLink[] = [];
</script>

<header class="flex h-16 justify-between items-center">
	<a href="/" class="text-lg font-bold text-gray-600 tracking-wide hover:text-gray-400 duration-300"
		>Thompson Bear</a
	>
	<nav class="space-x-2 lg:flex hidden">
		{#each nav_links as link}
			<a
				class="py-2 px-3 text-gray-300 tracking-wide rounded-md hover:bg-gray-800 duration-300"
				href={link.href}>{link.text}</a
			>
		{/each}
	</nav>
</header>
