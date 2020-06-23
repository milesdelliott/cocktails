<script>
    export let active = false;
    export let styles = '';
    export let shape = 'round';
</script>

<style>

button {
    --color: purple;
    --reverse: #fff;
    display: inline-block;
    padding: var(--padding, 0.25rem 0.75rem);
    color: var(--color);
    text-transform: capitalize;
    cursor: pointer;
    position: relative;
    overflow: visible;
    z-index: 2;
    font-size: 0.75rem;
    margin: 0;
    border-radius: 0;
    background-color: var(--reverse);
    border: solid 2px var(--color);
    border-right: none;
}
button:before {
        content: "";
    position: absolute;
    right: 0;
    top: -2px;
    height: 0;
    width: 0;
    border: 13px solid transparent;
    border-left-color: var(--color);
    transform: translateX(100%); 
}
button:after {
     content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 0;
    width: 0;
    border: 11px solid transparent;
    border-left-color: var(--reverse);
    transform: translateX(96%);
}

button.active {
    color: var(--reverse);
}

</style>


<button class:active style={styles} class={`${shape} has-shape`} on:click><slot></slot></button>