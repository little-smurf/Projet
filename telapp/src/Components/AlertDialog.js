import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


function AlertDialog({ open, title, message, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>window.location.href="http://localhost:3000/form"} color="error">
          Cancel
        </Button>
        <Button onClick={()=>window.location.href="http://localhost:3000/dashboardClient"} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
