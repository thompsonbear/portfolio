<script lang="ts">
	export let type: string = 'text';
	export let name: string;
	export let label: string;
	export let value: FormDataEntryValue | undefined = undefined;
	export let messages: string[] | undefined = undefined;
	export let required: boolean = false;
	export let height: string = 'h-14';
	export let bgColor: string = 'bg-gray-900';
</script>

<div class="relative">
	<label
		class="relative flex {height} flex-col opacity-80 focus-within:opacity-100 hover:opacity-100"
		for="email"
	>
		<input
			class="peer h-full rounded-lg border {messages
				? 'border-red-500'
				: 'border-gray-300'} bg-transparent px-4 py-2 text-start outline-none ring-gray-300 focus:ring-2"
			{type}
			{name}
			{required}
			{value}
			placeholder=" "
		/>
		<span
			class="pointer-events-none absolute mx-4 w-fit -translate-y-3 rounded-lg tracking-wide {bgColor} px-1 text-sm duration-300 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-lg peer-focus:-translate-y-3 peer-focus:{bgColor} peer-focus:text-sm"
			>{label}</span
		>
	</label>
	<div class="absolute -bottom-2 right-4 flex flex-wrap justify-end gap-1">
		{#if messages}
			{#each messages as message}
				<p
					class="mt-1 w-fit rounded-md bg-red-500 px-1 text-sm font-semibold tracking-wide text-white"
				>
					{message}
				</p>
			{/each}
		{/if}
	</div>
</div>
