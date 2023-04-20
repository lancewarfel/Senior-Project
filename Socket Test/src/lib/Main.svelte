<script>
    import { databaseStore, playerNameStore } from "./stores";
    import { newSocket, dbMsg } from "./socket";
    import { get } from "svelte/store";

    $: list = $databaseStore
    // $: console.log($playerNameStore)

    function getDB(){
        newSocket.send(JSON.stringify(dbMsg))
    }
</script>


<body>
    <a href="#/controller" on:click={getDB}><p>Controller</p></a>
    <a href="#/database_edit" on:click={getDB}><p>Edit Database</p></a>

    <button type="button" on:click={getDB}>Get DB</button>

    <!-- {#each list as player}
        <p>{player.ign}</p>
    {/each}   -->
</body>


<!-- This page is the initial page when the electron app launches -->