<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import GearSlot from '$lib/components/GearBuilder/GearSlot.svelte';
	import { fade } from 'svelte/transition';
	import { overlayActive } from '$lib/stores/overlayStore.js';

	export let items = [];

	export let label = 'Select an item';

	let search = '';

	const dispatch = createEventDispatcher();

	function backgroundClicked() {
		search = '';
		overlayActive.set(false);
		dispatch('close');
	}

	function itemSelected(event) {
		search = '';
		overlayActive.set(false);
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

	onMount(() => {
		overlayActive.set(true);
	});

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
	class="fixed bg-black/40 w-screen h-screen inset-0 z-30"
	in:fade={{ duration: 100 }}
	out:fade={{ duration: 100 }}
>
	<button class="absolute w-full h-full" on:click={backgroundClicked} />
	<div class="flex mt-4 flex-col justify-center items-center">
		<div class="flex flex-col w-3/4 items-center md:items-stretch space-y-4">
			<div class="space-y-2 w-full">
				<div class="w-full md:flex md:justify-center md:items-center">
					<p class="bg-sky-800 text-center text-2xl md:text-4xl rounded-lg p-2 shadow-2xl text-white">{label}</p>
				</div>
			</div>

			<div class="flex flex-col space-y-4 w-full items-center justify-center">
				<label class="relative block md:w-96">
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
						class="text-neutral-50 placeholder:italic placeholder:text-neutral-300 block bg-neutral-700 w-full border-2 border-sky-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-400 focus:ring-sky-400 focus:ring-1"
						placeholder="Search for an item"
						type="text"
						name="search"
						bind:value={search}
					/>
				</label>
			</div>
		</div>

		<div class="mt-4 w-full flex justify-center items-center h-[calc(100vh-178px)] overflow-y-scroll">
			{#if filteredItems.length === 0}
				<p class="bg-neutral-800 p-2 rounded text-red-500 font-bold">No items found</p>
			{:else}
				<div class="w-fit h-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-rows-6 lg:grid-cols-6 2xl:grid-cols-8">
					<GearSlot item={removeItem} on:click={itemSelected} />
					{#each filteredItems as item}
						<GearSlot {item} showName={true} on:click={itemSelected} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
