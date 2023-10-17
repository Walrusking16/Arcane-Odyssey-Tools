<script>
	import GearSlot from '$lib/components/GearBuilder/GearSlot.svelte';
	import { createEventDispatcher } from 'svelte';
	import GemViewer from '$lib/components/GearBuilder/GemViewer.svelte';
	import GearModifiers from '$lib/components/GearBuilder/GearModifiers.svelte';
	import GearEnchant from '$lib/components/GearBuilder/GearEnchant.svelte';

	export let item;
	export let itemSlot;
	export let placeholder;

	const dispatch = createEventDispatcher();

	function handleClick(event) {
		dispatch('click', event.detail.item);
	}

	function onChange({detail}) {
		dispatch('change', detail);
	}
</script>

<div class="flex space-x-2">
	<GearSlot {item} {placeholder} on:click={handleClick} />

	{#if item !== null && item !== undefined}
		<div class="space-y-2">
			<GearModifiers {item} {itemSlot} on:change={onChange} />
			<GemViewer {item} {itemSlot} on:change={onChange} />
			<GearEnchant {item} {itemSlot} on:change={onChange} />
		</div>
	{/if}
</div>
