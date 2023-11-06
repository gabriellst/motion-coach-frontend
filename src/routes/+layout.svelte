<script>
	import './styles.css'
	import GradientBall from '../components/GradientBall.svelte'
</script>

<svelte:head>
	<title>Motion Coach</title>
	<meta
		name="description"
		content="Projeto Final PDI - Motion Coach" />
</svelte:head>

<div class="relative w-full h-full">
	<div class="relative z-[1] w-full h-full">
		<slot />
	</div>

	<GradientBall className="left-[0] top-[0px] h-[1500px] w-[1398px]" />
	<GradientBall className="left-[-900px] top-[-300px] h-[1500px] w-[1398px]" />
	<GradientBall className="left-[800px] top-[500px] h-[1700px] w-[1800px]" />
</div>
