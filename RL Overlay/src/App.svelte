<script>
  import { processor } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";
  import Score from "./lib/Score.svelte";
  import Spectating from "./lib/Sectating.svelte";
  import Players from "./lib/Players.svelte";

  $: console.log($socketMessageStore);
  $: processor($socketMessageStore);
</script>

<body>
  <div class="score"><Score /></div>
  <div class="players"><Players /></div>
  <div class="spectating"><Spectating /></div>

  <!-- {$replayStore} -->
</body>

<style>
  body {
    zoom: 155%;
  }
</style>
