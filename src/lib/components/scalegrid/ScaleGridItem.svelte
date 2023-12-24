<script lang="ts">
	import { getContext } from 'svelte';

	const active = getContext<any>('active');
	const index = getContext<any>('item_count').add();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative" on:mouseenter={() => active.set(index)}>
	<slot />
</div>
