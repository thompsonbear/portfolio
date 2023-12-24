<script lang="ts">
	export let href = '#';

	import { getContext } from 'svelte';

	const active = getContext<any>('active');
	const index = getContext<any>('item_count').add();
</script>

<a {href} class="relative" on:mouseenter={() => active.set(index)}>
	<slot />
</a>
