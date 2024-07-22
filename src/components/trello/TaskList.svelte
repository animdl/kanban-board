<script>
	import Editable from './Editable.svelte';
	import TaskItem from './TaskItem.svelte';
	import { taskListStore } from '../../stores/tasks';
	import { onDestroy } from 'svelte';
	// props are passed in from the parent component (essentially arguments)
	export let list;

	let taskList;

	const unsubscribe = taskListStore.subscribe((value) => {
		taskList = value;
	})

	// called on page close
	onDestroy(() => {
		unsubscribe();
	})

</script>

<div class="flex-it h-full w-80 max-w-sm min-h-full m-2 my-0">
	<div class="bg-slate-401 flex-it rounded-xl max-h-full border-2 border-gray-500">
		<div class="flex-it m-4">
			<div class="flex-it flex-row">
				<!-- binds the prop variable "value" from Editable to a var here; this creates a default value for the textArea in Editable -->
				<!-- bind is essentially pass-by-reference, regular prop is pass-by-value -->
				<!-- can call dispatched event directly from function -->
				<!-- the event argument within the function can reference the arguments passed by the dispatch event -->
				<Editable
					bind:value={list.text}
					on:Save={(event) => {
						alert('This is the new List name: ' + event.detail.newText);
					}}
				>
					<div class="text-xl text-left font-bold mr-3 text-red-600">{list.text}</div>
				</Editable>
				<div class="flex hover:text-red-600 items-center">
					<!-- garbage can icon -->
					<svg
						xmlns="http://www.w2.org/2000/svg"
						width="15"
						height="15"
						fill="currentColor"
						class="bi bi-trash"
						viewBox="-1 0 16 16"
					>
						<path
							d="M4.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
						/>
						<path
							fill-rule="evenodd"
							d="M13.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
						/>
					</svg>
				</div>
			</div>
		</div>
		<div class="overflow-x-hidden overflow-y-auto with-scrollbar p-3">
			<!-- loop through the items, pass the props, assign the id -->
			<!-- can pass in the individual elements from the object -->
			<!-- or can pass the entire object, and handle the assignment on the receiver side -->
			{#each list.items as item (item.id)}
				<TaskItem {item} />
			{/each}
		</div>
		<button class="underline flex p-3 text-orange-500"> + Add Task </button>
	</div>
</div>
