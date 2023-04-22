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
  <div class="container">
    <div>
      <input
        id="input"
        type="text"
        bind:value={ign}
        placeholder="Gamertag"
        required
      />
    </div>
    <div>
      <input
        id="input"
        type="text"
        bind:value={firstName}
        placeholder="First Name"
        required
      />
    </div>
    <div>
      <input
        id="input"
        type="text"
        bind:value={lastName}
        placeholder="Last Name"
        required
      />
    </div>
    <div>
      <button class="add" type="submit" value="Add to Database" on:click={addData}><a href="#/database_edit" style="color: black; text-decoration: none;">Add to Database</a></button> 
    </div>
  </div>
</form>
<style>
  a:link{
    text-decoration: none;
    color: white;
  }
  a:hover{
    color: red;
  }
  .container{
    position: absolute;
    top: 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>