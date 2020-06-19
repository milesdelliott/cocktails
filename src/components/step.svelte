<script>
export let step;
import add from './steps/add'
import garnish from './steps/garnish'
import mix from './steps/mix'
import pour from './steps/pour'
const typeMap = {
    add,
    garnish,
    mix,
    pour,
}
</script>

<svelte:component this={typeMap[step.type]} {step} />