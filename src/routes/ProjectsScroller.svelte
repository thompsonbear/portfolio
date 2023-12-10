<script lang="ts">
	export let projects: Project[];
</script>

<div
	class="hide-scroll-bar absolute left-0 flex w-screen snap-x grid-cols-2 flex-nowrap gap-6 overflow-auto lg:relative lg:grid lg:w-full lg:snap-none lg:overflow-auto"
>
	{#each projects as project}
		<div class="space-y-4">
			<div
				class="flex w-[80vw] flex-shrink-0 snap-center flex-col gap-8 rounded-md border bg-blue-600 bg-opacity-10 p-4 backdrop-blur-xl first:ml-8 last:mr-8 lg:w-full lg:first:ml-0 lg:last:mr-0"
			>
				<div class="flex flex-col gap-4">
					<div class="flex items-center justify-between">
						<h2 class="text-2xl font-bold">{project.title}</h2>
						{#if project.href}
							<a
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								class="flex h-fit items-center gap-1 rounded-md bg-gray-200 px-3 py-1 text-black duration-300 hover:bg-white"
								>Visit
								<iconify-icon icon="mdi:open-in-new" />
							</a>
						{/if}
					</div>
					<p class=" min-h-[3rem] text-gray-400">{project.description}</p>
				</div>
				<img src={project.image_url} alt="Project Preview" class="rounded-md" />
			</div>
			<div class="flex flex-wrap gap-2">
				{#each project.tags as tag}
					<span
						class="rounded-md border border-gray-700 bg-gray-800 bg-opacity-30 px-2 py-1 text-sm text-gray-300 backdrop-blur-xl"
					>
						{tag}
					</span>
				{/each}
			</div>
		</div>
	{/each}
</div>
