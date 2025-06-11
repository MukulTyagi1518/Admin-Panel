import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { FiSend, FiMessageSquare } from 'react-icons/fi';

const socket = io('http://localhost:5000');

function AdminChat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('chat_history', (msgs) => {
      setChat(msgs);
    });

    socket.on('receive_message', (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat_history');
      socket.off('receive_message');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === '') return;
    socket.emit('send_message', {
      sender: 'admin',
      message,
    });
    setMessage('');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <FiMessageSquare style={styles.icon} />
        <h2 style={styles.title}>Admin Support Chat</h2>
      </div>

      <div style={styles.chatBox}>
        {chat.map((msg, idx) => (
          <div key={idx} style={msg.sender === 'admin' ? styles.adminMsg : styles.userMsg}>
            <div style={styles.message}>
              <strong>{msg.sender === 'admin' ? 'You' : 'User'}:</strong> {msg.message}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your response..."
        />
        <button onClick={sendMessage} style={styles.sendButton}>
          <FiSend style={styles.sendIcon} />
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: 20,
    maxWidth: 600,
    margin: '40px auto',
    backgroundColor: '#fff',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    borderBottom: '1px solid #ddd',
    paddingBottom: 10,
    
    background: 'linear-gradient(135deg, #4e6ef2, #3c4de5)',
    color: '#fff',
    borderRadius: '12px 12px 0 0',
  },
  icon: {
    fontSize: 28,
    marginRight: 15,
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  chatBox: {
    height: 400,
    overflowY: 'auto',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.1)',
    marginBottom: 20,
  },
  userMsg: {
    textAlign: 'left',
    marginBottom: 12,
    padding: '10px 14px',
    backgroundColor: '#f1f1f1',
    color: '#333',
    borderRadius: '18px 18px 18px 0',
    maxWidth: '75%',
    display: 'block', // Ensure messages are stacked vertically
  },
  adminMsg: {
    textAlign: 'right',
    marginBottom: 12,
    padding: '10px 14px',
    backgroundColor: '#f1f1f1',
    color: '#333',
    borderRadius: '18px 18px 0 18px',
    maxWidth: '75%',
    display: 'block', // Ensure messages are stacked vertically
    marginLeft: 'auto',
  },
  message: {
    fontSize: '14px',
    lineHeight: '1.4',
  },
  inputRow: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    borderRadius: 25,
    border: '1px solid #ddd',
    fontSize: '14px',
    outline: 'none',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ',
    
  },
  inputFocus: {
    borderColor: '#4e6ef2',
    boxShadow: '0 0 10px rgba(78, 110, 242, 0.4)',
  },
  sendButton: {
    backgroundColor: '#4e6ef2',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  sendButtonHover: {
    backgroundColor: '#3c4de5',
  },
  sendIcon: {
    fontSize: 20,
  },
};

export default AdminChat;
