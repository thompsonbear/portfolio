<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="w-full flex flex-col items-center">
	<div class="max-w-[1200px] flex flex-col w-full">
		<Header />
		<slot />
	</div>
</div>
