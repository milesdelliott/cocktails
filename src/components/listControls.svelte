<script>
import Tag from './tag'
import Toggles from './toggles'
import Button from './button.svelte'
import ArrowButton from './arrowButton.svelte'
import Filter from './filterBar.svelte'
import {drinks, activeTags, sectioning} from '../drinkStore';
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

.group {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}


</style>


<div class="group">
    <Toggles activeVal={$sectioning} onChange={handleSection} items={[ 'base', 'tags' ]} />
    <Filter {tags} {activeTags} {handleTag} />
</div>
