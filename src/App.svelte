<script>
	import Drinklist from './components/drinklist'
	import Drink from './components/drink'
	import drinks from './drinks.json'
	import SelectionMenu from './components/selectionMenu'
	let currentView = SelectionMenu;
	let data = {drinks}
	let drink = drinks[5];
	const viewMap = {
		'drink': Drink,
		'drinkList': Drinklist,
		'selectionMenu': SelectionMenu
	}
	const setView = (view, viewData) => () => {
		currentView = viewMap[view]
		data = viewData
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Cocktails</h1>

<svelte:component this={currentView} {data} {setView} />