<script>
    import { newSocket, dbMsg } from "./socket";

    let ign
    let firstName
    let lastName

  function addData(){
    newSocket.send(JSON.stringify({
      receiver: "Server",
      event: "add_player",
      data: {
        ign: ign,
        first_name: firstName,
        last_name: lastName
      }
    })) 

    newSocket.send(JSON.stringify(dbMsg))
  }
</script>



<a href="#/database_edit">Go back</a>
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
  <button type="submit" value="Add to Database" on:click={addData}><a href="#/database_edit" style="color: black; text-decoration: none;">Add to Database</a></button>  
</form>