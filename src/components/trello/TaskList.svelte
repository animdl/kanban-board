<script context="module">
	import { writable } from 'svelte/store';
	// creates a stored variable that can be subscribed to
	let listHoverId = writable(null);
</script>

<script>
	import { taskListStore } from '../../stores/tasks';
	import Editable from './Editable.svelte';
	import TaskItem from './TaskItem.svelte';
	import { flip } from 'svelte/animate';
	import { fade, fly } from 'svelte/transition';
	// props are passed in from the parent component (essentially arguments)
	export let list, listIndex;

	// function is called when a draggable item is dropped onto the list div
	// the event data is transferred from the function in the dragged item to the function in the dropped list
	function drop(e) {
		const sourceJson = e.dataTransfer.getData('text/plain');
		const sourceData = JSON.parse(sourceJson);

		taskListStore.moveTask(sourceData, listIndex);
		listHoverId.set(null);
	}

	function updateList(e) {
		taskListStore.updateList(e.detail.value, listIndex);
	}
</script>

<div class="flex-it h-full w-80 max-w-sm min-h-full m-2 my-0">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- class hovering is assigned if the condition is true -->
	<!-- if a task is being moved(hovering) over a list, the list will have a border glow -->
	<div
		on:dragenter={() => {
			listHoverId.set(list.id);
		}}
		on:dragover|preventDefault={() => {}}
		on:drop={drop}
		class:hovering={list.id === $listHoverId}
		class="bg-slate-401 flex-it rounded-xl max-h-full border-2 border-gray-500"
	>
		<div class="flex-it m-4">
			<!-- binds the prop variable "value" from Editable to a var here; this creates a default value for the textArea in Editable -->
			<!-- bind is essentially pass-by-reference, regular prop is pass-by-value -->
			<Editable bind:value={list.text} on:Save={updateList}>
				<div class="flex-it flex-row">
					<div class="flex flex-1 text-xl font-bold text-red-600">{list.text}</div>
					<button
						on:click|stopPropagation={() => {
							taskListStore.removeList(listIndex);
						}}
					>
						<div class="flex hover:text-red-600 items-end">
							<!-- garbage can icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-trash"
								viewBox="0 0 16 16"
							>
								<path
									d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
								/>
								<path
									fill-rule="evenodd"
									d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
								/>
							</svg>
						</div>
					</button>
				</div>
			</Editable>
		</div>
		<div class="overflow-x-hidden overflow-y-auto p-3">
			<!-- loop through the items, pass the props, assign the id -->
			<!-- can pass in the individual elements from the object -->
			<!-- or can pass the entire object, and handle the assignment on the receiver side -->
			{#each list.items as item, taskIndex (item.id)}
				<div out:fade in:fly={{ y: 200 }} animate:flip>
					<TaskItem task={item} {listIndex} {taskIndex} />
				</div>
			{/each}
		</div>
		<button
			on:click={() => taskListStore.addTask(listIndex)}
			class="underline flex p-3 text-orange-500"
		>
			+ Add Task
		</button>
	</div>
</div>

<style>
	.hovering {
		border: 2px solid orange;
	}
</style>
