<script>
export let drinks;
const tags = [...new Set(drinks.reduce((collectedTags, cocktail) => {
    return [...collectedTags, ...cocktail.tags];
}, []))]
console.log(tags)
let activeTags = []
const handleTag = tag => e => {
    activeTags = activeTags.indexOf(tag) === -1 ? [...activeTags, tag] : activeTags.filter(thisTag => thisTag !== tag)
}
$: filteredDrinks = activeTags.length > 0 ? drinks.filter(d => d.tags.reduce((a,v) => a ? a : activeTags.indexOf(v) !== -1, false)) : drinks;
</script>

<style>
.tag {
display: inline-block;
margin-right: 0.5rem;
}
.tag .tag-button {
display: inline-block;
padding: 0.5rem;
border: solid 1px black;
}
.tag.active .tag-button {
    background: black;
    color: white;
}
</style>
<ul class="tags">
    {#each tags as tag }
        <li class="tag {activeTags.indexOf(tag) === -1 ? 'inactive' : 'active'}">
            <button class="tag-button" on:click={handleTag(tag)}>{tag}</button>
        </li>
    {/each}
</ul>
<ul>
{#each filteredDrinks as drink }
<li>{drink.name}</li>
{/each}
</ul>