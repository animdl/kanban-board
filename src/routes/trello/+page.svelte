<script>
	import TaskList from '../../components/trello/TaskList.svelte';
	import { taskListStore } from '../../stores/tasks';
</script>

<div class="p-10 h-full">
	<a href="/">
		Home
	</a>

	<div class="text-white text-2xl mb-6">Trello List</div>
	<button class="text-xl mb-3 text-white font-bold cursor-pointer hover:underline flex items-start">
		+ Create List
	</button>
	<div class="flex-it h-full">
		<div class="flex-it flex-row rounded-xl h-full">
			<!-- loop through the list and pass the props -->
			<!-- list.id assigns each list their id for reference purposes -->
			{#each $taskListStore as list (list.id)}
				<TaskList {list} />
			{/each}
		</div>
	</div>
</div>
