<script lang="ts">
	export let nav_link: NavLink;
</script>

<a
	target="_blank"
	rel="noopener noreferrer"
	class="flex items-center gap-2 font-semibold tracking-wide text-gray-300 duration-300 hover:text-blue-400"
	href={nav_link.href}
>
	<iconify-icon icon={nav_link.icon} height="1.2rem" />
	<span class="max-w-[50vw] truncate">{nav_link.text}</span>
</a>
