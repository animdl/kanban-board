import { writable } from 'svelte/store';

// sample data to populate the lists and tasks
const DEFAULT_TASK_LIST = [
	{
		id: 'l-1',
		text: 'Really really really long list',
		items: [
			{ id: 't-1', text: 'Task 1' },
			{ id: 't-2', text: 'Task 2' },
			{ id: 't-3', text: 'Task 3' }
		]
	},
	{
		id: 'l-2',
		text: 'List TWO',
		items: [
			{ id: 't-4', text: 'Task 4' },
			{ id: 't-5', text: 'Task 15' },
			{ id: 't-6', text: 'Task 6' }
		]
	},
	{
		id: 'l-3',
		text: 'List three',
		items: [
			{ id: 't-7', text: 'Task 7' },
			{ id: 't-8', text: 'Task 8' },
			{ id: 't-9', text: 'Task 9' }
		]
	}
];

function createStore() {
	const taskList = writable(DEFAULT_TASK_LIST);
	return taskList;
}

export const taskListStore = createStore();
