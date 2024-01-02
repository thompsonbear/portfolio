<script lang="ts">
	export let nav_links: NavLink[] = [];
	export let social_links: NavLink[] = [];
	export let contact_links: NavLink[] = [];

	import FootLinkList from './FootLinkList.svelte';
</script>

<footer
	class="mt-20 flex w-full items-center justify-center border-t border-gray-800 py-8 backdrop-blur-md"
>
	<div class="flex w-full max-w-[2000px] flex-wrap gap-8 px-8 xs:grid-flow-col lg:px-12">
		<img
			class="aspect-square h-28"
			src="https://avatars.githubusercontent.com/u/90348306"
			alt="Thompson Bear Headshot"
		/>
		<div class="flex flex-wrap gap-8">
			<FootLinkList title="Navigation" {nav_links}></FootLinkList>
			<FootLinkList title="Find me on" nav_links={social_links}></FootLinkList>
			<FootLinkList title="Contact me" nav_links={contact_links}></FootLinkList>
		</div>
	</div>
</footer>
