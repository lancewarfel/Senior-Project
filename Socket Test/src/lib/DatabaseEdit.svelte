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

<a class="link" href="#/">Go back</a>
<a class="link" href="#/database_edit/add">Add Data</a>
<table>
    {#if list}
    {#each list as player, i}
        <tr>
            <th>{player}</th>
            <td><a href="#/database_edit/edit " on:click={() => editData(i)}>Edit</a></td>
            <td><a href="#/database_edit" on:click={() => deleteData(i)}>Delete</a></td>
        </tr>
    {/each}
        
    {/if}
</table>


<!-- This page is to edit the database -->

<style>
    a:link{
        text-decoration: none;
        color: white;
    }
    a:hover{
        color: red;
    }
    table{
        position: absolute;
        top: 10%;
    }
    th{
        color: white;
        padding: 5px;
        border: 1px solid rgb(255, 255, 255);
    }
    td{
        text-align: center;
        border: 1px solid rgb(255, 255, 255);
        width: 50px;
    }
    .link{
        padding-right: 10px;
    }
</style>