const WebSocket = require("ws");
const EventEmitter = require("events");

 //in-memory event emitter to simulate Pub/Sub
const eventBus = new EventEmitter();

const PORT = 8082;


const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`WebSocket server running on ws://localhost:${PORT}`);
});

// Function to broadcast a message to all clients in a specific room
const broadcastToRoom = (room, message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client.room === room) {
		console.log("sendind messages to clients")
      client.send(JSON.stringify(message));
    }
  });
};


eventBus.on("broadcast", (payload) => {
  console.log(`Broadcasting to room: ${payload.room}, message: ${JSON.stringify(payload)}`);
  broadcastToRoom(payload.room, payload);
  broadcastToRoom(payload.room, {room:"User-1",message:"Answers from another user"});
});


wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    try {
      const { action, room, data } = JSON.parse(message);
		console.log(action, room, data)	
      switch (action) {
        case "join":
          ws.room = room;
          ws.send(JSON.stringify({ message: `Joined room: ${room}` }));
          console.log(`Client joined room: ${room}`);
          break;

        case "message":
          // Publish the message to the event bus
          const outgoingMessage = { room, message: data };
          eventBus.emit("broadcast", outgoingMessage);
          console.log(`Message emitted to room ${room}: ${data}`);
          break;

        default:
          ws.send(JSON.stringify({ error: "Invalid action" }));
      }
    } catch (err) {
      console.error("Error handling message:", err.message);
      ws.send(JSON.stringify({ error: "Invalid message format" }));
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
