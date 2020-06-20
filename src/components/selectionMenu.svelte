<script>
import drinks from '../drinks.json'
export let setView;
const getRandom = () => drinks[Math.floor(Math.random() * (0, drinks.length))]
</script>

<style>
div {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
}
button {
    flex: 1 1 auto;
    background: white;
    color: purple;
    border: solid 2px purple;
    margin: 0;
    cursor: pointer;
}
button:hover {
    color: white;
    background: purple;
}
button:first-child {
    border-right: none;
}
</style>

<div>
    <button on:click={setView('drinkList', {drinks})}>Browse</button>
    <button on:click={setView('drink', {drink: getRandom()})}>Get Random</button>
</div>

