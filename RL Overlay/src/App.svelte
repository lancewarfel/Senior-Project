<script>
  import { processor } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";
  import Time from "./lib/Time.svelte";
  import Score from "./lib/Score.svelte";
  import Spectating from "./lib/Sectating.svelte";
  import Players from "./lib/Players.svelte";
  import { replayStore } from "./lib/stores";

  $: console.log($socketMessageStore);
  $: processor($socketMessageStore);
</script>

<body>
  <Score />
  <Time />
  <Players />
  <Spectating />

  <!-- {$replayStore} -->
</body>
