<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const routes = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Gear Builder',
			path: '/gear-builder'
		},
	];

	function isActive(route) {
		return route.path === $page.url.pathname
	}
</script>

<div class="flex space-x-4">
	<div class="text-white">
		<ul class="space-y-1 w-48">
			{#key $page.url.pathname}
				{#each routes as route}
					{@const activeRoute = isActive(route)}
					<li class="rounded group transition-colors {activeRoute ? 'bg-sky-700 text-white' : 'bg-sky-900 focus:bg-sky-700 hover:bg-sky-700 text-gray-300 focus:text-white hover:text-white'}">
						<a href="{base}{route.path}" class="block w-full h-full p-2">
							<span class="{activeRoute ? 'ml-4' : 'transition-all group-focus:ml-4 group-hover:ml-4'}">{route.name}</span>
						</a>
					</li>
				{/each}
			{/key}
		</ul>
	</div>

	<div class="flex-grow text-gray-300">
		<slot/>
	</div>
</div>