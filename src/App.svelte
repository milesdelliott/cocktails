<script>
	import Drinklist from './components/drinklist'
	import drinks from './drinks.json'
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Cocktails</h1>

<Drinklist drinks={drinks} />