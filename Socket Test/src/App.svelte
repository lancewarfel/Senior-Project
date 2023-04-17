<script>
  import url from "./lib/urls";
  import Controller from "./lib/Controller.svelte";
  import DatabaseEdit from "./lib/DatabaseEdit.svelte";
  import StatQuery from "./lib/StatQuery.svelte";
  import Sort from "./lib/Sort.svelte";
  import Main from "./lib/Main.svelte";
  
</script>

<div>
  {#if $url.hash === "" || $url.hash === "#/"}
    <Main/>
  {:else if $url.hash === "#/controller"}
    <Controller />
  {:else if $url.hash === "#/database_edit"}
    <DatabaseEdit/>
  {:else if $url.hash === "#/database_query"}
    <StatQuery/>
  {:else if $url.hash === "#/sort_data"}
    <Sort/>
  {:else}
    <h1>404</h1>
  {/if}
</div>