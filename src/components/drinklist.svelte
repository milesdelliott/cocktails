<script>
import {onMount} from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
import Tag from './tag'
import Toggles from './toggles'
export let data = {};
export let setView
let filter = false;
let group = false;
$: tags = [...new Set(data.drinks.reduce((collectedTags, cocktail) => {
    return [...collectedTags, ...cocktail.tags];
}, []))]
let activeTags = []
let sectioning = 'base'
const handleTag = tag => e => {
    activeTags = activeTags.indexOf(tag) === -1 ? [...activeTags, tag] : activeTags.filter(thisTag => thisTag !== tag)
}
const handleSection = section => e => {
    sectioning = section
}
$: filteredDrinks = activeTags.length > 0 ? {main: data.drinks.filter(d => d.tags.reduce((a,v) => a ? a : activeTags.indexOf(v) !== -1, false))} : {main: data.drinks};
$: sectionedDrinks = sectioning ? filteredDrinks.main.reduce((a, drink) => {
    drink[sectioning].forEach(section => {
        if (section === 'citrus') {
            return;
        }
        if (a.hasOwnProperty(section)) {
            a[section].push(drink);
        }
        else {
            a[section] = [drink];
        }
    });
    return a;
}, {}) : filteredDrinks
</script>

<style>
li {
    list-style-type: none;
    padding: 0.5rem;
}
h3 {
    text-transform: capitalize
}
.filter, .group {
    display: flex;
}
.filter ul {
    margin: 0;
}
button {
    height: 2.5rem;
        --color: purple;
    --reverse: #fff;
display: inline-block;
padding: 0.5rem;
color: var(--color);
border: solid 2px var(--color);
text-transform: capitalize;
border-radius: 1.5rem;
background: transparent;
cursor: pointer;
position: relative;
}
button:before {
    content: "";
    border: solid 2px var(--color);
    border-radius: 1.5rem;
    background: var(--color);
    position: absolute;
    left: -1%;
    top:0;
    height: 100%;
    width: 101%;
    transform: scale(0);
    transform-origin: center center;
    transition: all ease .2s;
    z-index: -1;
}
button.active {
    color: var(--reverse);
}
button.active:before {
    transform: scale(1);
}
.tags {
transition: all ease .2s;
}

.tags.inactive {
    transform: translateX(-100%);
    
}
.clip {
    overflow: hidden;
}
</style>
<div class="filter">
<button class={filter ? 'active' : 'inactive'} on:click={() => filter = !filter}>Filter</button>
<div class="clip">
<ul class={`tags ${filter ? 'active' : 'inactive'}`}>
    {#each tags as tag }
        <Tag isActive={activeTags.indexOf(tag) !== -1} on:click={handleTag(tag)} name={tag} />
    {/each}
</ul>
</div>
</div>
<div class="group">
<p>Group By:</p>
<Toggles activeVal={sectioning} onChange={handleSection} items={[ 'base', 'tags' ]} />
</div>
<ul>
{#each Object.keys(sectionedDrinks) as drinkSection }
<li>
<h3> {drinkSection} </h3>
<ul>
{#each sectionedDrinks[drinkSection] as drink}
<li><a href="://cocktails.miles.vc" on:click|preventDefault={setView('drink', {drink})}>{drink.name}</a></li>
{/each}
</ul>
</li>

{/each}
</ul>