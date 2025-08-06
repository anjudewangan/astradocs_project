import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

export function FormDialog() {
  const dialog = useBoolean();

  return (
    <div>
      <Button variant="outlined" color="warning" onClick={dialog.onTrue}>
        Integration Guides
      </Button>

      <Dialog open={dialog.value} onClose={dialog.onFalse}>
        <DialogTitle>Get Started with Setup Instructions</DialogTitle>

        <DialogContent>
          <Typography sx={{ mb: 3 }}>
            Access comprehensive guides on how to set up and leverage Astradocs with each supported
            integration. Ensure a smooth transition and maximize efficiency across your preferred
            platforms.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
