<!-- this component is used to wrap editable components -->
<!-- it shows the edit display if toggled, otherwise it shows the slot -->

<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let value;
	let showEdit = false;
</script>

{#if showEdit}
	<div class="flex-it">
		<!-- value from text area changes dynamically with variable -->
		<!-- <textarea bind:value={newText}/> -->
		<!-- if var name is value, then can pass directly, called value binding -->
		<textarea bind:value />
		<!-- dispatched event syntax: event name, event var1, event var2, ... ; or event name, object containing vars -->
		<!-- can use this to pass data through events -->
		<button
			class="flex underline"
			on:click={() => {
				showEdit = false;
				dispatch('Save', {
					value	
				});
			}}>Save</button
		>
	</div>
{:else}
	<button on:click={() => (showEdit = true)}>
		<slot />
	</button>
{/if}
