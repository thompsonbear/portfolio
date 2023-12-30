<script lang="ts">
	export let scrollY: number = 0;
	export let scrollYMax: number = 1000;
	import { T, useTask } from '@threlte/core';
	import atmosphereVertex from '$lib/shaders/atmosphereVertex.glsl?raw';
	import atmosphereFragment from '$lib/shaders/atmosphereFragment.glsl?raw';
	import { AdditiveBlending, BackSide } from 'three';

	let rotation = {
		z: 0,
	};

	useTask((delta) => {
		rotation.z += delta / 50;
	});

	$: {
		if (scrollY > 0) {
			rotation.z = scrollY / 5000;
		}
	}

	let scrollPercent = 0;

	$: scrollPercent = scrollY / scrollYMax;
</script>

<T.PerspectiveCamera makeDefault position={[-0.5, 0.85, 3]} fov={30} lookAt.y={0} />

<T.AmbientLight intensity={0.1} />
<T.DirectionalLight intensity={5}  position={[-8, 10, 4]} color="#ffffff"/>
<T.PointLight intensity={30}  position={[-1, 1.5, 1.5]} color="#7c3aed"/>
<T.PointLight intensity={30}  position={[1, 2, -1]} color="#7c3aed"/>

<T.Fog attach="fog" args={['#ffffff', 1, 8]} />

<T.Mesh position.y={1} >
	<T.SphereGeometry  args={[0.5]}/>
	<T.MeshStandardMaterial color="#172554"/>
</T.Mesh>

<T.Mesh position.y={1} >
	<T.SphereGeometry  args={[0.52]}/>
	<T.ShaderMaterial
    fragmentShader={atmosphereFragment}
    vertexShader={atmosphereVertex}
    blending={AdditiveBlending}
	side={BackSide}
  />
</T.Mesh>

<T.Mesh position.y={1} rotation.y={-0.4} rotation.x={-1} rotation.z={rotation.z}>
	<T.RingGeometry  args={[0.6]}/>
	<T.MeshStandardMaterial color="#111827" transparent opacity={0.1}/>
</T.Mesh>
