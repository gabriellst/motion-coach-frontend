<script lang="ts">
	export let href: string
</script>

<a
	{href}
	class="px-8 text-lg py-4 bg-cyan-900 text-gray-100 rounded-md">
	<slot />
</a>
