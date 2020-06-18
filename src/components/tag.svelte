<script>
    export let name;
    export let isActive = false;
</script>

<style>
.tag {
display: inline-block;
margin-right: 0.5rem;
}
.tag .tag-button {
display: inline-block;
padding: 0.5rem;
border: solid 1px black;
}
.tag.active .tag-button {
    background: black;
    color: white;
}
</style>

<li class="tag { isActive ? 'active' : 'inactive'}">
    <button class="tag-button" on:click>{name}</button>
</li>