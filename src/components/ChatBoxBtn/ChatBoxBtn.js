import { useState } from 'react';
import { IconButton } from '@mui/material';
import ChatBox from '../Chatbox/Chatbox';
import ChatIcon from '@mui/icons-material/Chat';

function ChatBoxBtn() {
  const [showComponent, setShowComponent] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setShowComponent(true);
    setButtonVisible(false);
  };

  const handleChatBoxOpen = (data) => {
    setShowComponent(false);
    setButtonVisible(data);
  };

  return (
    <>
      {buttonVisible && (
        <IconButton onClick={handleButtonClick} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <ChatIcon />
        </IconButton>
      )}
      {showComponent && <ChatBox boolean={!buttonVisible} onDataFromChild={handleChatBoxOpen} />}
    </>
  );
}

export default ChatBoxBtn;
