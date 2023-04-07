<script>
  // import { sendMsg } from "./lib/socket";
  import { messageStore } from "./lib/stores";
  const newSocket = new WebSocket("ws://localhost:2323");

  function sendShit() {
    newSocket.send(JSON.stringify($messageStore));
  }
</script>

<body>
  <button on:click={sendShit}>Send Msg</button>
  <button>HEY</button>
  <p>WHERE AM I</p>
</body>

<style></style>
