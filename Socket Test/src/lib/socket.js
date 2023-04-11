import { Server } from "socket.io";
import { messageStore } from "./stores";

export const io = new Server(3000);


// io.on("connection", (socket) => {
//     // send a message to the client
//     socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

//     // receive a message from the client
//     socket.on("hello from client", (...args) => {
//         // ...
//     });


// });