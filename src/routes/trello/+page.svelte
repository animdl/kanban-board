<script>
	import TaskList from '../../components/trello/TaskList.svelte';

	const listName2 = 'List';

    // sample data to populate the lists and tasks
	const taskList = [
		{
			id: 'l-1',
			text: 'List 1',
			items: [
				{ id: 't-1', text: 'Task 1' },
				{ id: 't-2', text: 'Task 2' },
				{ id: 't-3', text: 'Task 3' }
			]
		},
		{
			id: 'l-2',
			text: 'List 2',
			items: [
				{ id: 't-4', text: 'Task 4' },
				{ id: 't-5', text: 'Task 5' },
				{ id: 't-6', text: 'Task 6' }
			]
		},
		{
			id: 'l-3',
			text: 'List 3',
			items: [
				{ id: 't-7', text: 'Task 7' },
				{ id: 't-8', text: 'Task 8' },
				{ id: 't-9', text: 'Task 9' }
			]
		}
	];
</script>

<div class="p-10 h-full">
	<div class="text-white text-2xl mb-6">Trello List</div>
	<button class="text-xl mb-3 text-white font-bold cursor-pointer hover:underline flex items-start">
		+ Create List
	</button>
	<div class="flex-it h-full">
		<div class="flex-it flex-row rounded-xl h-full">
			<!-- setting the props -->
			<TaskList listName="List 1" />
			<!-- can pass const to props and concatenate -->
			<TaskList listName={`${listName2} two`} />
			<TaskList listName={'Can also concatenate like this ' + listName2} />
			<TaskList listName="TODO" />
			<!-- if the const name is the same as prop name then you can pass it directly -->
			<!-- <TaskList {listName}/> -->
		</div>
	</div>
</div>
