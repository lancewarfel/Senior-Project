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
    <h1>Overlay Manager</h1>
    <div class="controller"><a href="#/controller" on:click={getDB}><p>Controller</p></a></div>
    <div class="database"><a href="#/database_edit" on:click={getDB}><p>Edit Database</p></a></div>
    <!--<button type="button" on:click={getDB}>Get DB</button>-->

    <!-- {#each list as player}
        <p>{player.ign}</p>
    {/each}   -->
</body>
<style>
a:link{
    text-decoration: none;
    color: white;
}
a:hover{
    color: red;
}
.controller{
    position: absolute;
    left: 22%;
}
.database{
    left: 55%;
    position: absolute;
}
h1{
    text-align: center;
    color: white;
}
</style>

<!-- This page is the initial page when the electron app launches -->