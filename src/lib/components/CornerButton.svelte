<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch('click');
  }
</script>

<div class="absolute md:hidden right-2 top-2">
  <button class="bg-gray-700 rounded" on:click={onClick}>
    <slot/>
  </button>
</div>