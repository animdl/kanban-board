import { writable } from "svelte/store";

function createStore() {
    const taskList = writable([]);
    let i = 0;

    setInterval(() => {
        taskList.update((list) => {
            return [...list, i++]
        })
    }, 5000);

    return taskList;
}

export const taskListStore = createStore()