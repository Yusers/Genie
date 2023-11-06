import React, { useState, useRef, useEffect } from 'react';
import { Paper, TextField, Box, IconButton, Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import axios from 'axios';

const severAddress = 'https://yusers.github.io/genie-ui/chat';

function ChatBox(props) {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const chatbox = document.getElementById('chatbox');
    chatbox.scrollTop = chatbox.scrollHeight;
  }, [conversation]);

  const handleClose = () => {
    props.onDataFromChild(isOpen);
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setConversation((prevConversation) => [
      ...prevConversation,
      {
        user: 'Guess',
        text: message,
      },
    ]);

    axios
      .post('http://localhost:443/chat', { prompt: message })
      .then((res) => {
        let botMessage = res.data.trim();
        if (message.trim().toLowerCase() === 'hello') {
          botMessage = `Hello Guess, How can I help you?`;
        } else if (message.toLowerCase().includes('website')) {
          botMessage = `Website Genie giúp các bạn mở rộng gu ăn mặc, thời trang nói chung.`;
        }

        setConversation((prevConversation) => {
          const updatedConversation = [...prevConversation];
          updatedConversation[updatedConversation.length - 1].text = message;
          updatedConversation.push({ user: 'Genie', text: botMessage });
          return updatedConversation;
        });
      })
      .catch((err) => {
        console.error(err);
      });

    setMessage('');
  };

  return (
    <>
      {isOpen && (
        <Box
          component={Paper}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            width: 300,
            height: 400,
            overflow: 'hidden',
            padding: 2,
            bgcolor: '#F4F4F4', // Change the background color here
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #ddd',
            }}
          >
            <Box>
              <strong>Chat với Thần đèn</strong>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            id='chatbox'
            sx={{
              maxHeight: 'calc(80% - 60px)', // Adjusted max height
              overflowY: 'auto',
            }}
          >
            {conversation.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.user === 'Guess' ? 'right' : 'left',
                  marginBottom: '8px',
                }}
              >
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </Box>
          <form onSubmit={handleSubmit}>
            <Box
              display='flex'
              alignItems='center'
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '8px',
                background: 'white',
                borderTop: '1px solid #ddd',
              }}
            >
              <TextField
                variant='outlined'
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ref={inputRef}
              />
              <Button type='submit' variant='contained' color='primary'>
                Send
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </>
  );
}

export default ChatBox;
