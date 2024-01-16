<script lang="ts">
	export let cols: number = 3;
	export let item_min_height: string = '20rem';

	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import { multiplyCSSUnit } from '$lib/utils/helpers';

	const active = writable<Point | undefined>(undefined);

	setContext('active', active);

	// Count the number of ScaleGridItem(s) in ScaleGrid
	let item_count = writable(0);
	item_count.subscribe(() => {
		setContext('item_count', {
			add() {
				$item_count++;

				// return the index of the item as a point/coordinate to the item for reference
				return {
					x: ($item_count - 1) % cols,
					y: Math.floor(($item_count - 1) / cols)
				};
			}
		});
	});

	let grid_style: string;

	function generate_template_text(n: number, active: number | undefined = undefined) {
		return Array(n)
			.fill('1fr')
			.map((x, i) => (i === active ? '2fr' : x))
			.join(' ');
	}

	function set_grid_template(active: Point | undefined, rows: number): string {
		let coltext = generate_template_text(cols, active?.x);
		let rowtext = generate_template_text(rows, active?.y);

		let gridheight = multiplyCSSUnit(item_min_height, rows);

		return `grid-template-columns: ${coltext}; grid-template-rows: ${rowtext}; height: ${gridheight};`;
	}

	onMount(() => {
		let rows = Math.ceil($item_count / cols);

		active.subscribe((a) => (grid_style = set_grid_template(a, rows)));
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	style={grid_style}
	class="grid gap-4 duration-500 {grid_style || 'hidden'}"
	on:mouseleave={() => active.set(undefined)}
>
	<slot />
</div>
