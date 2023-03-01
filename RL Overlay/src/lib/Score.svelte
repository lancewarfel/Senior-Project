<script>
  import {
    blueTeamStore,
    orangeTeamStore,
    timeStore,
    headerStore,
    footerStore,
    orangeNameStore,
    blueNameStore,
  } from "./stores";
  import Time from "./Time.svelte";

  $: blueScore = $blueTeamStore;
  $: orangeScore = $orangeTeamStore;
</script>

{#if $timeStore}
  <div class="header">
    <p class="head">{$headerStore}</p>
  </div>

  <div class="teamDetails">
    <div class="pt1">
      <p class="home">{$blueNameStore}</p>
    </div>

    <div class="scoreback">
      <p class="score">{blueScore}</p>
    </div>

    <div class="pt2">
      <p class="timer"><Time /></p>
    </div>

    <div class="scoreback2">
      <p class="score2">{orangeScore}</p>
    </div>

    <div class="pt3">
      <p class="away">{$orangeNameStore}</p>
    </div>
  </div>

  <div class="footer">
    <p class="games">{$footerStore}</p>
  </div>

  <div class="gameboard">
    <div class="scoreboard4">
      <div class="game1out"><div id="game1" /></div>
      <div class="game1out"><div id="game2" /></div>
      <div class="game1out"><div id="game3" /></div>
      <div class="game1out"><div id="game4" /></div>
      <div class="game1out"><div id="game5" /></div>
    </div>
    <div class="scoreboard4pt2">
      <div class="game2out"><div id="game6" /></div>
      <div class="game2out"><div id="game7" /></div>
      <div class="game2out"><div id="game8" /></div>
      <div class="game2out"><div id="game9" /></div>
      <div class="game2out"><div id="game10" /></div>
    </div>
  </div>

  <!-- <div class="scorebug">
    <table class="team-info">
      <tr class="team-left">
        <div class="scorebox">
          <th class="score">{blueScore}</th>
        </div>
        <div class="namebox">
          <th class="name">Blue Team</th>
        </div>
      </tr>
      <tr class="team-right">
        <div class="scorebox">
          <th class="score">{orangeScore}</th>
        </div>
        <div class="namebox">
          <th class="name">Orange Team</th>
        </div>
      </tr>
    </table>
  </div> -->
{/if}

<style>
  .header {
    position: absolute;
    width: 200px;
    height: 15px;
    background-image: linear-gradient(rgb(94, 94, 94), rgb(0, 0, 0));
    top: 0%;
    right: 42%;
  }

  .teamDetails {
    position: absolute;
    width: 620px;
    height: 40px;
    top: 15px;
    right: 25%;
  }

  .footer {
    position: absolute;
    width: 150px;
    height: 25px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(94, 94, 94));
    top: 50px;
    right: 44%;
    z-index: 1;
  }

  .gameboard {
    position: absolute;
    top: 50px;
    left: 32.75%;
    width: 450px;
    height: 20px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(94, 94, 94));
    clip-path: polygon(
      0 0%,
      0% 0%,
      95% 0,
      100% 0,
      100% 85%,
      97% 100%,
      5% 113%,
      0% 85%,
      0% 10%
    );
  }

  .scoreboard4 {
    display: flex;
    flex-direction: row;
    position: absolute;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 150px;
    height: 20px;
  }

  #game1 {
    position: absolute;
    background-color: blue;
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 8px;
    opacity: 0%;
  }

  #game2 {
    position: absolute;
    background-color: blue;
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 37.5px;
    opacity: 0%;
  }

  #game3 {
    position: absolute;
    background-color: blue;
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 66px;
    opacity: 0%;
  }

  #game4 {
    position: absolute;
    background-color: blue;
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 95.5px;
    opacity: 0%;
  }

  #game5 {
    position: absolute;
    background-color: blue;
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 124.5px;
    opacity: 0%;
  }

  .scoreboard4pt2 {
    display: flex;
    flex-direction: row;
    position: absolute;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 150px;
    height: 20px;
    right: 5px;
  }

  #game6 {
    position: absolute;
    background-color: rgb(255, 136, 0);
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 8.5px;
    opacity: 0%;
  }

  #game7 {
    position: absolute;
    background-color: rgb(255, 136, 0);
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 37.5px;
    opacity: 0%;
  }

  #game8 {
    position: absolute;
    background-color: rgb(255, 136, 0);
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 66.5px;
    opacity: 0%;
  }

  #game9 {
    position: absolute;
    background-color: rgb(255, 136, 0);
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 95.5px;
    opacity: 0%;
  }

  #game10 {
    position: absolute;
    background-color: rgb(255, 136, 0);
    height: 5px;
    width: 17.5px;
    top: 7.75px;
    left: 124.5px;
    opacity: 0%;
  }

  .home {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: white;
    top: 25%;
    left: 2%;
  }

  .away {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: white;
    top: 25%;
    right: 2%;
  }

  .scoreback {
    position: inherit;
    width: 30px;
    height: 40px;
    background-color: blue;
    left: 40%;
  }

  .scoreback2 {
    position: inherit;
    width: 30px;
    height: 40px;
    background-color: rgb(255, 136, 0);
    right: 36%;
  }

  .score {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: white;
    top: 15%;
    left: 35%;
    font-size: x-large;
  }

  .score2 {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: white;
    top: 15%;
    right: 35%;
    font-size: x-large;
  }

  .head {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: white;
    left: 3%;
    font-size: 75%;
  }

  .games {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: white;
    left: 10%;
    top: 10%;
  }

  .game1out {
    background-color: rgba(255, 255, 255, 0.635);
    height: 6px;
    width: 19px;
    opacity: 100%;
  }

  .game2out {
    background-color: rgba(255, 255, 255, 0.635);
    height: 6px;
    width: 19px;
    opacity: 100%;
  }

  .pt1 {
    left: 0px;
    position: inherit;
    width: 250px;
    height: 35px;
    background-image: linear-gradient(
      to top right,
      rgb(0, 85, 255),
      rgb(9, 4, 81)
    );
    clip-path: polygon(
      0 10%,
      10% -10%,
      100% 0,
      100% 0%,
      100% 100%,
      100% 100%,
      5% 100%,
      0% 85%,
      0% 10%
    );
  }

  .pt2 {
    left: 280px;
    position: inherit;
    width: 60px;
    height: 35px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(53, 53, 53));
  }

  .pt3 {
    right: 0px;
    position: inherit;
    width: 250px;
    height: 35px;
    background-image: linear-gradient(
      to top left,
      rgb(255, 136, 0),
      rgb(59, 32, 1)
    );
    clip-path: polygon(
      0 0%,
      0% 0,
      95% 0,
      100% 15%,
      100% 85%,
      95% 100%,
      0% 100%,
      0% 90%,
      0% 10%
    );
  }

  .scoreback {
    position: inherit;
    width: 30px;
    height: 35px;
    background-color: rgb(0, 85, 255);
    left: 250px;
  }

  .scoreback2 {
    position: inherit;
    width: 30px;
    height: 35px;
    background-color: rgb(255, 136, 0);
    left: 340px;
  }

  .timer {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: white;
    top: 10%;
    left: 10%;
    font-size: x-large;
  }
</style>
