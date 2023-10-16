<script>
  import GearSlot from '$lib/components/GearBuilder/GearSlot.svelte';
  import GearSelector from '$lib/components/GearBuilder/GearSelector.svelte';
  import { createPopperActions } from 'svelte-popperjs';
  import { createEventDispatcher } from 'svelte';
  import { updateItem } from '$lib/stores/gearBuildStore.js';
  import scrolls from '$lib/data/scrolls.js';

  export let item;
  export let itemSlot;

  const placeholder = {
    name: 'Scroll',
    image: 'scroll'
  };

  const [scrollSelectorRef] = createPopperActions({
    placement: 'top',
    strategy: 'fixed'
  });

  const dispatch = createEventDispatcher();

  let showScrollSelector = false;

  function onClick() {
    showScrollSelector = true;
  }

  function itemSelected({ detail }) {
    const newItem = detail.item;

    item.enchant = newItem.name === 'None' ? null : newItem;

    updateItem(item, itemSlot);

    dispatch('change', item);
  }
</script>

<div>
  <div>
    <div use:scrollSelectorRef />
    {#if showScrollSelector}
      <GearSelector
        label="Select a Scroll"
        showLabels={true}
        items={scrolls}
        on:close={() => (showScrollSelector = false)}
        on:itemSelected={itemSelected}
      />
    {/if}
  </div>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <GearSlot item={item.enchant} {placeholder} showName={true} on:click={onClick} />
    </div>
  </div>
</div>