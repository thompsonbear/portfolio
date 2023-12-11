<script lang="ts">
	export let nav_links: NavLink[] = [];
	export let social_links: NavLink[] = [];
</script>

<footer class="flex w-screen items-center justify-center bg-gray-900 py-8">
	<div class="xs:grid-flow-col grid w-full max-w-[2000px] gap-8 px-8 lg:px-12">
		<div class="flex flex-col space-y-4 rounded-md border-l pl-4">
			<h1 class="text-sm text-gray-400">Navigation</h1>
			{#each nav_links as link}
				<a
					class="flex items-center gap-2 font-semibold tracking-wide text-gray-300 duration-300 hover:text-gray-100"
					href={link.href}
				>
					<iconify-icon icon={link.icon} />
					{link.text}</a
				>
			{/each}
		</div>
		<div class="flex h-fit flex-col space-y-4 rounded-md border-l pl-4">
			<h1 class="text-sm text-gray-400">Find me on</h1>
			{#each social_links as link}
				<a
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 font-semibold tracking-wide text-gray-300 duration-300 hover:text-gray-100"
					href={link.href}
				>
					<iconify-icon icon={link.icon} />
					{link.text}</a
				>
			{/each}
		</div>
	</div>
</footer>
