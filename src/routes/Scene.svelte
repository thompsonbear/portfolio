<script lang="ts">
	export let contributions: Contribution[][];
	export let contribution_total: number;

	import { T, useTask } from '@threlte/core';
	import { Text } from '@threlte/extras';
	import atmosphereVertex from '$lib/shaders/atmosphereVertex.glsl?raw';
	import atmosphereFragment from '$lib/shaders/atmosphereFragment.glsl?raw';
	import { AdditiveBlending, BackSide } from 'three';
	import { count, getDateString } from '$lib/utils/helpers';
	import { expoOut } from 'svelte/easing';
	import { interactivity } from '@threlte/extras';
	interactivity({
		filter: (hits) => {
			return hits.slice(0, 1);
		}
	});

	let contrib_hovered: Contribution | undefined = undefined;
	let zRotation = Math.PI; // 180 degrees
	let zOffset: number = 0;
	let scrollY: number = 0;
	let innerWidth: number = 0;
	$: scrollY, (zOffset = scrollY / 5000);

	useTask((delta) => {
		if (pauseRotation) return;
		zRotation += delta / 30;
	});

	const radIncrement = (2 * Math.PI) / contributions.length;
	const gap: number = 0.008;

	let pauseRotation = false;

	count(0, contribution_total, expoOut, 3000, (c) => {
		contribution_total = c;
	});

	function contribution_text(contrib_hovered: Contribution | undefined) {
		if ((contrib_hovered && contrib_hovered.count > 1) || !contrib_hovered) {
			return 'Contributions';
		}
		return 'Contribution';
	}

	function setActive(contrib: Contribution) {
		if (innerWidth < 1200) return;
		contrib_hovered = contrib;
	}

	function clearActive() {
		contrib_hovered = undefined;
	}
</script>

<svelte:window bind:innerWidth bind:scrollY />

<T.PerspectiveCamera makeDefault position={[-0.5, 0.85, 3]} fov={30} lookAt.y={0} />

<T.AmbientLight intensity={0.1} />
<T.DirectionalLight intensity={3} position={[-8, 10, 4]} color="#ffffff" />
<T.PointLight intensity={innerWidth < 640 ? 15 : 30} position={[-1, 1.5, 1.5]} color="#38bdf8" />
<T.PointLight intensity={innerWidth < 640 ? 15 : 30} position={[1, 2, -1]} color="#38bdf8" />

<!-- Globe -->
<T.Group position.y={1} rotation.y={-0.4}>
	{#if contribution_total && innerWidth > 1200}
		<T.Group position.z={0.5} position.x={-0.1}>
			<Text
				text={contrib_hovered ? contrib_hovered.count : contribution_total}
				position.y={0.1}
				anchorX={'center'}
				fontSize={0.15}
				color="#3b82f6"
			/>
			<Text
				text={contribution_text(contrib_hovered)}
				position.y={-0.05}
				anchorX={'center'}
				fontSize={0.03}
				color="#3b82f6"
			/>
			<Text
				text={contrib_hovered ? getDateString(contrib_hovered.date) : 'in the last year'}
				position.y={-0.09}
				anchorX={'center'}
				fontSize={0.02}
				color="#3b82f6"
			/>
		</T.Group>
	{/if}
	<T.Mesh on:pointerenter>
		<T.SphereGeometry args={[0.5, 48, 24]} />
		<T.MeshStandardMaterial color="#172554" />
	</T.Mesh>

	<T.Mesh>
		<T.SphereGeometry args={[0.52, 48, 24]} />
		<T.ShaderMaterial
			fragmentShader={atmosphereFragment}
			vertexShader={atmosphereVertex}
			blending={AdditiveBlending}
			side={BackSide}
			transparent
			opacity={0.2}
		/>
	</T.Mesh>
</T.Group>

<!-- Ring -->
<T.Group
	position.y={1}
	rotation.z={zRotation + zOffset}
	rotation.y={-0.4}
	rotation.x={-1}
	on:pointerleave={clearActive}
>
	{#each contributions as weeks, j}
		{#each weeks as day, i}
			{#if day.level !== 0}
				<T.Mesh position.z={(day.level * gap) / 2} on:pointerenter={() => setActive(day)}>
					<T.RingGeometry
						args={[
							0.6 + i * 0.05 + gap,
							0.65 + i * 0.05,
							32,
							1,
							radIncrement * j,
							radIncrement - gap * 2
						]}
					/>
					<T.MeshStandardMaterial
						color={contrib_hovered?.id === day.id ? '#FFFFFF' : '#1d4ed8'}
						transparent
						opacity={contrib_hovered?.id === day.id ? 1 : 0.3 * day.level}
					/>
				</T.Mesh>
			{/if}
		{/each}
	{/each}
</T.Group>
