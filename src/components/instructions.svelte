<script>
export let instructions = [];
import Step from './step'
</script>

{#if instructions.length > 0}
<h2>Instructions</h2>
<ul>
{#each instructions as step}
<Step {step} />
{/each}
</ul>
{/if}