<script>
    export let name;
    export let isActive = false;
</script>

<style>
li {
display: inline-block;
margin-right: 0.5rem;
}
button {
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
.active button {
    background: var(--color);
    color: var(--reverse);
}
</style>

<li class="{ isActive ? 'active' : 'inactive'}">
    <button on:click>{name === 'tags' ? 'Type' : name}</button>
</li>