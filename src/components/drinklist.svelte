<script>
import {onMount} from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
import Tag from './tag'
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
.filter ul, .group ul {
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
background: var(--reverse);
cursor: pointer;
}
button.active {
    background: var(--color);
    color: var(--reverse);
}
</style>
<div class="filter">
<button class={filter ? 'active' : 'inactive'} on:click={() => filter = !filter}>Filter</button>
{#if filter}
<ul class="tags" transition:slide="{{duration: 300, easing: quintOut }}">
    {#each tags as tag }
        <Tag isActive={activeTags.indexOf(tag) !== -1} on:click={handleTag(tag)} name={tag} />
    {/each}
</ul>
{/if}
</div>
<div class="group">
<button class={group ? 'active' : 'inactive'} on:click={() => group = !group}>Change Grouping</button>
{#if group}
<ul class="tags" transition:slide="{{duration: 300, easing: quintOut }}">
    {#each ['tags', 'base'] as section }
        <Tag isActive={section === sectioning} on:click={handleSection(section)} name={section} />
    {/each}
</ul>
{/if}
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