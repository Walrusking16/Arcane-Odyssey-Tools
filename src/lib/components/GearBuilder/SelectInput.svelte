<script>
	import { createEventDispatcher } from 'svelte';

	export let options = {};
	export let label = 'Label';
	export let defaultSelected = '';

	let selected = defaultSelected;

	const dispatch = createEventDispatcher();

	function onChange(event) {
		selected = event.target.value;
		dispatch('change', selected);
	}
</script>

<div class="space-y-1 w-32">
	<p>{label}</p>
	<div class="inline-block relative w-full">
		<select
			bind:value={selected}
			class="block appearance-none bg-none bg-sky-700 w-full p-1.5 rounded-md border-none text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
			on:change={onChange}
		>
			{#each Object.entries(options) as [value, label]}
				<option {value}>{label}</option>
			{/each}
		</select>
		<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				class="fill-current h-5 w-5 text-white"
			>
				<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
			</svg>
		</div>
	</div>
</div>
