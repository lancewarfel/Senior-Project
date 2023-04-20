<script>
    import { newSocket, dbMsg } from "./socket";
    import { databaseStore } from "./stores";

    let database

    export let index = 0

    let old_ign
    let ign
    let firstName
    let lastName
    let games_played
    let goals
    let shots
    let assists
    let saves
    let demos
 
    if ($databaseStore){
      database = $databaseStore
      old_ign = database[index].ign
      ign = database[index].ign
      firstName = database[index].first_name
      lastName = database[index].last_name
      games_played = database[index].games_played
      goals = database[index].goals
      shots = database[index].shots
      assists = database[index].assists
      saves = database[index].saves
      demos = database[index].demos
    }

    function updateData(){
        newSocket.send(JSON.stringify({
            receiver: "Server",
            event: "edit_player",
            data: {
                old_ign: old_ign,
                ign: ign,
                first_name: firstName,
                last_name: lastName,
                games_played: games_played,
                goals: goals,
                shots: shots,
                assists: assists,
                saves: saves,
                demos: demos
            }
        }))

        newSocket.send(JSON.stringify(dbMsg))
    }
    
</script>

<a href="#/database_edit">Go back</a>

<h1>{index}</h1>

<form>
<input
    id="input"
    type="text"
    bind:value={ign}
    placeholder="Gamertag"
    required
  />
<input
    id="input"
    type="text"
    bind:value={firstName}
    placeholder="First Name"
    required
  />
  <input
    id="input"
    type="text"
    bind:value={lastName}
    placeholder="Last Name"
    required
  />
  <input
    id="input"
    type="text"
    bind:value={games_played}
    placeholder="Total number of games"
    required
  />
<input
    id="input"
    type="text"
    bind:value={goals}
    placeholder="Total number of goals"
    required
  />
  <input
    id="input"
    type="text"
    bind:value={shots}
    placeholder="Total number of shots"
    required
  />
  <input
    id="input"
    type="text"
    bind:value={assists}
    placeholder="Total number of assists"
    required
  />
  <input
    id="input"
    type="text"
    bind:value={saves}
    placeholder="Total number of saves"
    required
  />
  <input
    id="input"
    type="text"
    bind:value={demos}
    placeholder="Total number of demos"
    required
  />
  <button type="submit" on:click={updateData}><a href="#/database_edit" style="color: black; text-decoration: none;">Update</a></button>  
</form>