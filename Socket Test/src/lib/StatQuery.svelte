<script>
    import { databaseStore, databaseNames } from "./stores";

    $: storedPlayers = $databaseNames
    $: database = $databaseStore

    let input
    
</script>


<h1>Player Stats</h1>
<a href="#/controller">Go back</a>
<select class="dropdown" bind:value={input}>
    <option value="blank" disabled selected>Select Player...</option>
    {#each storedPlayers as name, i}
        <option value="{i}">{name}</option>
    {/each}
</select>
<!-- This page is to simply select an item from the database and display its properties -->

{#if input!="blank"}
<table>
    <tr>
        <th>Name</th>
        <td>{database[input]?.first_name} {database[input]?.last_name}</td>
    </tr>
    <tr>
        <th>Gamertag</th>
        <td>{database[input]?.ign}</td>
    </tr>
    <tr>
        <th>Games Played</th>
        <td>{database[input]?.games_played}</td>
    </tr>
    <tr>
        <th>Total Goals</th>
        <td>{database[input]?.goals}</td>
    </tr>
    <tr>
        <th>Total Shots</th>
        <td>{database[input]?.shots}</td>
    </tr>
    <tr>
        <th>Total Assists</th>
        <td>{database[input]?.assists}</td>
    </tr>
    <tr>
        <th>Total Saves</th>
        <td>{database[input]?.saves}</td>
    </tr>
    <tr>
        <th>Total Demos</th>
        <td>{database[input]?.demos}</td>
    </tr>
</table>
{/if}
<style>
    table{
        position: absolute;
        top: 18%;
        left: 0%;
    }
    th,td{
        width: 200px;
        height: 50px;
        border: 1px solid;
        color: white;
    }
    td{
        text-align: center;
    }
    a:link{
        text-decoration: none;
        color: white;
    }
    a:hover{
        color: red;
    }
    .dropdown{
        position: absolute;
        border-radius: 4px;
        border: 2px solid rgba(0, 0, 0, 0.849);
        top: 14%;
        left: 1%;
    }
    h1{
        position: absolute;
        color: white;
        left: 30%;
        top: 0%;
    }
</style>