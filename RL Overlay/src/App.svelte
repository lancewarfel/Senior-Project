<script>
  import { processor } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";
  import Time from "./lib/Time.svelte";
  import Score from "./lib/Score.svelte";
  import Spectating from "./lib/Sectating.svelte";

  $: console.log($socketMessageStore);
  $: processor($socketMessageStore);
</script>

<body>
  <Score />
  <Time />
  <Spectating />
</body>
