<script>
import drinks from '../drinks.json'
export let setView;
const getRandom = () => drinks[Math.floor(Math.random() * (0, drinks.length))]
let showRandomCats = false;
</script>

<div>
    <button on:click={setView('drink', {drink: getRandom()})}>Get Random</button>
    <button on:click={setView('drinkList', {drinks})}>Browse</button>
</div>

{#if showRandomCats}
<div>
<button on:click={setView('drink', {drink: getRandom()})}>Get Random</button>
</div>
{/if}

