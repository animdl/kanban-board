<script>
	import TaskList from '../../components/trello/TaskList.svelte';
	import { taskListStore } from '../../stores/tasks';
</script>

<div class="p-10 h-full flex-it">
	<a href="/" class="text-white">
		Home
	</a>

	<div class="text-white text-2xl mb-6">Trello List</div>
	<button on:click={taskListStore.addList} class="text-xl mb-3 text-white font-bold cursor-pointer hover:underline flex items-start">
		+ Create List
	</button>
	<div class="flex-it h-full flex-1">
		<div class="flex-it flex-row rounded-xl h-full">
			<!-- loop through the list and pass the props -->
			<!-- list.id assigns each list their id for reference purposes -->
			{#each $taskListStore as list, listIndex (list.id)}
				<TaskList {list} {listIndex}/>
			{/each}
		</div>
	</div>
</div>