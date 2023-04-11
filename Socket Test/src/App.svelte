<script>
  import {
    headerStore,
    blueNameStore,
    orangeNameStore,
    footerStore,
  } from "./lib/stores";

  let message = {
    receiver: "Overlay",
    event: "game:update_data",
    data: {
      event: "game:update_data",
      data: {
        header: $headerStore,
        blueName: $blueNameStore,
        orangeName: $orangeNameStore,
        footer: $footerStore,
      },
    },
  };
  let socket;

  function connectWebSocket() {
    // Create a new WebSocket connection to the server
    socket = new WebSocket("ws://localhost:3000");

    const testMsg = {
      receiver: "clients",
      event: "",
      data: "Overlay Manager",
    };

    // Add an event listener to handle connection open
    socket.addEventListener("open", (event) => {
      console.log("WebSocket connection opened");
      socket.send(JSON.stringify(testMsg));
    });

    // Add an event listener to handle incoming messages
    socket.addEventListener("message", (event) => {
      console.log(`Received message from server: ${event.data}`);
    });

    // Add an event listener to handle connection close
    socket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed");
    });
  }

  function sendMessage() {
    // Send a message to the server
    socket.send(JSON.stringify(message));
  }
</script>

<div>
  <button on:click={sendMessage}>Send Packet</button>
</div>

<button on:click={connectWebSocket}>Connect to WebSocket</button>
