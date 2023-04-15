const WebSocket = require('ws');

// Create a new WebSocket server instance
const wss = new WebSocket.Server({ port: 3000 });

const clients = [];

console.log("listening for connection")

// Add an event listener to handle incoming connections
wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    const port = req.socket.remotePort;

    console.log('WebSocket connection opened', req.socket.remoteAddress);
    // Add an event listener to handle incoming messages
    ws.on('message', (message) => {
        const parsed = JSON.parse(message);

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
                    }
                }
                break;
            case "Overlay Manager":
                for (i in clients) {
                    if (clients[i].component == parsed.receiver) {
                        clients[i].ws.send(JSON.stringify(parsed))
                    }
                }
                break;
            default:
                console.log("Something went wrong")
        }

        console.log(clients.length, " clients connected");
    });

    // Add an event listener to handle connection close
    ws.on('close', () => {
        let client
        
        for (i in clients){
            if(ws == clients[i].ws){
                client = clients[i]
                clients.splice(i, 1)
                
            }
        }
        console.log('WebSocket connection closed:', client.component);
        console.log(clients.length, " clients connected")
        
    });
});