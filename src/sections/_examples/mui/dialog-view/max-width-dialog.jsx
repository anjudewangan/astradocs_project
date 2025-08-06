import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

export function MaxWidthDialog() {
  const dialog = useBoolean();

  const [fullWidth, setFullWidth] = useState(true);

  const [maxWidth, setMaxWidth] = useState('sm');

  const handleMaxWidthChange = useCallback((event) => {
    // @ts-expect-error autofill of arbitrary value is not handled.
    setMaxWidth(event.target.value);
  }, []);

  const handleFullWidthChange = useCallback((event) => {
    setFullWidth(event.target.checked);
  }, []);

  return (
    <>
      <Button variant="outlined" color='error' onClick={dialog.onTrue}>
        Custom Integration Support
      </Button>

      <Dialog
        open={dialog.value}
        maxWidth={maxWidth}
        onClose={dialog.onFalse}
        fullWidth={fullWidth}
      >
        <DialogTitle>Contact Us for Tailored Solutions</DialogTitle>

        <DialogContent>
          <Typography sx={{ color: 'text.secondary', paddingBottom: '30px' }}>
            For unique business needs, we offer custom integration support. Contact our team to
            discuss tailored solutions that align with your organizational requirements.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
