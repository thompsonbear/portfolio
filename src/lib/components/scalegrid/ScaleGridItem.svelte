<script lang="ts">
	export let animation_delay: number = 0;
	export let animation_duration: number = 300;
	import { getContext } from 'svelte';
	import { scale } from 'svelte/transition';

	const active = getContext<any>('active');
	const index: Point = getContext<any>('item_count').add();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	in:scale={{ duration: animation_duration, delay: animation_delay }}
	class="relative"
	on:mouseenter={() => active.set(index)}
>
	<slot />
</div>
