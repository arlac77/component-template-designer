<script>
  import { Repository } from "repository-provider";
  import {
    Route,
    DetailRoute,
    MasterRoute
  } from "svelte-guard-history-router";
  import RepositoriesPage from "./pages/Repositories.svelte";
  import RepositoryPage from "./pages/Repository.svelte";
  import RepositoryLink from "./components/RepositoryLink.svelte";

  export let provider;
  export let guard;
</script>

<Route
  path="/repository"
  factory={MasterRoute}
  iteratorFor={transition => provider.repositories()}
  objectInstance={Repository}
  component={RepositoriesPage}
  {guard}>
  Repositories
  <Route
    path="/:group/:repository"
    propertyMapping={{ repository: 'name', group: 'owner.name' }}
    objectFor={transition => provider.repository(transition.params.group + '/' + transition.params.repository)}
    factory={DetailRoute}
    linkComponent={RepositoryLink}
    component={RepositoryPage}>
    <slot />
  </Route>
</Route>
