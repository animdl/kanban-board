import { list } from 'postcss';
import { writable, get } from 'svelte/store';

// sample data to populate the lists and tasks
const DEFAULT_TASK_LIST = [
	{
		id: 'l-0',
		text: 'Really really really long list',
		items: [
			{ id: 't-1', text: 'Task 1' },
			{ id: 't-2', text: 'Task 2' },
			{ id: 't-3', text: 'Task 3' }
		]
	},
	{
		id: 'l-1',
		text: 'List TWO',
		items: [
			{ id: 't-4', text: 'Task 4' },
			{ id: 't-5', text: 'Task 15' },
			{ id: 't-6', text: 'Task 6' }
		]
	},
	{
		id: 'l-2',
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

	const { subscribe } = taskList;

	return {
		subscribe,
		updateTask: (task, listIndex) => {
			taskList.update((list) => {
				const taskIndex = list[listIndex].items.findIndex((item) => item.id === task.id);

				if (taskIndex > -1) {
					list[listIndex].items[taskIndex] = { ...task };
				}

				return list;
			});
		}
	};
}

export const taskListStore = createStore();
