<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import { Attributes } from "svelte-repository-provider";
  import iteratorStore from "../iterator-store.mjs";

  export let branch;

  let entries = iteratorStore(() => branch.entries());
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{branch.name}</h5>
    <ObjectLink object={branch.repository} />
    <Attributes object={branch} />
  </div>

  <ul>
    {#each $entries as entry (entry.name)}
      <li>
        <ObjectLink object={[entry, branch]}>{entry.name}</ObjectLink>
      </li>
    {/each}
  </ul>
</div>
