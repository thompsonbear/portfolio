<script lang="ts">
	export let scrollY: number = 0;
	export let scrollYMax: number = 1000;
	import { T, useTask } from '@threlte/core';

	let rotation = {
		x: 0,
		y: 0
	};

	useTask((delta) => {
		rotation.y += delta / 10;
		rotation.x += delta / 10;
	});

	$: {
		if (scrollY > 0) {
			rotation.x = scrollY / 1000;
		}
	}

	let scrollPercent = 0;

	$: scrollPercent = scrollY / scrollYMax;
</script>

<T.PerspectiveCamera makeDefault position={[-0.8, 0.7, 3.5]} lookAt.y={0} />
<T.AmbientLight intensity={0.3} />
<T.DirectionalLight intensity={1} position={[0, 0, 5]} />

<T.Mesh position.y={1} rotation.y={rotation.y} rotation.x={rotation.x}>
	<T.OctahedronGeometry args={[1, 2, 1]} />
	<T.MeshBasicMaterial wireframe color="#60a5fa" transparent opacity={0.5 - scrollPercent / 5} />
	<T.Points>
		<T.OctahedronGeometry args={[1, 2, 1]} />
		<T.PointsMaterial
			color="#bfdbfe"
			size={0.02 + scrollPercent / 50}
			transparent
			opacity={0.5 - scrollPercent / 5}
		/>
	</T.Points>
</T.Mesh>

<T.Mesh position.y={1} rotation.y={rotation.y} rotation.x={rotation.x}>
	<T.OctahedronGeometry args={[1, 2, 1]} />
	<T.MeshStandardMaterial color="#2563eb" transparent opacity={0.8 - scrollPercent} />
</T.Mesh>
