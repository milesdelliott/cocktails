<script>
import {onMount} from 'svelte';
import Tag from './tag'
export let data = {};
export let setView
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

</style>
<p>Filter</p>
<ul class="tags">
    {#each tags as tag }
        <Tag isActive={activeTags.indexOf(tag) !== -1} on:click={handleTag(tag)} name={tag} />
    {/each}
</ul>
<p>Group By</p>
<ul class="tags">
    {#each ['tags', 'base'] as section }
        <Tag isActive={section === sectioning} on:click={handleSection(section)} name={section} />
    {/each}
</ul>
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