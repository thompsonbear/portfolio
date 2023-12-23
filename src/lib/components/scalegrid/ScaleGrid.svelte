<script lang="ts">
	export let columns: number = 3;
	export let rows: number = 2;

	function generate_template_text(n: number, active: number | undefined = undefined) {
		let s = '';
		for (let x = 0; x < n; x++) {
			s += '1fr';
			if (x < columns - 1)
				// don't add a space (understore) after the last column
				s += '_';
		}

		return s;
	}

	function grid_template() {
		let coltext = generate_template_text(columns);
		let rowtext = generate_template_text(rows);

		return `grid-cols-[${coltext}] grid-rows-[${rowtext}]`;
	}
</script>

<div class="grid {grid_template()} h-80 gap-4 duration-500">
	<slot />
</div>
