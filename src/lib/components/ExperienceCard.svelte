<script lang="ts">
	export let exp: Experience;

	import { getDateString } from '$lib/utils/helpers';
</script>

<div class="h-fit w-full space-y-4 overflow-clip rounded-lg border border-gray-700 bg-gray-800 p-4">
	<div class="flex flex-col">
		<h1 class="text-lg font-semibold">{exp.organization}</h1>
		<h2 class="opacity-80">{exp.title}</h2>
		<span class="flex flex-wrap text-sm opacity-80">
			{getDateString(exp.start_date)} -
			{exp.end_date ? getDateString(exp.end_date) : 'Present'}
		</span>
	</div>

	<p>{exp.description}</p>
</div>
