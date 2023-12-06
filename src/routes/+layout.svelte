<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</svelte:head>

<div class="w-full flex flex-col items-center">
	<div class="max-w-[1200px] flex flex-col w-full">
		<Header />
		<slot />
	</div>
</div>
