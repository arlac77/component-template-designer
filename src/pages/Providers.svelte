<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import ProviderLogo from "../components/ProviderLogo.svelte";
  import providerFactories from "../provider-factories.mjs";
  import provider from "../provider.mjs";
  import { api, client_id, redirect_uri, state } from "../auth.mjs";

  async function addProvider(ev) {
    const i = Number.parseInt(ev.srcElement.id.substring(3));
    provider.providers.push(new providerFactories[i]());
    // providersRoute.enter(); // HACK

    /*
    try {
      const url = `${api}/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}& response_type=code&state=${state}`;

      const response = await fetch(url);
      console.log(response);

      window.location = response.url;
    } catch (e) {
      console.log(e);
    }
    */
  }

  export let router;

  const route = router.route;
  const providers = $route.value;
</script>

<table>
  <thead>
    <th>Factories</th>
  </thead>
  <tbody>
    {#each providerFactories as factory, i (i)}
      <tr>
        <td>
          <ProviderLogo provider={factory}/>
          {factory.name}
        </td>
        <td>
          <button id="add{i}" on:click={addProvider}>Add</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<table>
  <thead>
    <th>Active</th>
  </thead>
  <tbody>
    {#each providers as provider}
      <tr>
        <td>
          <ObjectLink object={provider} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
