import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { fNumber, fPercent } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function AppWidgetSummary({ title, percent, total, icon, sx, ...other }) {
  const theme = useTheme();
  const navigate = useNavigate();

  // Logic for the trending indicator
  const renderTrending = (
    <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
      {/* <Iconify
        width={24}
        icon={
          percent < 0
            ? 'solar:double-alt-arrow-down-bold-duotone'
            : 'solar:double-alt-arrow-up-bold-duotone'
        }
        sx={{ flexShrink: 0, color: 'success.main', ...(percent < 0 && { color: 'error.main' }) }}
      /> */}
      <Iconify
        width={20}
        icon="eva:info-outline"
        sx={{
          flexShrink: 0,
          color: 'success.main',
        }}
      />
      {/* <Box component="span" sx={{ typography: 'subtitle2' }}>
        {percent > 0 && '+'}
        {fPercent(percent)}
      </Box> */}
      <Box
        component="span"
        sx={{
          typography: 'body2',
          color: 'text.secondary',
          cursor: 'pointer',
          '&:hover': { color: 'warning.main' },
        }}
        onClick={() => navigate('/dashboard/file-manager')}
      >
        View details
      </Box>
    </Box>
  );

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 3,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
        <Box sx={{ mt: 1.5, mb: 1, typography: 'h3' }}>{fNumber(total)}</Box>
        {renderTrending}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{ width: 60, height: 60, objectFit: 'contain' }}
        />
      </Box>
    </Card>
  );
}
