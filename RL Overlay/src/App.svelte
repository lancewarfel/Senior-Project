<script>
  import { processor } from "./lib/processor";
  import { socketMessageStore, newSocket } from "./lib/socket";
  import { playerDataStore } from "./lib/stores";
  import Score from "./lib/Score.svelte";
  import Spectating from "./lib/Sectating.svelte";
  import Players from "./lib/Players.svelte";

  $: console.log($socketMessageStore);
  $: processor($socketMessageStore);

  // $: message = {
  //     receiver: "Overlay Manager",
  //     event: "gameData",
  //     data: $playerDataStore
  //   }

  // function sendMsg(){
  //   newSocket.send(JSON.stringify(message))
  // }
</script>

<body>
  
  <div class="score"><Score /></div>
  <div class="players"><Players /></div>
  <div class="spectating"><Spectating /></div>

  <!-- <button class="btn" type="button" on:click={sendMsg}>Send Packet</button> -->

  <!-- {$replayStore} -->
</body>

<style>
  body {
    zoom: 155%;
  }

  /* .btn {
    position: absolute;
    left: 50%;
  } */
</style>
