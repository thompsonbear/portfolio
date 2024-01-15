<script lang="ts">
	import { fly } from 'svelte/transition';

	export let disabled: boolean = false;
	export let text: string = 'Submit';
	export let icon: string | undefined = 'mdi:send';
	export let btnClasses: string = 'bg-blue-600 hover:bg-blue-500 focus:bg-blue-500';
</script>

<button
	type="submit"
	class="flex h-14 w-full items-center justify-center gap-2 rounded-md duration-300 {btnClasses} {disabled &&
		'cursor-not-allowed opacity-50'}"
	{disabled}
>
	{#key text}
		<div in:fly={{ x: 20, duration: 300 }} class="flex items-center gap-2">
			<span class="text-lg font-bold">{text}</span>
			{#if icon}
				<iconify-icon {icon} />
			{/if}
		</div>
	{/key}
</button>
