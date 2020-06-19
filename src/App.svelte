<script>
	import Drinklist from './components/drinklist'
	import Drink from './components/drink'
	import drinks from './drinks.json'
	import SelectionMenu from './components/selectionMenu'
	let lastView = false;
	let lastViewData = false;
	let currentView = 'drinkList';
	let data = {drinks}
	let drink = drinks[5];
	const viewMap = {
		'drink': Drink,
		'drinkList': Drinklist,
		'selectionMenu': SelectionMenu
	}
	
	const setView = (view, viewData) => () => {
		lastView = currentView;
		lastViewData = {...data};
		currentView = view;
		data = viewData
	}
	let nav = [
		{
			name: 'Home',
			view: 'selectionMenu'
		},
		{
			name: 'Back',
			view: 'back'
		},
	]
</script>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 30rem;
		flex-flow: row wrap;
	}
	h1 {
		color: black;
		cursor: pointer;
	}
	main {
		padding: 0 1rem;
	}
</style>
<header>
<h1 on:click={setView('drinkList', {drinks})}>Cocktails</h1>
<SelectionMenu {drinks} {setView} />
</header>

<main>
<svelte:component this={viewMap[currentView]} {data} {setView} />
</main>