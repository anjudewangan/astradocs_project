import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';
import { varAlpha } from 'src/theme/styles';
import { Label } from 'src/components/label';
import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

export function ComponentCard({ item }) {
  return (
    <Paper
      component={RouterLink}
      // href={item.href}
      variant="outlined"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        textDecoration: 'none',
        borderColor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
        display: 'flex',
        flexDirection: 'column',  
        p: 2, 
        minHeight: '200px',  
        alignItems: 'center', 
        cursor: 'default',
      }}
    >
      {item.category && (
        <Label
          color={item.category === 'MUI X' ? 'info' : 'default'}
          sx={{
            top: 8,
            right: 8,
            zIndex: 9,
            position: 'absolute',
          }}
        >
          {item.category}
        </Label>
      )}

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 2, 
      }}>
        <Image alt={item.name} src={item.icon} ratio="1/1" sx={{ width: 100, height: 100 }} />
      </Box>

      <Typography variant="h6" sx={{ textAlign: 'center', mb: 1 }}>
        {item.name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
        {item.description}
      </Typography>
    </Paper>
  );
}
