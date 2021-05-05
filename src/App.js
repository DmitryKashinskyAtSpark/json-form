import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Form from './Form';
import dataService from './data/service';

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

const initialDataBucket = {
  data: {},
  schema: {},
  uischema: {}
};

function App() {
  const { appButton } = useStyles();
  const [open, setOpen] = useState(false);
  const [bucket, setBucket] = useState(initialDataBucket);
  const handleClose = () => setOpen(false);
  const handleOpenControllingOrg = async () => {
    setBucket(await dataService.getControllingOrg());
    setOpen(true)
  };
  const handleOpenDeal = () => {
    setOpen(true)
  };
  const handleDataChange = (data, errors) => {
    if (errors) {
      console.error(errors);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button className={appButton} variant="contained" color="primary" onClick={handleOpenControllingOrg}>
          Edit Controlling Org
        </Button>
        <Button className={appButton} variant="contained" color="secondary" onClick={handleOpenDeal}>
          Edit Deal
        </Button>
      </header>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <Form 
            data={bucket.data} 
            schema={bucket.schema}
            uischema={bucket.uischema}
            onChange={handleDataChange}
          ></Form>
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
