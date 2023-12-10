<script lang="ts">
	export let projects: Project[];
</script>

<div
	class="hide-scroll-bar absolute left-0 flex w-screen snap-x flex-nowrap gap-4 overflow-scroll md:grid-cols-2 lg:relative lg:grid lg:w-full lg:snap-none lg:overflow-auto"
>
	{#each projects as project}
		<div class="w-full snap-center first:ml-8 last:mr-8 lg:first:ml-0 lg:last:mr-0">
			<a
				class="flex h-96 w-[65vw] flex-col justify-between gap-4 rounded-md border border-gray-700 bg-blue-600 bg-opacity-20 p-4 backdrop-blur-xl duration-300 lg:w-full"
				href={project.href}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<h2 class="text-xl font-bold">{project.title}</h2>
					<p class="text-gray-400">{project.description}</p>
				</div>

				<div class="bottom-4 left-4 flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span class="rounded-md border border-gray-700 px-2 py-1 text-sm text-gray-300">
							{tag}
						</span>
					{/each}
				</div>
			</a>
		</div>
	{/each}
</div>
