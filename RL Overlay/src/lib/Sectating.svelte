<script>
  import { targetPlayerStore } from "./stores";
  import Boost from "./Boost.svelte";
  $: target = $targetPlayerStore;
</script>

{#if $targetPlayerStore}<!-- add to remove when replay -->
  <div class="spectating">
    <div class="name">
      <p class="targetName">{target.name}</p>
    </div>
    <div class="all-stats">
      <div class="stat">
        <p class="title">Score</p>
        <p class="value">{target.score}</p>
      </div>
      <div class="stat">
        <p class="title">Goals</p>
        <p class="value">{target.goals}</p>
      </div>
      <div class="stat">
        <p class="title">Assists</p>
        <p class="value">{target.assists}</p>
      </div>
      <div class="stat">
        <p class="title">Saves</p>
        <p class="value">{target.saves}</p>
      </div>
      <div class="stat">
        <p class="title">Demos</p>
        <p class="value">{target.demos}</p>
      </div>
    </div>
   
    
  </div>
    
  <Boost percent={target.boost} />
    
{/if}

<style>
  .spectating{
    position: absolute;
    left: 0%;
    bottom: 0%;
    display: flex;
    flex-direction: row;
  }
  
  .name {
    width: 150px;
    height: 30px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 85, 255));
  }

  .all-stats {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 35px;
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

  .targetName {
    position: absolute;
    left: 10px;
    padding: 0%;
    margin: 0%;
    color: white;
    font-size: x-large;
  }

  .stat{
    margin: 0%;
    padding: 0%;
    display: flex;
  }

  .title{
    color: white;
  }

  .value{
    padding-left: 5px;
    color: white;
  }
</style>
