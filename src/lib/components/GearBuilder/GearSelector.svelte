<script>
	import { createEventDispatcher } from 'svelte';
	import GearSlot from '$lib/components/GearBuilder/GearSlot.svelte';
	import { fade } from 'svelte/transition';

	export let items = [];

	export let label = 'Select an item';
	export let showLabels = false;

	let search = '';

	const dispatch = createEventDispatcher();

	function backgroundClicked() {
		search = '';
		dispatch('close');
	}

	function itemSelected(event) {
		search = '';
		dispatch('itemSelected', { item: event.detail.item });
	}

	let removeItem = {
		name: 'None',
		description: 'Remove item from slot',
		type: items[0].type,
		getStats() {
			return [];
		}
	};

	$: filteredItems = filterItems(search);

	function filterItems(search) {
		if (search === '') {
			return items;
		}

		return items.filter((item) => {
			return item.name.toLowerCase().includes(search.toLowerCase());
		});
	}
</script>

<div
	class="absolute bg-black/40 w-screen h-screen inset-0 z-30"
	in:fade={{ duration: 100 }}
	out:fade={{ duration: 100 }}
>
	<button class="absolute w-screen h-screen" on:click={backgroundClicked} />
	<div class="flex mt-4 justify-center items-center">
		<div class="flex flex-col w-1/2 items-center space-y-4">
			<div class="space-y-2">
				<p class="bg-sky-800 text-4xl rounded-lg p-2 shadow-2xl text-white">{label}</p>
				<label class="relative block">
					<span class="sr-only">Search</span>
					<span class="absolute inset-y-0 left-0 flex items-center pl-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5 text-neutral-300"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</span>
					<input
						class="placeholder:italic placeholder:text-neutral-400 block bg-neutral-800 w-full border border-sky-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
						placeholder="Search for an item"
						type="text"
						name="search"
						bind:value={search}
					/>
				</label>
			</div>

			{#if filteredItems.length === 0}
				<p class="bg-neutral-800 p-2 rounded text-red-500 font-bold">No items found</p>
			{:else}
				<div class="grid gap-4 grid-cols-8">
					<div>
						<GearSlot item={removeItem} on:click={itemSelected} />
					</div>
					{#each filteredItems as item}
						<GearSlot {item} showName={showLabels} on:click={itemSelected} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
