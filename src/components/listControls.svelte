<script>
import Tag from './tag'
import Toggles from './toggles'
import Button from './button.svelte'
import {drinks, activeTags, sectioning} from '../drinkStore';
let filter = false;
let group = false;
$: tags = [...new Set(drinks.reduce((collectedTags, cocktail) => {
    return [...collectedTags, ...cocktail.tags];
}, []))]
const handleTag = tag => e => {
    activeTags.update(storedTags => {
        if (!storedTags.indexOf) {
            return false;
        }
        return storedTags.indexOf(tag) === -1 ? [...storedTags, tag] : storedTags.filter(thisTag => thisTag !== tag)
    })
}
const handleSection = section => e => {
    sectioning.set(section)
}
</script>

<style>

.filter, .group {
    display: flex;
    align-items: center;
}

.filter ul {
    margin: 0;
}

.tags {
transition: all ease .2s;
overflow: visible;
padding: 0;
}

.tags.inactive {
    transform: translateX(-100%);
    
}
.clip.inactive {
    overflow: hidden;
}
.clip.active {
    overflow: visible;
}
.filter-button-wrapper {
    margin-left: 2rem;
}
</style>


<div class="group">
    <Toggles activeVal={$sectioning} onChange={handleSection} items={[ 'base', 'tags' ]} />
    <div class="filter-button-wrapper">
        <Button active={filter} on:click={() => filter = !filter}>Filter</Button>
    </div>
</div>
<div class="filter">
    <div class={`clip ${filter ? 'active' : 'inactive'}`}>
        <ul class={`tags ${filter ? 'active' : 'inactive'}`}>
            {#each tags as tag }
                <Tag active={$activeTags.indexOf(tag) !== -1} on:click={handleTag(tag)}>{tag}</Tag>
            {/each}
        </ul>
    </div>
</div>