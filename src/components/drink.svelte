<script>
export let data;
import Instructions from './instructions'
$: drink = data.drink
</script>

<h1 class="name">{drink.name}</h1>
{#each drink.base as base}
<p class="base">{base}</p>
{/each}

{#if drink.ingredients}
<h2>Ingredients</h2>
<ul>
{#each drink.ingredients as ingredient}
<li>{ingredient}</li>
{/each}
</ul>
{/if}

{#if drink.instructions}
<Instructions instructions={drink.instructions} />
{/if}