<script>
  import {
    blueTeamStore,
    orangeTeamStore,
    timeStore,
    headerStore,
    footerStore,
    orangeNameStore,
    blueNameStore,
    blueSeriesStore,
    orangeSeriesStore,
    seriesLengthStore
  } from "./stores";
  import Time from "./Time.svelte";

  $: blueScore = $blueTeamStore;
  $: orangeScore = $orangeTeamStore;

  $: blueSeries = $blueSeriesStore
  $: orangeSeries = $orangeSeriesStore
  $: winScore = $seriesLengthStore / 2 + .5
</script>

{#if $timeStore}
  <div class="header">
    <p class="head">{$headerStore}</p>
  </div>

  <div class="teamDetails">
    <div class="team1">
      <p class="home">{$blueNameStore}</p>
    </div>

    <div class="scoreback">
      <p class="score">{blueScore}</p>
    </div>

    <div class="time">
      <p class="timer"><Time /></p>
    </div>

    <div class="scoreback2">
      <p class="score2">{orangeScore}</p>
    </div>

    <div class="team2">
      <p class="away">{$orangeNameStore}</p>
    </div>
  </div>

  

  <div class="gameboard">
    <div class="blueSeries">
      {#each Array(winScore) as _, i}
        <div class="sb">
          {#if blueSeries >= i + 1}
            <div class="win" />
          {/if}
        </div>
      {/each}
    </div>
    <div class="orangeSeries">
      {#each Array(winScore) as _, i}
        <div class="sb">
          {#if orangeSeries >= i + 1}
            <div class="win" />
          {/if}
        </div>
      {/each}
    </div>
  </div>
  
  <div class="footer">
    <p class="games">{$footerStore}</p>
  </div>
{/if}

<style>
  .header {
    position: static;
    margin-left: auto;
    margin-right: auto;
    margin-top: -12px;
    width: 200px;
    height: 15px;
    background-image: linear-gradient(rgb(94, 94, 94), rgb(0, 0, 0));
  }

  .teamDetails {
    position: static;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    width: 620px;
    height: 40px;
  }

  .gameboard {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: -5.3px;
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
  
  .footer {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
    width: 150px;
    height: 25px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(94, 94, 94));
  }

  .blueSeries {
    display: inline-flex;
    flex-direction: row-reverse;
    position: absolute;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 150px;
    height: 20px;
  }

  .orangeSeries {
    display: inline-flex;
    flex-direction: row;
    position: absolute;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 150px;
    height: 20px;
    right: 10px;
  }

  .home {
    position: inherit;
    text-align: end;
    padding-right: 7px;
    margin-top: 7px;
    color: white;
    top: 25%;
    left: 10%;
  }

  .away {
    position: inherit;
    text-align: start;
    padding-left: 7px;
    margin-top: 7px;
    color: white;
    top: 25%;
    right: 10%;
  }

  .scoreback {
    position: inherit;
    width: 30px;
    height: 40px;
    background-color: blue;
  }

  .scoreback2 {
    position: inherit;
    width: 30px;
    height: 40px;
    background-color: rgb(255, 136, 0);
  }

  .score {
    text-align: center;
    padding-top: 4px;
    margin: 0%;
    color: white;
    top: 15%;
    left: 35%;
    font-size: x-large;
  }

  .score2 {
    text-align: center;
    padding-top: 4px;
    margin: 0%;
    color: white;
    top: 15%;
    right: 35%;
    font-size: x-large;
  }

  .head {
    text-align: center;
    color: white;
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

  .sb {
    outline: white solid 1.3px;
    height: 7px;
    width: 20px;
    opacity: 100%;
    margin-top: 2px;
  }

  .blueSeries .sb .win {
    background-color: #2e46c0;
    height: 7px;
    width: 20px;
  }

  .orangeSeries .sb .win {
    background-color: #c6632c;
    height: 7px;
    width: 20px;
  }

  .team1 {
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

  .time {
    left: 280px;
    position: inherit;
    width: 60px;
    height: 35px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(53, 53, 53));
  }

  .team2 {
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
    text-align: center;
    margin-top: -19px;
    color: white;
    left: 10%;
    font-size: x-large;
  }
</style>
