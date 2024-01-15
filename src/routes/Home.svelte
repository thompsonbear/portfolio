<script lang="ts">
	export let scrollY = 0;
	import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';
</script>

<section
	id="home"
	class="pointer-events-none relative flex h-[calc(100vh-4rem)] flex-col justify-around"
>
	<div class="grid gap-4 lg:grid-cols-2">
		<div class="flex flex-col">
			<div>
				<div class="space-y-4">
					<span class="flex w-fit -translate-x-2 text-3xl xs:text-4xl sm:text-6xl">👋</span>
					<h1 class="whitespace-nowrap text-3xl font-bold xs:text-4xl sm:text-6xl">
						<span class="font-normal">Hi,</span> I'm Thompson
					</h1>
					<p class="text w-fit rounded-md text-gray-400 backdrop-blur-xl sm:text-lg xl:text-2xl">
						Developer, Designer, and Engineer
					</p>
				</div>

				<a
					href="#work"
					class="pointer-events-auto my-12 grid w-fit place-items-center rounded-md bg-blue-600 px-8 py-3 text-xl font-medium duration-300 hover:bg-blue-500"
					>See Work</a
				>
			</div>
		</div>
	</div>
	<ScrollIndicator visible={scrollY < 100} />
</section>
