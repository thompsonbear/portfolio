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
					<p class="w-fit rounded-md text-gray-400 backdrop-blur-xl xs:text-lg xl:text-2xl">
						Developer, Designer, and Engineer
					</p>
				</div>

				<div class="my-12 flex flex-wrap gap-4">
					<a
						href="#work"
						class="pointer-events-auto flex w-36 items-center justify-center rounded-md bg-blue-600 py-3 text-xl font-medium duration-300 hover:bg-blue-500"
						>See Work</a
					>
					<a
						target="_blank"
						href="/downloads/ThompsonBear_Resume.pdf"
						download
						class="pointer-events-auto flex w-36 items-center justify-center gap-2 rounded-md border-2 border-gray-300 py-3 text-xl font-medium text-gray-300 backdrop-blur-md duration-300 hover:text-gray-100 focus:text-gray-100"
					>
						<iconify-icon icon="mdi:download"></iconify-icon>
						<span> Resume </span></a
					>
				</div>
			</div>
		</div>
	</div>
	<ScrollIndicator visible={scrollY < 100} />
</section>
