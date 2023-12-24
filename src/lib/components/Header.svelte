<script lang="ts">
	export let nav_links: NavLink[] = [];
	export let social_links: NavLink[] = [];

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
		<nav class="hidden items-center space-x-4 lg:flex">
			<div class="flex gap-2">
				{#each nav_links as link}
					<a
						class="rounded-md px-3 py-2 font-semibold tracking-wide text-gray-400 duration-300 hover:bg-gray-800 hover:text-gray-100"
						href={link.href}>{link.text}</a
					>
				{/each}
			</div>

			<div class="flex gap-2">
				{#each social_links as link}
					<a
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center rounded-md p-1 font-semibold tracking-wide text-gray-400 duration-300 hover:text-gray-100"
						href={link.href}
					>
						<iconify-icon icon={link.icon} width="2rem" />
					</a>
				{/each}
			</div>
		</nav>
	</div>
</header>
