<script>
	import Question from './component/Question.svelte';
	import Footer from './component/Footer.svelte';
	import Index from './component/Index.svelte';
	import Result from './component/Result.svelte';
	import Router from 'svelte-spa-router';

    const routes = {
        '/' : Index,
        '/result/:resultType' : Result,
        '/question' : Question,
    }
</script>

<main>
	<header>
		<h1>🍗음BTI TEST🍚</h1>
	</header>
	<section>
		<Router {routes} />
	</section>
	<Footer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	section {
        width: 60%;
        vertical-align: top;
        height: 800px;
        display: inline-block;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>