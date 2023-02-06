<script>
  import { processor } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";
  import { blueTeamStore, orangeTeamStore, timeStore } from "./lib/stores";

  $: console.log({ $socketMessageStore });
  $: processor({ $socketMessageStore });
</script>

<body>
  <p>Blue Score: {$blueTeamStore}</p>
  <p>Orange Score: {$orangeTeamStore}</p>
  <p>Time: {$timeStore / 60} : {$timeStore % 60}</p>
</body>
