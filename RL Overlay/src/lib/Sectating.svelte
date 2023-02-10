<script>
  import { targetPlayerStore } from "./stores";

  $: target = $targetPlayerStore;
</script>

{#if $targetPlayerStore}<!-- add to remove when replay -->
  <div class="player">
    <p class="player">Spectating: {target.name}</p>
    <p class="boost">Boost: {target.boost}</p>
    <p class="score">Score: {target.score}</p>
    <p class="goals">Goals: {target.goals}</p>
    <p class="assists">Assists: {target.assists}</p>
    <p class="saves">Saves: {target.saves}</p>
    <p class="shots">Shots: {target.shots}</p>
    <p class="demos">Demos: {target.demos}</p>
  </div>
{/if}

<style>
  /* playercard and boost and stuff, make different divs */
</style>
