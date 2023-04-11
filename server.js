const WebSocket = require('ws');

// Create a new WebSocket server instance
const wss = new WebSocket.Server({ port: 3000 });

const clients = [];

console.log("listening for connection")

// Add an event listener to handle incoming connections
wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    const port = req.socket.remotePort;

    console.log('WebSocket connection opened', req.socket.remotePort);
    // Add an event listener to handle incoming messages
    ws.on('message', (message) => {
        const parsed = JSON.parse(message);

        if (message.receiver == "clients") {
            //find overlay in clients
            //send that shit
        }

        switch (parsed.receiver) {
            case "clients":
                clients.push({
                    component: parsed.data,
                    ws: ws,
                    socket: { ip: ip, port: port }
                })
                break;
            case "Overlay":
                // code block
                for (i in clients) {
                    if (clients[i].component == parsed.receiver) {
                        clients[i].ws.send(JSON.stringify(parsed.data))
                        console.log("i sent it");
                    }
                }
                break;
            case "Overlay Manager":
                //code block
                break;
            default:
                console.log("Something went wrong")
        }

        //else...
        console.log("New msg:", parsed.data);
        console.log(parsed.receiver);
        console.log(clients.length);
    });

    // Add an event listener to handle connection close
    ws.on('close', () => {
        let client = clients.filter(obj => {
            return obj.ws === ws
        })
        clients.delete(client)
        console.log('WebSocket connection closed', client.component);
    });
});