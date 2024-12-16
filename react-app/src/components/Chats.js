import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('ws://your-socket-url'); // Replace with your WebSocket server URL

const Chat = ({ roomId }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.emit('joinRoom', roomId);

        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.emit('leaveRoom', roomId);
            socket.off('message');
        };
    }, [roomId]);

    const sendMessage = () => {
        if (message) {
            socket.emit('sendMessage', { roomId, message });
            setMessage('');
        }
    };

    return (
        <div>
            <div>
                <h3>Chat Room</h3>
                <div>
                    {messages.map((msg, idx) => (
                        <p key={idx}>{msg}</p>
                    ))}
                </div>
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
