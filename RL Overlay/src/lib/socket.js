import { writable } from "svelte/store";

//Connect to SOS
const bakkesSocket = new WebSocket("ws://localhost:49122");
const newSocket = new WebSocket("ws://localhost:3000");

const testMsg = {
  receiver: "clients",
  event: "",
  data: "Overlay"
}


bakkesSocket.onopen = () => {
  console.log("Connected to SOS.");
};

newSocket.onopen = () => {
  console.log("Connected to server.");
  newSocket.send(JSON.stringify(testMsg))
};

bakkesSocket.onerror = (err) => {
  console.error("WebSocket error", err);
};

newSocket.onerror = (err) => {
  console.error("WebSocket error", err);
};

//Save the latest received message in a store.
export const socketMessageStore = writable({
  event: "default",
  data: {},
});

bakkesSocket.onmessage = ({ data }) => {
  const parsed = JSON.parse(data);
  console.log("New msg:", parsed);

  socketMessageStore.set(parsed);
};

newSocket.onmessage = ({ data }) => {
  const parsed = JSON.parse(data);
  console.log("New msg:", parsed);

  socketMessageStore.set(parsed);
};