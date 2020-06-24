<script>
import {drinks} from '../drinkStore';
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
    border-radius: 0;
}
button:hover {
    color: white;
    background: purple;
}
button:first-child {
    border-right: none;
}

.icon {
    font-size: 1.2em;
}

.icon.big {
    font-size: 1.5em;
}
.random .icon {
    animation: rotate forwards infinite 3s linear;
    display: inline-block;
    animation-play-state: paused;
    padding-right: 1px;
}
.random:hover .icon, .random:focus .icon {
    animation-play-state: running;
    display: inline-block
}

@keyframes rotate {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}
</style>

<div>
    <button on:click={setView('drinkList', {drinks})}>Browse <span class="icon big">&#8803;</span></button>
    <button class="random" on:click={setView('drink', {drink: getRandom()})}>Random <span class="icon">&#10226;</span></button>
</div>

