<script>
    export let active = false;
</script>

<style>

button {
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
overflow: visible;
z-index: 1;
font-size: 0.75rem;
margin: 0;
}
button:before {
    content: "";
    border: solid 2px var(--color);
    border-radius: 1.4rem;
    background: var(--color);
    position: absolute;
    left: -2%;
    top:0;
    height: 100%;
    width: 101%;
    transform: scale(0);
    transform-origin: center center;
    transition: all ease .2s;
    z-index: -1;
}
button:after {
    content: "";
    border-radius: 1.5rem;
    background: transparent;
    position: absolute;
    left: 0;
    top:0;
    height: 100%;
    width: 100%;
    transform: scale(1);
    opacity: 1;
    transform-origin: center center;
    transition: none;
    z-index: -1;
    box-shadow: 0 0 0 0 rgb(51, 6, 51);
}
button.active {
    color: var(--reverse);
}
button.active:before {
    transform: scale(1);
}
button.active:after {
    transition: all ease-out 0.4s;
    opacity: 0;
    box-shadow: 0 0 20px 5px purple;
}
</style>


<button class:active on:click><slot></slot></button>