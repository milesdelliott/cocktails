<script>
    import Button from './button'
    export let active = false;
</script>

<style>
li {
display: inline-block;
margin-right: 0.5rem;
}
</style>

<li>
   <Button {active} on:click><slot></slot></Button>
</li>