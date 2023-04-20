<script>
    import { databaseNames, databaseStore, indexStore } from "./stores";
    import { newSocket, dbMsg } from "./socket";

    $: list = $databaseNames
    $: database = $databaseStore



    function deleteData(index){
        newSocket.send(JSON.stringify({
            receiver: "Server",
            event: "delete_player",
            data: {
                ign: database[index]?.ign
            }
        }))

        newSocket.send(JSON.stringify(dbMsg))
    }

    function editData(index){
        indexStore.set(index)
    }
</script>

<a href="#/">Go back</a>
<a href="#/database_edit/add">Add Data</a>

{#if list}
{#each list as player, i}
    <div class="entry">
        <p>{player}</p>
        <p><a href="#/database_edit/edit " on:click={() => editData(i)}>Edit</a></p>
        <p><a href="#/database_edit" on:click={() => deleteData(i)}>Delete</a></p>
    </div>
{/each}
    
{/if}

<!-- This page is to edit the database -->

<style>
    .entry {
        display: flex;
        flex-direction: row;
    }

    .entry p {
        margin-right: 10px;
    }
</style>