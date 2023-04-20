<script>
    import { databaseStore, databaseNames } from "./stores";

    $: storedPlayers = $databaseNames
    $: database = $databaseStore

    let input
    
</script>



<a href="#/controller">Go back</a>
<select class="dropdown" bind:value={input}>
    <option value="blank"></option>
    {#each storedPlayers as name, i}
        <option value="{i}">{name}</option>
    {/each}
</select>
<!-- This page is to simply select an item from the database and display its properties -->

{#if input!="blank"}
<h1>Name</h1>
<p>{database[input]?.first_name} {database[input]?.last_name}</p>
<h1>Gamertag</h1>
<p>{database[input]?.ign}</p>
<h1>Games Played</h1>
<p>{database[input]?.games_played}</p>
<h1>Total Goals</h1>
<p>{database[input]?.goals}</p>
<h1>Total Shots</h1>
<p>{database[input]?.shots}</p>
<h1>Total Assists</h1>
<p>{database[input]?.assists}</p>
<h1>Total Saves</h1>
<p>{database[input]?.saves}</p>
<h1>Total Demos</h1>
<p>{database[input]?.demos}</p>
{/if}