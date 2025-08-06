import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }) {
  const [loginPath, setLoginPath] = useState('/dashboard/file');
  useEffect(() => {
    if (window.location.hostname === 'astradocs.in') {
      setLoginPath('https://dashboard.astradocs.in');
    }
    console.log(window.location.hostname);
  }, []);
  return (
    <Button component={RouterLink} to={loginPath} variant="outlined" sx={sx} {...other}>
      Log in
    </Button>
  );
}
