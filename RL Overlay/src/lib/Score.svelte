<script>
  import { blueTeamStore, orangeTeamStore } from "./stores";

  $: blueScore = $blueTeamStore;
  $: orangeScore = $orangeTeamStore;
</script>

{#if blueScore}
  <div class="scorebug">
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
  </div>
{/if}

<style>
</style>
