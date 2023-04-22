<script>   
  import { socketMessageStore, newSocket } from "./socket";
  import { gameDataStore, playerNameStore } from "./stores";

$: seriesLength = 1;
$: winScore = seriesLength / 2 + .5;
$: blueScore = 0;
$: orangeScore = 0;
$: gameNum = 1;

$: hasWinner = false;

$: header = "Defualt Header";
$: blueName = "Default Blue";
$: orangeName = "Default Orange";

$: playerNames = []

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
  orangeName = "Default Orange";
}
$: handleSocketData($socketMessageStore)

function handleSocketData($socketMessageStore){ 
  
  if($socketMessageStore.event == "gameData"){
    $gameDataStore = [
        ...$gameDataStore,
        $socketMessageStore.data
    ]//all data from from game gets stored

    for(var i=0; i<$socketMessageStore.data.length; i++){
      if (!playerNames.includes($socketMessageStore.data[i].name)){
          playerNames.push($socketMessageStore.data[i].name)
          $playerNameStore = playerNames 

        
      }
    }//storing only new names in the series
  }
}
</script>

<div>
  <div class="container">
    <a href="#/"><p>Go back</p></a>
    <a href="#/database_query"><p>View player data</p></a>
    <a href="#/sort_data"><p>Sort data</p></a>
  </div>
    
<div class="series">
  <h1>Series Controller</h1>
  <h3>Best of:</h3>
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
<div class="contain">
  <div>
      <input
      id="headerInput"
      type="text"
      bind:value={header}
      placeholder="Enter a Header"
      />
  </div>
  <div>
    <button on:click={updateData}>Submit Data</button>
  </div>
  <div>
    <button type="button" on:click={reset}
    on:click={updateData}>Reset Data</button>
  </div>

  <!-- <button type="button" on:click={switchInfo}>Switch info</button> -->
  
  
</div>
<fieldset class="Team1">
  <legend class="title">Team 1 (left side)</legend>
  <p class="name">Team Name:</p>
    <input
    id="t1Name"
    type="text"
    bind:value={blueName}
    placeholder="Enter Team Name"
    />
  
  <button class="bt1" type="button" on:click={bluePlus}
  on:click={updateData}>+</button>
  <p class="score">{blueScore}</p>
  <button class="bt2" type="button" on:click={blueMinus}
  on:click={updateData}>-</button>
</fieldset>

<fieldset class="Team2">
  <legend class="title">Team 2 (right side)</legend>
  <p class="name">Team Name:</p>
  <input
    id="t2Name"
    type="text"
    bind:value={orangeName}
    placeholder="Enter Team Name"
  />
  <button class="bt1" type="button" on:click={orangePlus}
  on:click={updateData}>+</button>
  <p class="score">{orangeScore}</p>
  <button class="bt2" type="button" on:click={orangeMinus}
  on:click={updateData}>-</button>
</fieldset>


<!-- <button type="button" on:click={endGame}>End Game</button> -->


<!-- <button on:click={connectWebSocket}>Connect to WebSocket</button> -->
</div>
<style>
.Team1{
  background-image:linear-gradient( rgb(0, 68, 255),rgb(0, 27, 100));
  border: 0px;
  border-radius: 10px;
  position: absolute;
  top: 40%;
  width: 320px;
  height: 150px;
}
.Team2{
  background-image:linear-gradient( rgb(255, 140, 0),rgb(90, 50, 0));
  border: 0px;
  border-radius: 10px;
  top: 70%;
  position: absolute;
  width: 320px;
  height: 150px;
}
.title{
  top: 8px;
  right: 10px;
  position: inherit;
  color: white;

}
.name{
  position: inherit;
  top: 13px;
  color: white;
}
#t1Name{
  position: inherit;
}
#t2Name{
  position: inherit;
}
.bt1{
  top: 45%;
  left: 24%;
  position: inherit;
  width: 30px;
}
.bt2{
  top: 45%;
  position: inherit;
  width: 30px;
}
.score{
  position: inherit;
  top: 37%;
  left: 17%;
  color: white;
}
a:link{
  text-decoration: none;
  color: white;
}
a:hover{
  color: red;
}
.container{

  display: flex;
  gap: 15px;
}
#headerInput{
  position: inherit;
  border-radius: 5px;
  width: 150px;
}
h1,h3{
  color: white;
  text-align: center;
}
.seriesButton{
  position: absolute;
  top: 28%;
  left: 33%;
  display: flex;
  gap: 10px;
}
.contain{
  position: absolute;
  display: flex;
  gap: 6px;
  left: 3%;
  top: 35%;
}
</style>