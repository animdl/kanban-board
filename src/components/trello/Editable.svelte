<!-- this component is used to wrap editable components -->
<!-- it shows the edit display if toggled, otherwise it shows the slot -->

<script>
	export let showEdit = false;
</script>

{#if showEdit}
	<div class="flex-it">
		<textarea />
		<button class="flex underline" on:click={() => (showEdit = false)}>Save</button>
	</div>
{:else}
	<button on:click={() => (showEdit = true)}>
		<slot />
	</button>
{/if}
