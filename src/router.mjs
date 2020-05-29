import { Router, route, NotFound } from "svelte-guard-history-router";
import About from "./pages/About.svelte";
import Settings from "./pages/Settings.svelte";
import Repositories from "./pages/Repositories.svelte";
import Repository from "./pages/Repository.svelte";
import RepositoryGroups from "./pages/RepositoryGroups.svelte";
import Branch from "./pages/Branch.svelte";
import ContentEntry from "./pages/ContentEntry.svelte";

import base from "consts:base";

export const router = new Router(
  [
    route("*", NotFound),
    route("/about", About),
    route("/settings", Settings),
    route("/repository", Repositories),
    route("/repository/:a/:b", Repository),
    route("/repository/:a", Repository),
    route("/group", RepositoryGroups),
    route("/repository/:a/:b/:c", Branch),
    route("/repository/:a/:b/:c/:d", ContentEntry)
  ],
  base
);
