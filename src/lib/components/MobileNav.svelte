<script>
  import { routes, isActiveRoute } from '$lib/utils/routes.js';
  import {fly, fade} from 'svelte/transition';
  import CornerButton from '$lib/components/CornerButton.svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  let isMenuOpen = false;

  function onClickMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="absolute -top-4 right-0">
  <CornerButton on:click={onClickMenu}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-100">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </CornerButton>

  {#if isMenuOpen}
    <div class="fixed z-40 inset-0 bg-neutral-800" in:fly={{ y: -1000, duration: 300 }} out:fade={{duration: 200}}>
      <CornerButton on:click={onClickMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-red-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </CornerButton>

      <div class="mt-16 m-4 flex justify-center items-center">
        <ul class="space-y-1 w-72">
          {#key $page.url.pathname}
            {#each routes as route}
              {@const activeRoute = isActiveRoute(route)}
              <li
                class="rounded group transition-colors {activeRoute
							? 'bg-sky-700 text-white'
							: 'bg-sky-900 focus:bg-sky-700 hover:bg-sky-700 text-gray-300 focus:text-white hover:text-white'}"
              >
                <a href="{base}{route.path}" class="block w-full h-full p-2" on:click={onClickMenu}>
                  <span
                    class={activeRoute ? 'ml-4' : ''}
                  >
                    {route.name}
                  </span>
                </a>
              </li>
            {/each}
          {/key}
        </ul>
      </div>
    </div>
  {/if}
</div>