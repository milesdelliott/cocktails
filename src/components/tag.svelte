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
    height: 2.5rem;
        --color: purple;
    --reverse: #fff;
display: inline-block;
padding: 0.5rem;
color: var(--color);
border: solid 2px var(--color);
text-transform: capitalize;
border-radius: 1.5rem;
background: transparent;
cursor: pointer;
position: relative;
}
button:before {
    content: "";
    border: solid 2px var(--color);
    border-radius: 1.5rem;
    background: var(--color);
    position: absolute;
    left: -1%;
    top:0;
    height: 100%;
    width: 101%;
    transform: scale(0);
    transform-origin: center center;
    transition: all ease .2s;
    z-index: -1;
}
.active button {
    color: var(--reverse);
}
.active button:before {
    transform: scale(1);
}
</style>

<li class="{ isActive ? 'active' : 'inactive'}">
    <button on:click>{name === 'tags' ? 'Type' : name}</button>
</li>