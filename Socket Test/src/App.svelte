<script>
    import { writable } from "svelte/store";
  import { socketMessageStore, newSocket } from "./lib/socket";
  import { gameDataStore } from "./lib/stores";

  
  // const gameDataStore = writable([])


  $: seriesLength = 1;
  $: winScore = seriesLength / 2 + .5;
  $: blueScore = 0;
  $: orangeScore = 0;
  $: gameNum = 1;

  $: hasWinner = false;

  $: header = "Defualt Header";
  $: blueName = "Default Blue";
  $: orangeName = "Defaule Orange";

  $: message = {
    receiver: "Overlay",
    event: "game:update_data",
    data: {
      event: "game:update_data",
      data: {
        header: header,
        blueName: blueName,
        blueScore: blueScore,
        orangeName: orangeName,
        orangeScore: orangeScore,
        seriesLength: seriesLength,
        gameNum: gameNum
      },
    },
  };
  
  function updateData() {
    newSocket.send(JSON.stringify(message));
  }

  function bluePlus(){
    if (blueScore == winScore - 1 && hasWinner) {
      alert("Series score has been reached");
    }
    if (hasWinner) {
      alert("Series score has been reached");
    } else {
      blueScore++;
      

      if (blueScore == winScore) hasWinner = true;
      gameNum++;
    }
  }

  function blueMinus(){
    if (blueScore == winScore) hasWinner = false;

    if (blueScore > 0) {
      blueScore--;
      gameNum--;
    } else {
      alert("Cannot have negative score.");
    }
  }

  function orangePlus(){
    if (orangeScore == winScore - 1 && hasWinner) {
      alert("Series score has been reached");
    }
    if (hasWinner) {
      alert("Series score has been reached");
    } else {
      orangeScore++;
      

      if (orangeScore == winScore) hasWinner = true;
      gameNum++;
    }
  }

  function orangeMinus(){
    if (orangeScore == winScore) hasWinner = false;

    if (orangeScore > 0) {
      orangeScore--;
      gameNum--;
    } else {
      alert("Cannot have negative score.");
    }
  }

  function reset(){
    seriesLength = 1;
    winScore = seriesLength / 2 + .5;
    blueScore = 0;
    orangeScore = 0;
    gameNum = 1;

    hasWinner = false;

    header = "Defualt Header";
    blueName = "Default Blue";
    orangeName = "Defaule Orange";
  }

  $: console.log($socketMessageStore, handleGameData());

  function handleGameData(){  
    $gameDataStore = [
        ...$gameDataStore,
        $socketMessageStore.data
    ]
    console.log($gameDataStore)
  }
  // connectWebSocket()
</script>

<div>
  <div class="series">
    <h1>Series length:</h1>
    <div class="seriesButton">

      <button type="button" on:click={() => (seriesLength = 1)} 
        on:click={updateData}>1</button>

      <button type="button" on:click={() => (seriesLength = 3)} 
        on:click={updateData}>3</button>

      <button type="button" on:click={() => (seriesLength = 5)} 
        on:click={updateData}>5</button>

      <button type="button" on:click={() => (seriesLength = 7)} 
        on:click={updateData}>7</button>

    </div>
  </div>
  <p>Series Length: {seriesLength}</p>
  <p>Win Score: {winScore}</p>
  <p>Winner: {hasWinner}</p>
  <p>Game Number: {gameNum}</p>

  <input
      id="headerInput"
      type="text"
      bind:value={header}
      placeholder="Enter a Header"
    />

  <fieldset>
    <legend>Team 1 (left side)</legend>
    <p>Team Name:</p>

    <input
      id="t1Name"
      type="text"
      bind:value={blueName}
      placeholder="Enter Team Name"
    />
    <button type="button" on:click={bluePlus}
    on:click={updateData}>+</button>
    <p>{blueScore}</p>
    <button type="button" on:click={blueMinus}
    on:click={updateData}>-</button>
  </fieldset>

  <fieldset>
    <legend>Team 2 (right side)</legend>
    <p>Team Name:</p>
    <input
      id="t2Name"
      type="text"
      bind:value={orangeName}
      placeholder="Enter Team Name"
    />
    <button type="button" on:click={orangePlus}
    on:click={updateData}>+</button>
    <p>{orangeScore}</p>
    <button type="button" on:click={orangeMinus}
    on:click={updateData}>-</button>
  </fieldset>

  <button on:click={updateData}>Submit Data</button>

  <!-- <button type="button" on:click={switchInfo}>Switch info</button> -->

<button type="button" on:click={reset}
on:click={updateData}>reset data</button>


  <!-- <button type="button" on:click={endGame}>End Game</button> -->

  
  <!-- <button on:click={connectWebSocket}>Connect to WebSocket</button> -->
</div>