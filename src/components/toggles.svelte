<script>
    export let items;
    export let onChange;
    export let activeVal;
    let activeIndex = 0;
    let refs = []
    const setVal = item => () => {
        onChange(item)();
        refs[0].style.setProperty('--offset', `${items.indexOf(item) * 100}%`)
    }
</script>

<style>
.items {
    --color: #999;
    padding: 2px;
    border: solid 2px var(--color);
border-radius: 1.5rem;
background-color: var(--background, #fcf4ff);
z-index: 5;
margin: 1rem;
}
li {
display: inline-block;
position: relative;
}
button {
    --color: purple;
    --reverse: #fff;
display: inline-block;
padding: 0.5rem;
color: var(--color);
border: none;
text-transform: capitalize;
border-radius: 1.5rem;
background: transparent;
cursor: pointer;
margin: 0;
position: relative;
transition: all ease .2s;
font-size: 0.75rem;
flex: 0 0 auto;
}
.active button {
    color: var(--reverse);
}
li:first-child:before {
    --color: purple;
    
    position: absolute;
    top: 0;
    left: var(--offset, 0);
    height: 100%;
    width: 100%;
    background-color: var(--color);
    border-radius: 1.5rem;
    content: "";
    transition: all ease .2s
}
</style>
<ul class="items">
    {#each items as item, i }
        <li bind:this={refs[i]} class="{ item === activeVal ? 'active' : 'inactive'}">
            <button on:click={setVal(item)}>By {item === 'tags' ? 'Type' : item}</button>
        </li>
    {/each}
</ul>