import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

const question = new Question({
	target: document.body
});

export default app;