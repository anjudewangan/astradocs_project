import { forwardRef } from 'react';

import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ----------------------------------------------------------------------

export function TransitionsDialog() {
  const dialog = useBoolean();

  return (
    <div>
      <Button variant="outlined" color="success" onClick={dialog.onTrue}>
        Supported Integrations
      </Button>

      <Dialog
        keepMounted
        open={dialog.value}
        TransitionComponent={Transition}
        onClose={dialog.onFalse}
      >
        <DialogTitle>{`Explore All Supported Integration's`}</DialogTitle>

        <DialogContent sx={{ color: 'text.secondary', paddingBottom: '30px' }}>
          1. Google Workspace <br />
          2. Microsoft 365 <br />
          3. Slack <br />
          4. Salesforce <br />
          5. Zapier
        </DialogContent>

      </Dialog>
    </div>
  );
}
