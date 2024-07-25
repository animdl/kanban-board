import { writable } from 'svelte/store';

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
	// enables persistence
	// define local storage
	const storedList = localStorage.getItem("trello-store")
	// if nothing in local storage, set the task list to the default
	const _taskList = storedList ? JSON.parse(storedList) : DEFAULT_TASK_LIST
	const taskList = writable(_taskList)

	const { subscribe, update } = taskList;

	return {
		subscribe,
		updateTask: (task, listIndex) => {
			update((list) => {
				const taskIndex = list[listIndex].items.findIndex((item) => item.id === task.id);

				if (taskIndex > -1) {
					list[listIndex].items[taskIndex] = { ...task };
				}

				return list;
			});
		},
		addList: () => {
			update((list) => [
				...list,
				{
					id: `l-${list.length}`,
					text: `List ${list.length + 1}`,
					items: []
				}
			]);
		},
		addTask: (listIndex) => {
			update((list) => {
				const { items } = list[listIndex];
				list[listIndex].items = [
					...items,
					{
						id: `t-${list[listIndex].items.length}`,
						text: `Task ${list[listIndex].items.length + 1}`
					}
				];
				return list;
			});
		},
		moveTask: (sourceData, moveToListIndex) => {
			update(list => {
				const [task] = list[sourceData.listIndex].items.splice(sourceData.taskIndex, 1)
				list[moveToListIndex].items.push(task)
				return list
			})
		}
	};
}

export const taskListStore = createStore();

// store data
// write list to storage
taskListStore.subscribe((list) => {
	if (list) {
		localStorage.setItem("trello-store", JSON.stringify(list))
	}
})