<script>
import {onMount} from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
import {activeTags, sectioning} from '../drinkStore'
export let data = {};
export let setView

$: filteredDrinks = $activeTags.length > 0 ? {main: data.drinks.filter(d => d.tags.reduce((a,v) => a ? a : $activeTags.indexOf(v) !== -1, false))} : {main: data.drinks};
$: sectionedDrinks = filteredDrinks.main.reduce((a, drink) => {
    drink[$sectioning].forEach(section => {
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
}, {})
</script>

<style lang="scss">
li {
    list-style-type: none;
    padding: 0.75rem 0;
}

h3 {
    text-transform: capitalize;
    
    top: 208px;
    display: inline-block;
    @media screen and (min-width: 560px) {
        position: sticky;
        transform: translateX(-100%);
        text-align: right;
    }

    
    
    padding-right: 2rem;
    height: 0;
}

.all-drinks {
    margin-bottom: 4rem;
    padding: 0;
}
.section-list {
padding: 0;
position: relative;
@media screen and (min-width: 560px) {
    margin-top: -2.5em;
}

}
.drink {
    display: flex;
    justify-content:  space-between;
}

a {
    color: purple;
     padding: 0.5em;
     margin-left: -0.5em;
     border: solid 2px transparent;
     transition: all ease 0.2s;
     border-radius: 1.5rem;
    &:hover, &:focus {
        border-color: currentColor;
        text-decoration: none;
        
        & + .tag-list {
            visibility: visible;
            opacity: 1;
        }
    }
}
.tag-list {
    transition: all ease 0.2s;
    visibility: hidden;
    opacity: 0;
    text-align: right;
    padding: 0.5em 0;
    color: #999;
}

</style>

<ul class="all-drinks">
{#each Object.keys(sectionedDrinks) as drinkSection }
<li>
<h3> {drinkSection} </h3>
<ul class="section-list">
{#each sectionedDrinks[drinkSection] as drink}
<li class="drink">
    <a href="://cocktails.miles.vc" on:click|preventDefault={setView('drink', {drink})}>{drink.name}</a>
    <span class="tag-list">
    {#each drink.tags as tag, i}
    
    {#if i !== drink.tags.length - 1}
    {tag},&nbsp;
    {:else}
    {tag}
    {/if}
    {/each}
    </span>
</li>
{/each}
</ul>
</li>

{/each}
</ul>