<script lang="ts">
	export let project: Project;

	import { fly, fade } from 'svelte/transition';

	let overlay_visible: boolean = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="h-full w-full rounded-lg border border-gray-700 bg-gray-800 bg-opacity-40 backdrop-blur-md"
	on:mouseenter={() => (overlay_visible = true)}
	on:mouseleave={() => (overlay_visible = false)}
>
	<img src={project.image_url} alt="Project Video" class="h-full w-full object-cover opacity-50" />
	{#if overlay_visible}
		<div
			in:fade={{ duration: 300 }}
			class="absolute left-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-lg bg-gray-900 bg-opacity-30 p-4"
		>
			<header class="flex justify-between space-x-4">
				<div>
					<h1 class="font-semibold">{project.title}</h1>
					<p class="font-thin">{project.description}</p>
				</div>
				<div class="flex h-8 gap-2">
					{#if project?.github}
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="flex aspect-square h-full items-center justify-center rounded-full border-gray-700 bg-gray-800 text-gray-300 duration-300 hover:bg-gray-700 hover:text-gray-200"
							href={project.github}
						>
							<iconify-icon icon="mdi:github" width="1.5rem" />
						</a>
					{/if}
					{#if project?.href}
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-full items-center justify-center gap-1 rounded-full border-blue-800 bg-blue-600 px-4 text-gray-300 duration-300 hover:bg-blue-500 hover:text-gray-200"
							href={project.href}
							>Visit
							<iconify-icon icon="mdi:open-in-new" />
						</a>
					{/if}
				</div>
			</header>
			<footer>
				<div class="flex flex-wrap gap-2">
					{#key overlay_visible}
						{#each project.tags as tag, i}
							<span
								in:fly|global={{ delay: 400 + i * 50, duration: 300, x: 100 }}
								class="rounded-md bg-gray-700 px-2 py-1 text-gray-300"
							>
								{tag}
							</span>
						{/each}
					{/key}
				</div>
			</footer>
		</div>
	{/if}
</div>
