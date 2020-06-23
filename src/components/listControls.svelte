<script>
import Tag from './tag'
import Toggles from './toggles'
import Button from './button.svelte'
import ArrowButton from './arrowButton.svelte'
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
position: relative;
display: flex;
--color: #999;
    padding: 2px 2px 2px 4rem;
    border: solid 2px var(--color);
    border-radius: 1.5rem;
    
     z-index: 4;
}
.tags:after {
content: "";
position:absolute;
background-color: var(--background);
border-radius: 1.5rem;
z-index: 0;
top:0;
left: 0;
height: 100%;
width: 100%;
}

.tags ul {
    padding: 0;
    
   
}

.filter {
    overflow: hidden;
    margin-left: -0.75rem;
    padding-left: 0.75rem;
}
.tags.inactive {
    transform: translateX(-100%);
    
}
.tags.active {
    transform: translateX(-4rem);
}
.filter-button-wrapper {
    display: inline-block;
    transition: all ease .2s;
    position: absolute;
    right: 10px;
    z-index: -2;
    transform: translateX(100%);
}
</style>


<div class="group">
    <Toggles activeVal={$sectioning} onChange={handleSection} items={[ 'base', 'tags' ]} />
    <div class={`filter ${filter ? 'active' : 'inactive'}`}>
    <div class={`clip ${filter ? 'active' : 'inactive'}`}>
        <div class={`tags ${filter ? 'active' : 'inactive'}`}>
            <ul >
                {#each tags as tag }
                    <Tag active={$activeTags.indexOf(tag) !== -1} on:click={handleTag(tag)}>{tag}</Tag>
                {/each}
            </ul>
            <div class="filter-button-wrapper">
                <Button shape="arrow-right" active={filter} on:click={() => filter = !filter}>Filter</Button>
            </div>
       </div>
    </div>
    
</div>
</div>
