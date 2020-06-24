<script >
	import Drinklist from './components/drinklist'
	import Drink from './components/drink'
	import drinks from './drinks.json'
	import SelectionMenu from './components/selectionMenu'
	import ListControls from './components/listControls'
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

<style lang="scss">
	header {
		--background: #fcf4ff;
		padding: 0 1rem;
		background: var(--background, #fcf4ff);
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 20;
	}
	h1 {
		color: black;
		cursor: pointer;
		margin: 0;
		padding: 1rem 0;
	}
	$break: 560px;
	main {
		
		padding: 0;
		--break: $break;
	}
	
	.content-wrapper {
		padding: 1rem 3rem;
		position: relative;
		@media screen and (min-width: $break) {
			padding: 1rem 10rem;
		
	}
	

	}
	
</style>


<main>
<header>
<h1 on:click={setView('drinkList', {drinks})}>Bar Minder</h1>
<SelectionMenu {drinks} {setView} />
<ListControls />
</header>
<div class="content-wrapper">
<svelte:component this={viewMap[currentView]} {data} {setView} />
</div>
</main>