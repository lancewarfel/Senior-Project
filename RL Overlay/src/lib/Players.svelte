<script>
  import { playersStore } from "./stores.js";

  $: playerList = $playersStore;
</script>

<div class="playerelement">
  {#if playerList}<!-- test to remove this and add if replay -->

    <ul class="blue">
      <h1>left side</h1>
      {#each playerList as player}
        {#if player.team == 0}
          <li>{player.name}</li>
          <li>Boost: {player.boost}</li>
          <li>Score: {player.score}</li>
          <li>Goals: {player.goals}</li>
          <li>Assists: {player.assists}</li>
          <li>Saves: {player.saves}</li>
          <li>Demos: {player.demos}</li>
          <hr />
        {/if}
      {/each}
    </ul>

    <ul class="orange">
      <h1>right side</h1>
      {#each playerList as player}
        {#if player.team == 1}
          <li>{player.name}</li>
          <li>Boost: {player.boost}</li>
          <li>Score: {player.score}</li>
          <li>Goals: {player.goals}</li>
          <li>Assists: {player.assists}</li>
          <li>Saves: {player.saves}</li>
          <li>Demos: {player.demos}</li>
          <hr />
        {/if}
      {/each}
    </ul>
  {/if}
</div>

<style>
  /* .orange{
      right side
    }   */

  /* .blue{
      left side
    } */
</style>
