<script lang="ts">
	export let title: string = 'Quick Links';
	export let nav_links: NavLink[];
	import FootLink from './FootLink.svelte';
</script>

<div class="flex h-fit w-fit flex-col space-y-4 border-l-2 border-gray-800 px-4 py-2">
	<h1 class="text-sm text-gray-400">{title}</h1>
	{#each nav_links as link}
		<FootLink nav_link={link} />
	{/each}
</div>
