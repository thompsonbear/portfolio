<script lang="ts">
	export let projects: Project[] = [];
	export let innerWidth: number = 0;

	import ScaleGrid from '$lib/components/scalegrid/ScaleGrid.svelte';
	import ScaleGridItem from '$lib/components/scalegrid/ScaleGridItem.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CardScroller from '$lib/components/cardscroller/CardScroller.svelte';
	import CardScrollerItem from '$lib/components/cardscroller/CardScrollerItem.svelte';

	function getNumCols(): number {
		if (innerWidth > 1200) return 3;
		if (innerWidth > 640) return 2;
		return 1;
	}
</script>

<section id="work" class="pointer-events-auto max-w-7xl">
	<div>
		<h1 class="mb-8 text-3xl font-semibold tracking-wide">Recent Work</h1>

		<div class="hidden w-full sm:block">
			{#key innerWidth}
				<ScaleGrid cols={getNumCols()} item_min_height="24rem">
					{#each projects as project}
						<ScaleGridItem>
							<ProjectCard {project} />
						</ScaleGridItem>
					{/each}
				</ScaleGrid>
			{/key}
		</div>

		<div class="block h-80 w-full sm:hidden">
			<CardScroller>
				{#each projects as project}
					<CardScrollerItem>
						<div class="h-80 w-[calc(100vw-4rem)]">
							<ProjectCard {project} />
						</div>
					</CardScrollerItem>
				{/each}
			</CardScroller>
		</div>
	</div>
</section>
