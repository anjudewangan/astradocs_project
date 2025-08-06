import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

export function AlertDialog() {
  const dialog = useBoolean();

  return (
    <>
      <Button color="info" variant="outlined" onClick={dialog.onTrue}>
        Seamless Integrations
      </Button>

      <Dialog open={dialog.value} onClose={dialog.onFalse}>
        <DialogTitle>{`Seamless Integrations for Effortles's Workflow Optimization`}</DialogTitle>

        <DialogContent sx={{ color: 'text.secondary', paddingBottom: '30px' }}>
          Astradocs integrates seamlessly with various third-party tools to enhance your document
          management experience. Explore our integrations to discover how Astradocs can fit into
          your existing workflow.
        </DialogContent>

      </Dialog>
    </>
  );
}
