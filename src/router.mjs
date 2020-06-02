import base from "consts:base";
import { Router, route } from "svelte-guard-history-router";
import Home from "./pages/Home.svelte";

import repositoryGroups from "./routes/repository-groups.mjs";
import repositoryGroup from "./routes/repository-group.mjs";
import repositories from "./routes/repositories.mjs";
import repository from "./routes/repository.mjs";
import branch from "./routes/branch.mjs";
import pullRequest from "./routes/pull-request.mjs";
import conentEntries from "./routes/content-entries.mjs";
import conentEntry from "./routes/content-entry.mjs";

export const router = new Router(
  [
    route("*", Home),
    repositoryGroups,
    repositories,
    repositoryGroup,
    repository,
    branch,
    pullRequest,
    conentEntries,
    conentEntry
  ],
  base
);

export default router;