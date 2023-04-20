import { writable } from "svelte/store";

//Connect to server
export const newSocket = new WebSocket("ws://localhost:3000");

const testMsg = {
  receiver: "clients",
  event: "",
  data: "Overlay Manager"
}

export const dbMsg = {
  receiver: "Server",
  event: "database_retrieve",
  data: ""
}

newSocket.onopen = () => {
  console.log("Connected to server.");
  newSocket.send(JSON.stringify(testMsg))
  newSocket.send(JSON.stringify(dbMsg))
};


newSocket.onerror = (err) => {
  console.error("WebSocket error", err);
};

//Save the latest received message in a store.
export const socketMessageStore = writable({
  event: "default",
  data: {},
});

newSocket.onmessage = ({ data }) => {
  const parsed = JSON.parse(data);
  console.log("New msg:", parsed);

  socketMessageStore.set(parsed);
    
};