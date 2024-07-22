import { writable } from 'svelte/store';

function createStore() {

    // This is the writable store
    // simplified syntax for
    // writable([], function start() {
    // })
	const taskList = writable([], () => {
        // created on subscription
        // vars only created once, no matter how many subscriptions are called
        let i = 0;
		const id = setInterval(() => {
            console.log('Updating value')
			taskList.update((list) => {
				return [...list, i++];
			});
		}, 5000);

        // called on unsubscription
        // simplified syntax for
        // return function stop() {
        return () => {
            clearInterval(id);
        };
	});

	return taskList;
}

export const taskListStore = createStore();
