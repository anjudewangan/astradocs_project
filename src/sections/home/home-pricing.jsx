import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomePricing({ sx, ...other }) {
  const renderDescription = (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <SectionTitle
        caption="plans"
        title="Transparent"
        txtGradient="pricing"
        description="Astradocs offers flexible plans, from a free trial to Starter, Professional, and Enterprise options, with transparent pricing and custom solutions to fit your needs."
      />
      <Stack direction="row" justifyContent="center" spacing={{xs: 1, md: 2}} sx={{ mt: 4 }}>
        <Button color="inherit" variant="contained" size="large" href="/pricing">
          Try Astradocs for free
        </Button>
        <Button color="inherit" variant="outlined" size="large" href="/pricing">
          Explore pricing
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, sm: 2, md: 5 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Container>{renderDescription}</Container>
    </Box>
  );
}
