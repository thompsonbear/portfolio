<script lang="ts">
	export let nav_links: NavLink[] = [];
	export let social_links: NavLink[] = [];

	import FootLinkList from './FootLinkList.svelte';
</script>

<footer
	class="mt-20 flex w-screen items-center justify-center border-t border-gray-800 py-8 backdrop-blur-md"
>
	<div class="flex w-full max-w-[2000px] gap-16 px-8 xs:grid-flow-col lg:px-12">
		<div class="grid h-32 w-32 place-items-center rounded-full bg-gray-300 text-gray-800">
			Image
		</div>
		<FootLinkList title="Navigation" {nav_links}></FootLinkList>
		<FootLinkList title="Find me on" nav_links={social_links}></FootLinkList>
	</div>
</footer>
