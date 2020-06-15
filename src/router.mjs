import base from "consts:base";
import { Router, route } from "svelte-guard-history-router";
import Home from "./pages/Home.svelte";

import AuthAccept from "./pages/AuthAccept.svelte";

import {
  providersRoute,
  providerRoute,
  repositoryGroupsRoute,
  repositoryGroupRoute,
  repositoriesRoute,
  repositoryRoute,
  branchRoute,
  pullRequestRoute,
  contentEntriesRoute,
  contentEntryRoute
} from "./routes/repositories.mjs";

export const router = new Router(
  [
    route("*", Home),
    route("/auth/accept", AuthAccept),
    providersRoute,
    providerRoute,
    repositoryGroupRoute,
    repositoriesRoute,
    repositoryGroupsRoute,
    repositoryRoute,
    branchRoute,
    pullRequestRoute,
    contentEntriesRoute,
    contentEntryRoute
    ],
  base
);

export default router;
