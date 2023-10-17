<script>
	import '../app.postcss';
	import SideNavbar from '$lib/components/SideNavbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { overlayActive } from '$lib/stores/overlayStore.js';
	import { browser } from '$app/environment';

	$: if (browser) document.body.classList.toggle('noscroll', $overlayActive);
</script>

<div class="relative min-h-screen">
	<MobileNav />

	<div class="mt-4 space-y-8">
		<h1 class="text-white text-xl md:text-3xl text-center">Arcane Odyssey Tools</h1>

		<div class="flex justify-center items-center">
			<div class="w-11/12 2xl:w-3/4">
				<SideNavbar>
					<slot />
				</SideNavbar>
			</div>
		</div>

		<Footer />
	</div>
</div>