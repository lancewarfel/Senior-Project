<script>
    import { gameDataStore, playerNameStore } from "./stores";

    $: console.log($playerNameStore)
    $: allData = $gameDataStore
    $: allPlayers = $playerNameStore

    function wipeData(){
        gameDataStore.set([])
    }

    // function submitData(){

        //loop through inputs?{
            //if(input!=discard){

                //loop thorugh allData for all instances of allPlayers[i] (input index and allPlayer index should be same)
                    //datbase.update("UPDATE RLPLAYERS SET (stat name here) = (stat name here) + (player stat) WHERE NAME = (input?))

            //} else {
                //do nothing i guess? 
            //}
            
        //}


    //     gameDataStore.set([]) //reset the gameDataStore
    // }

    //$: storedPlayers = database.query("SELECT NAME FROM RLPLAYERS")
    //$: userInputs = []?
</script>




<h1>Add player to database</h1>
{#each allPlayers as player}
<!-- dropdown that has "discard", then all values from storedPlayers -->
<!-- add each input to array? "discard" if no selection  -->
    <p>{player}</p>
{/each}


<a href="#/" >
    <button type="button" on:click={wipeData}>Submit Data</button>
</a>












<!-- how to loop through all data to reach a player name -->
    <!-- {#each allData as data, i}
    {#if i > 0}
        <h1>Game {i}</h1>
        {#each data as player}
            <p>{player.name}</p>
        {/each}
    {/if}
{/each} -->