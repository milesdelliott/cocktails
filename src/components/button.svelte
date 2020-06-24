<script>
    export let active = false;
    export let styles = '';
    export let shape = 'round';
</script>

<style>

button {
        --thisColor: var(--color, purple);
    --thisReverse: var(--reverse, #fff);
display: inline-block;
padding: 0.25rem 0.75rem;
color: var(--thisColor);
border: solid 2px var(--thisColor);
text-transform: capitalize;
border-radius: var(--borderRadius, 1.5rem);
background: transparent;
cursor: pointer;
position: relative;
overflow: hidden;
z-index: 1;
font-size: 0.75rem;
margin: 1px;
transition: ease all .2s;
height: var(--buttonHeight, initial);
width: var(--buttonWidh, initial);
}


button:before {
    content: "";
    border-radius: inherit;
    background: var(--thisColor);
    position: absolute;
    left: -1%;
    top:-3%;
    height: 103%;
    width: 102%;
    transform: var(--beforeResting, scale(0));
    transform-origin: center center;
    transition: all ease-in .2s;
    z-index: -1;
}
button:after {
    content: "";
    border-radius: inherit;
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
    color: var(--thisReverse);
}
button.active:before {
    transform: var(--beforeActive, scale(1));
}
button.active:after {
    transition: all ease-out 0.4s;
    opacity: 0;
    box-shadow: 0 0 20px 5px purple;
}
button.arrow-right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
button.arrow-up{
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
</style>


<button class:active style={styles} class={shape} on:click><slot></slot></button>