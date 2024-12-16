import React, { useState, useEffect } from "react";

const ChatApp = () => {
    const [socket, setSocket] = useState(null);
    const [room, setRoom] = useState("");
    const [isroomJoined, setIsroomJoined] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8082");

        ws.onopen = () => {
            console.log("Connected to WebSocket server");
        };

        ws.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, msg]);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed");
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    const joinRoom = () => {
        setIsroomJoined(true)
        if (socket) {
            socket.send(JSON.stringify({ action: "join", room }));
        }
    };

    const sendMessage = () => {
        if (socket && message) {
            socket.send(JSON.stringify({ action: "message", room, data: message }));
            setMessage("");
        }
    };

    return (
        <div>
            <h1>Chat Room</h1>
            {room && isroomJoined ? (
                <>
                    <h2>Room: {room}</h2>
                    <input
                        type="text"
                        placeholder="Type a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>
                                <strong>{msg.room}:</strong> {msg.message}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Enter room name"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                    />
                    <button onClick={joinRoom}>Join Room</button>
                </div>
            )}
        </div>
    );
};

export default ChatApp;
