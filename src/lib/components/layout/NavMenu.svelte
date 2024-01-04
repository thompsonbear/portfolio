<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	export let open: boolean = false;
	export let nav_links: NavLink[] = [];
	export let social_links: NavLink[] = [];
</script>

{#if open}
	<menu
		transition:fade={{ duration: 300 }}
		class="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col space-y-4 bg-gray-900 px-8 opacity-95 backdrop-blur-md"
	>
		<div class="mt-1 flex h-16 items-center justify-end">
			<button on:click={() => (open = false)}>
				<iconify-icon icon="mdi:menu-close" width="2.5rem" />
			</button>
		</div>
		{#each nav_links as link, i}
			<a
				in:fly|global={{ duration: 300, x: 20, delay: i * 50 }}
				on:click={() => (open = false)}
				class="flex items-center gap-4 rounded-lg p-2 text-4xl font-bold"
				href={link.href}
			>
				<iconify-icon icon={link.icon} width="2rem" />
				<span>{link.text}</span>
			</a>
		{/each}
		{#each social_links as link, i}
			<a
				in:fly|global={{ duration: 300, x: 20, delay: i + nav_links.length * 50 }}
				class="flex items-center gap-4 rounded-lg p-2 text-4xl font-bold"
				target="_blank"
				rel="noreferrer"
				href={link.href}
			>
				<iconify-icon icon={link.icon} width="2rem" />
				<span>{link.text}</span>
			</a>
		{/each}
	</menu>
{/if}
