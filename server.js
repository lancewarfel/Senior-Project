const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('playerStats.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err) return console.error(err.message);
});

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
        console.log(parsed.event);

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
            case "Server":
                if(parsed.event == "database_retrieve"){
                    let sql = `SELECT * FROM rlplayers`
                    let list = []
                    db.all(sql,[],(err,rows)=>{
                        if(err) return console.error(err.message);
                        rows.forEach(row=>{
                            list.push(row)
                        })
                        console.log(list);
                        for (i in clients) {
                            if (clients[i].component == "Overlay Manager") {
                                clients[i].ws.send(JSON.stringify(formatMsg(list)))
                            }
                        }
                    })

                    break;
                }

                if(parsed.event == "add_player"){
                    let sql = `INSERT INTO rlplayers 
                    VALUES (
                        '${parsed.data.ign}',
                        '${parsed.data.first_name}',
                        '${parsed.data.last_name}',
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    )`
                    db.run(sql)
                    break;
                }

                if(parsed.event == "delete_player"){
                    let sql = `DELETE FROM rlplayers WHERE ign = '${parsed.data.ign}'`
                    db.run(sql)
                    break;
                }

                if(parsed.event == "edit_player"){
                    let sql = `UPDATE rlplayers 
                    SET 
                        ign = '${parsed.data.ign}',
                        first_name = '${parsed.data.first_name}',
                        last_name = '${parsed.data.last_name}',
                        games_played = ${parsed.data.games_played},
                        goals = ${parsed.data.goals},
                        shots = ${parsed.data.shots},
                        assists = ${parsed.data.assists},
                        saves = ${parsed.data.saves},
                        demos = ${parsed.data.demos}
                     WHERE ign = '${parsed.data.old_ign}'`
                    db.run(sql,[], function (err) {
                        if (err) return console.log(err.message)
                    })
                    break;
                }

                if(parsed.event == "update_player"){
                    console.log("using this data", parsed.data);
                    let sql = `UPDATE rlplayers 
                    SET 
                        games_played = games_played + ${parsed.data.games_played},
                        goals = goals + ${parsed.data.goals},
                        shots = shots + ${parsed.data.shots},
                        assists = assists + ${parsed.data.assists},
                        saves = saves + ${parsed.data.saves},
                        demos = demos + ${parsed.data.demos}
                     WHERE ign = '${parsed.data.ign}'`
                    db.run(sql,[], function (err) {
                        if (err) return console.log(err.message)
                    })
                    break;
                }
                break;
            default:
                console.log("Something went wrong")
        }
        
        // console.log(clients.length, " clients connected");
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

function formatMsg(list){
    return {
        event: "database",
        data: list
    }
}

//create database command if database somehow gets dropped

// db.run(`CREATE TABLE rlplayers(
//     ign TEXT PRIMARY KEY,
//     first_name TEXT,
//     last_name TEXT,
//     games_played,
//     goals INTEGER,
//     shots INTEGER,
//     assists INTEGER,
//     saves INTEGER,
//     demos INTEGER
// )`)
