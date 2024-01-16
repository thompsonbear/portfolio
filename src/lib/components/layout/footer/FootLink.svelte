<script lang="ts">
	export let nav_link: NavLink;
</script>

<a
	target={nav_link?.new_tab ? '_blank' : '_self'}
	rel={nav_link?.new_tab ? 'noopener noreferrer' : ''}
	class="flex items-center gap-2 font-semibold tracking-wide text-gray-300 duration-300 hover:text-blue-400"
	href={nav_link.href}
>
	<iconify-icon icon={nav_link.icon} height="1.2rem" />
	<span class="max-w-[65vw] overflow-hidden text-ellipsis">{nav_link.text}</span>
</a>
