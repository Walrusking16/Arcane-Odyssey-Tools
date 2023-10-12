<script>
	import "../app.postcss";
	import SideNavbar from "$lib/components/SideNavbar.svelte";
</script>
<div class="mt-4 space-y-8">
	<h1 class="text-white text-3xl text-center">Arcane Odyssey Tools</h1>

	<div class="flex justify-center items-center">
		<div class="w-3/4">
			<SideNavbar>
				<slot/>
			</SideNavbar>
		</div>
	</div>
</div>