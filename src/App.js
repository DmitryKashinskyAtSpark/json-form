import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    appButton: {
      '&:not(:last-child)': {
        marginRight: theme.spacing(2),
      }
    },
  }),
);

function App() {
  const { appButton } = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <Button className={appButton} variant="contained" color="primary" onClick={handleOpen}>
          Edit Controlling Org
        </Button>
        <Button className={appButton} variant="contained" color="secondary" onClick={handleOpen}>
          Edit Deal
        </Button>
      </header>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
