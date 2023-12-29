<script lang="ts">
	export let visible: boolean = true;
</script>

<div class="z-20 flex w-full items-center">
	<a
		href="#work"
		class="group flex items-center gap-4 text-gray-400 {visible || 'opacity-0'} duration-1000"
	>
		<div
			class="pointer-events-none relative flex h-14 w-6 justify-center overflow-clip rounded-full border border-gray-700"
		>
			<span
				class="scroll pointer-events-none absolute bottom-0 left-0 h-14 w-6 rounded-t-full bg-gray-500 duration-300 group-hover:bg-blue-500 lg:top-0 lg:rounded-b-full"
			/>
		</div>
		<span class="pointer-events-none duration-300 group-hover:text-blue-500">Scroll</span>
	</a>
</div>

<style>
	.scroll {
		animation: scroll 3s infinite;
	}

	@keyframes scroll {
		0% {
			height: 0;
		}
		50% {
			opacity: 1;
			height: 100%;
		}
		100% {
			opacity: 0;
			height: 100%;
		}
	}
</style>
