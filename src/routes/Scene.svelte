<script lang="ts">
	export let scrollY: number = 0;
	export let scrollYMax: number = 1000;
	export let contributions: Contribution[][];
	import { T, useTask } from '@threlte/core';
	import atmosphereVertex from '$lib/shaders/atmosphereVertex.glsl?raw';
	import atmosphereFragment from '$lib/shaders/atmosphereFragment.glsl?raw';
	import { AdditiveBlending, BackSide } from 'three';

	import { interactivity } from '@threlte/extras';
	interactivity();

	let zRotation = Math.PI; // 180 degrees

	useTask((delta) => {
		if (pauseRotation) return;
		zRotation += delta / 30;
	});

	$: {
		zRotation = scrollY / 5000;
	}

	let scrollPercent = 0;
	$: scrollPercent = scrollY / scrollYMax;

	let radIncrement = (2 * Math.PI) / contributions.length;

	let pauseRotation = false;

	const gap: number = 0.008;

	let active: string | undefined;
</script>

<T.PerspectiveCamera makeDefault position={[-0.5, 0.85, 3]} fov={30} lookAt.y={0} />

<T.AmbientLight intensity={0.1} />
<T.DirectionalLight intensity={0.3} position={[-8, 10, 4]} color="#ffffff" />
<T.PointLight intensity={30} position={[-1, 1.5, 1.5]} color="#38bdf8" />
<T.PointLight intensity={30} position={[1, 2, -1]} color="#38bdf8" />

<T.Mesh position.y={1}>
	<T.SphereGeometry args={[0.5, 48, 24]} />
	<T.MeshStandardMaterial color="#172554" />
</T.Mesh>

<T.Mesh position.y={1}>
	<T.SphereGeometry args={[0.52, 48, 24]} />
	<T.ShaderMaterial
		fragmentShader={atmosphereFragment}
		vertexShader={atmosphereVertex}
		blending={AdditiveBlending}
		side={BackSide}
	/>
</T.Mesh>

<T.Group
	position.y={1}
	rotation.z={zRotation}
	rotation.y={-0.4}
	rotation.x={-1}
	on:pointerenter={() => (pauseRotation = true)}
	on:pointerleave={() => ((pauseRotation = false), (active = undefined))}
>
	{#each contributions as weeks, j}
		{#each weeks as day, i}
			{#if day.level !== 0}
				<T.Mesh position.z={day.level * gap} on:pointerenter={() => (active = day.id)}>
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
						color={active === day.id ? '#FFFFFF' : '#1d4ed8'}
						transparent
						opacity={active === day.id ? 1 : 0.3 * day.level}
					/>
				</T.Mesh>
			{/if}
		{/each}
	{/each}
</T.Group>
