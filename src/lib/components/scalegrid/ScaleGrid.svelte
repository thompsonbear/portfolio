<script lang="ts">
	export let cols: number = 3;
	export let rows: number = 2;

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const active = writable<number | undefined>(undefined);

	setContext('active', active);

	// Count the number of Scale Grid Items
	let item_count = writable(0);
	item_count.subscribe(() => {
		setContext('item_count', {
			add() {
				$item_count++;
				if ($item_count > cols * rows) $item_count = 1; // reset count if it exceeds the number of items

				return $item_count;
			}
		});
	});

	let grid_style: string = set_grid_template($active);
	$: $active, (grid_style = set_grid_template($active));

	function index_to_point(index: number | undefined): Point | undefined {
		if (index === undefined) return undefined;
		return {
			x: (index - 1) % cols,
			y: Math.floor((index - 1) / cols)
		};
	}

	function generate_template_text(n: number, active: number | undefined = undefined) {
		return Array(n)
			.fill('1fr')
			.map((x, i) => (i === active ? '2fr' : x))
			.join(' ');
	}

	// generate styles for grid based on columns and rows
	function set_grid_template(active: number | undefined): string {
		let active_point = index_to_point(active);
		let coltext = generate_template_text(cols, active_point?.x);
		let rowtext = generate_template_text(rows, active_point?.y);

		return `grid-template-columns: ${coltext}; grid-template-rows: ${rowtext};`;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	style={grid_style}
	class="grid h-full gap-4 duration-500"
	on:mouseleave={() => active.set(undefined)}
>
	<slot />
</div>
