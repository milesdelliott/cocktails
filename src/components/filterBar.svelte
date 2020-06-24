<script>
import Tag from './tag';
import Button from './button'
export let handleTag = () => false;
export let tags = []
export let activeTags = []
let filter = false;

</script>

<style>

.filter {
    display: flex;
    align-items: center;
    position: relative;
    overflow: visible;
        margin-left: -0.75rem;
    padding-left: 0.75rem;
    flex: 1 1 auto;
    justify-content: flex-end;
}
.filter ul {
    margin: 0;
}

.tags {
overflow: visible;
position: absolute;
--reverse: purple;
--color: #fff;
    padding: 2px 2px 2px 2px;
    border: solid 2px var(--reverse);
    border-radius: 1.5rem;
    border-top-right-radius: 0;
    background: var(--reverse);
     z-index: 4;
     top: 1.7rem;
     transform: scaleY(0);
    transition: all ease .2s;
    transform-origin: top;
   right: 0;
}
.tags:after {
content: "";
position:absolute;
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
.tags-wrapper {
    overflow: hidden;
}

.tags.active {
    transform: scaleY(1) ;
    transition-delay: 0;
}

.filter-button-wrapper {
    display: block;
    transition: all ease .2s;
    position: relative;
    --borderRadius: 1rem 1rem 0 0;
    --beforeResting: translateY(100%);
    --beforeActive: translateY(0);
}

.active .filter-button-wrapper {
    --borderRadius: 1rem 1rem 0 0;
}

.filter-button-wrapper span {
    transition: all ease .105s;
    display: inline-block;
    transform: rotate(-90deg);
}
.active .filter-button-wrapper span {
    transform: rotate(90deg);
    
}
</style>

<div class={`filter ${filter ? 'active' : 'inactive'}`}>
 <div class="filter-button-wrapper">
                <Button shape="round" active={filter} on:click={() => filter = !filter}>Filter <span>&#10170;</span></Button>
            </div>
        <div class={`tags ${filter ? 'active' : 'inactive'}`}>
            <ul >
                {#each tags as tag }
                    <Tag active={$activeTags.indexOf(tag) !== -1} on:click={handleTag(tag)}>{tag}</Tag>
                {/each}
            </ul>
        </div>
</div>