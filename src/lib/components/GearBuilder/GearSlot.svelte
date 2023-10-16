<script>
	import ItemInfo from '$lib/components/ItemInfo.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let item;
	export let placeholder = { image: '', name: 'Placeholder' };
	export let showName = false;

	const [itemInfoRef, itemInfoContent] = createPopperActions({
		placement: 'top-end'
	});

	const dispatch = createEventDispatcher();

	let showItemInfo = false;

	function onClick() {
		showItemInfo = false;
		dispatch('click', { item });
	}

	function isItemNull(item) {
		return item === null || item.name === '';
	}

	let imageIndex = 0;

	let itemImage = !isItemNull(item) && Array.isArray(item.image) ? item.image[imageIndex] : item?.image;

	function isImageArray(item) {
		return !isItemNull(item) && item?.image !== null && Array.isArray(item?.image);
	}

	onMount(() => {
		if (!isImageArray(item)) return;

		setInterval(() => {
			if (!isImageArray(item)) return;

			imageIndex = (imageIndex + 1) % item.image.length;
			itemImage = Array.isArray(item.image) ? item.image[imageIndex] : item.image;
		}, 2000);
	});
</script>

<div>
	<div
		class="bg-black/70 border border-gray-500 w-[100px] h-[100px] flex items-center justify-center relative text-center"
	>
		<button
			class="bg-white w-full h-full z-10 absolute transition-opacity opacity-0 hover:opacity-5"
			on:pointerenter={() => (showItemInfo = true)}
			on:pointerleave={() => (showItemInfo = false)}
			use:itemInfoRef
			on:click|preventDefault={onClick}
		/>
		{#if showItemInfo && !isItemNull(item)}
			<div
				class="z-20 relative"
				use:itemInfoContent
				in:fade={{ duration: 100 }}
				out:fade={{ duration: 100 }}
			>
				<ItemInfo {item} />
			</div>
		{/if}
		{#if isItemNull(item)}
			<img
				src="/gear/placeholders/{placeholder.image}.webp"
				alt={placeholder.name}
				width="100"
				height="100"
				on:dragstart|preventDefault
			/>
		{:else if item.image == null}
			<p>{item.name}</p>
		{:else}
			<div class="relative w-full h-full flex justify-center items-center">
				<img src={itemImage} alt={item.name} width="100" height="100" on:dragstart|preventDefault />

				{#if showName}
					<p class="absolute w-full top-0 break-all bg-black/60 text-sm p-1">{item.name}</p>
				{/if}
			</div>
		{/if}
	</div>
</div>
