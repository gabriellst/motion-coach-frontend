<script lang="ts">
	import { enhance } from '$app/forms'
	import Dumbell from '../components/Dumbell.svelte'
	import LoadingSpinner from '../components/LoadingSpinner.svelte'

	let loading = false
	let videoUrl = ''

	export let form: number[]

	const handleFileChange = (e: Event) => {
		const target = e.currentTarget as HTMLInputElement

		const videoFile = target.files?.[0]

		if (!videoFile) return

		videoUrl = URL.createObjectURL(videoFile)
	}
</script>

<main class="flex flex-col gap-8 w-full h-full justify-center items-center">
	{#if !form}
		<div class="flex flex-col gap-1 items-center">
			<Dumbell />
			<h1 class="text-center text-2xl md:text-4xl text-gray-800">
				Boas vindas ao <br />
				<span class="font-bold text-4xl md:text-6xl">Motion Coach</span>
			</h1>
		</div>
	{/if}
	{#if loading && !form}
		<LoadingSpinner />
		Analisando seu video...
	{:else if !form}
		<form
			method="POST"
			class="flex flex-col gap-2 justify-center"
			enctype="multipart/form-data"
			use:enhance={() => {
				loading = true
			}}>
			<label
				class="px-8 cursor-pointer text-gray-100 font-normal text-lg py-4 rounded-lg bg-gradient-to-br from-cyan-700 to-cyan-900">
				Escolher Vídeo
				<input
					type="file"
					name="video"
					accept="video/mp4"
					on:change={handleFileChange}
					id="video"
					class="hidden" />
			</label>
			<button
				type="submit"
				class="px-8 py-4 text-cyan-800 border-cyan-800 border-2 rounded-lg">
				Analisar
			</button>
			{#if videoUrl}
				<p class="text-center">Vídeo carregado!</p>
			{/if}
		</form>
	{:else}
		<div class="flex flex-col gap-1">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				src={videoUrl}
				autoplay
				loop
				class="rounded-[10px]"
				muted
				width="322px"
				height="570px" />
		</div>
		<div class="flex flex-col gap-1 items-center">
			<h2 class="text-center text-2xl md:text-4xl text-gray-800">
				Confira os resultados abaixo:
			</h2>
			<div
				class="flex flex-col w-full items-start max-w-[60%] whitespace-nowrap">
				{#each form as result, index}
					<p class="flex justify-between w-full text-gray-700">
						Repetição {index + 1}:
						<span
							class={'font-bold' +
								' ' +
								(result ? 'text-green-600' : 'text-red-600')}
							>{result ? 'Correta' : 'Incorreta'}</span>
					</p>
				{/each}
			</div>
		</div>
	{/if}
</main>
