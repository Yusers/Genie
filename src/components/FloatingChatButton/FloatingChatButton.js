import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const FloatingChatButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleOpen}
      >
        <ChatIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Chat Box</DialogTitle>
        <DialogContent>
          <DialogContentText>Chat content goes here...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FloatingChatButton;
