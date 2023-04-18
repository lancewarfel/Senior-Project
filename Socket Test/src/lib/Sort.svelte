<script>
    import { socketMessageStore } from "./socket";
    import { gameDataStore, playerNameStore } from "./stores";

    $: console.log($playerNameStore)
    $: allData = $gameDataStore
    $: allPlayers = $playerNameStore
    
    
    $: userInputs = []
    
    //$: storedPlayers = database.query("SELECT NAME FROM RLPLAYERS")
    const storedPlayer = ["Jay Bailey", "Gavin Maynard", "Isaac Lockwood", "Avery Bradley"]

    function wipeData(){
        gameDataStore.set([])
        playerNameStore.set([])
        socketMessageStore.set({
            event: "default",
            data: {},
        })
    }

    // function submitData(){

        //loop through inputs?

            //if(input!="discard")

                //loop through allData 

                    //if(allData[j].name == allPlayers[i])?? (input index and allPlayer index should be same)

                        //datbase.update("UPDATE RLPLAYERS SET (stat name here) = (stat name here) + allData[j].(stat) WHERE NAME = (userInput[i]))

            // else 
                //do nothing i guess? 
            
    //     wipeData() //reset the gameDataStore
    //}

    
</script>
<body>
    

<h1>Add player to database</h1>

    {#each allPlayers as player, i}
        <div class="all-players">
            <select class="dropdown" bind:value={userInputs[i]}>
                <option value="discard"></option>
                {#each storedPlayer as name}
                    <option value="{name}">{name}</option>
                {/each}
            </select>
            <p class="player">{player}</p>
        </div>
    {/each}


    <a href="#/" >
        <button type="button" on:click={wipeData}>Submit Data</button>
    </a>
</body>










<!-- this section shows how to loop through all data to reach a player name (in svelte, the idea can be transferred to js) -->

    <!-- {#each allData as data, i}
    {#if i > 0}
        <h1>Game {i}</h1>
        {#each data as player}
            <p>{player.name}</p>
        {/each}
    {/if}
{/each} -->

<style>

    .all-players{
        display: flex;
        flex-direction: row;
    }

    .player{
        padding-left: 10px;
        margin-top: 3px;
        
    }

    .dropdown{
        height:25px
    }
</style>