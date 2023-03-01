<script>
  import { targetPlayerStore } from "./stores";
  import Boost from "./Boost.svelte";
  $: target = $targetPlayerStore;
</script>

{#if $targetPlayerStore}<!-- add to remove when replay -->
  <!-- <div class="player">
    <p class="player">Spectating: </p>
    <p class="score">Score: </p>
    <p class="goals">Goals: </p>
    <p class="assists">Assists: </p>
    <p class="saves">Saves: </p>
    <p class="shots">Shots: {target.shots}</p>
    <p class="demos">Demos: </p>
    <Boost percent={target.boost} />
  </div> -->

  <div class="data">
    <p class="statsp">{target.name}</p>
  </div>
  <div class="data2">
    <div>
      <p class="statss">Score</p>
      <p class="pscore">{target.score}</p>
    </div>
    <div>
      <p class="statsg">Goals</p>
      <p class="goals">{target.goals}</p>
    </div>
    <div>
      <p class="statsa">Assists</p>
      <p class="assists">{target.assists}</p>
    </div>
    <div>
      <p class="statssa">Saves</p>
      <p class="saves">{target.saves}</p>
    </div>
    <div>
      <p class="statsd">Demos</p>
      <p class="demos">{target.demos}</p>
    </div>
  </div>

  <Boost percent={target.boost} />
{/if}

<style>
  .data {
    position: absolute;
    bottom: 0%;
    left: 0px;
    width: 150px;
    height: 30px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 85, 255));
  }

  .data2 {
    display: flex;
    flex-direction: row;
    position: absolute;
    align-items: center;
    gap: 45px;
    bottom: 0%;
    left: 150px;
    width: 450px;
    height: 30px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 85, 255));
    clip-path: polygon(
      0 0%,
      0% 0%,
      100% 0%,
      98% 0%,
      96% 100%,
      95% 100%,
      0% 100%,
      0% 90%,
      0% 10%
    );
  }

  .statsp {
    position: absolute;
    left: 10px;
    padding: 0%;
    margin: 0%;
    color: white;
    font-size: x-large;
  }

  .statss {
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .pscore {
    position: absolute;
    top: 6px;
    left: 40px;
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .statsg {
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .goals {
    position: absolute;
    top: 6px;
    left: 130px;
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .statsa {
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .assists {
    position: absolute;
    top: 6px;
    left: 220px;
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .statssa {
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .saves {
    position: absolute;
    top: 6px;
    left: 310px;
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .statsd {
    padding: 0%;
    margin: 0%;
    color: white;
  }

  .demos {
    position: absolute;
    top: 6px;
    left: 400px;
    padding: 0%;
    margin: 0%;
    color: white;
  }
</style>
