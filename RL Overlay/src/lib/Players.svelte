<script>
  import { playersStore } from "./stores.js";

  $: playerList = $playersStore;
</script>

<div class="playerelement">
  {#if playerList}<!-- test to remove this and add if replay -->

    <div class="blueContainer">
      {#each playerList as player}
        {#if player.team == 0}
          <div class="bluePlayer">
            <p class="blueName">{player.name}</p>
            <p class="blueBoostNum">{player.boost}</p>
            <div class="blueBar">
              <div id="blueBoost" style="width: {player.boost}%" />
            </div>
          </div>
        {/if}
      {/each}
    </div>

    <div class="orangeContainer">
      {#each playerList as player}
        {#if player.team == 1}
          <div class="orangePlayer">
            <p class="orangeBoostNum">{player.boost}</p>
            <p class="orangeName">{player.name}</p>
            <div class="orangeBar">
              <div id="orangeBoost" style="width: {player.boost}%" />
            </div>
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .blueContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 250px;
    height: 150px;
    position: absolute;
    top: 2%;
    left: 0%;
  }

  .bluePlayer {
    background-image: linear-gradient(rgb(0, 80, 201), rgb(0, 0, 0));
    height: 30px;
    width: 200px;
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

  .blueName {
    position: absolute;
    padding-left: 10px;
    margin: 0%;
    color: white;
    left: 1%;
  }

  #blueBoost {
    background-color: rgb(0, 85, 255);
    width: 175px;
    height: 5px;
    top: 11%;
    left: 0.5%;
    position: absolute;
  }

  .blueBar {
    position: relative;
    width: 173px;
    height: 6px;
    top: 70%;
    left: 10px;
    background-color: rgba(84, 84, 84, 0.409);
  }

  .orangeContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    width: 250px;
    height: 150px;
    position: absolute;
    top: 2%;
    right: 0%;
  }

  .orangePlayer {
    background-image: linear-gradient(rgb(145, 87, 0), rgb(0, 0, 0));
    height: 30px;
    width: 200px;
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

  .orangeName {
    position: absolute;
    margin: 0%;
    color: white;
    right: 12px;
  }

  .orangeBar {
    position: relative;
    width: 175px;
    height: 6px;
    top: 70%;
    left: 13px;
    background-color: rgba(84, 84, 84, 0.409);
  }

  #orangeBoost {
    background-color: rgb(255, 136, 0);
    width: 175px;
    height: 5px;
    top: 11%;
    right: 0.5%;
    position: absolute;
  }

  .orangeBoostNum {
    position: absolute;
    padding-left: 5px;
    margin: 0%;
    color: white;
    left: 23%;
  }
  .blueBoostNum {
    position: absolute;
    padding-right: 5px;
    margin: 0%;
    color: rgb(255, 255, 255);
    right: 24%;
  }
</style>
