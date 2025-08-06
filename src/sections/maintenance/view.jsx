import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { MaintenanceIllustration } from 'src/assets/illustrations';

// ----------------------------------------------------------------------

export function MaintenanceView() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ width: '100%', px: 2}}
    >
      <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
        Updates/Release Notes
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}>
        Stay Up to Date with Astradocs Updates
      </Typography>

      <MaintenanceIllustration sx={{ my: { xs: 5, sm: 10 } }} />

      <Grid container spacing={4} sx={{ width: { xs: '100%', md: 1200 } }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Stay Informed
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Keep abreast of Astradocs latest updates and enhancements. Our release notes provide
            detailed information about each update, ensuring transparency about the improvements and
            new features.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Release Schedule
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Check our release schedule to know when to expect new updates. We follow a regular
            release cycle to continually enhance Astradocs based on user feedback and technological
            advancements.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            User Feedback Integration
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Discover how user feedback plays a crucial role in shaping our updates. We value the
            insights of our community, and your suggestions contribute to making Astradocs even
            better.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Opt-In Beta Programs
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Get exclusive access to beta versions of upcoming features by participating in our
            opt-in beta programs. Be among the first to experience and provide feedback on new
            functionalities.
          </Typography>
        </Grid>
      </Grid>

      <Button component={RouterLink} href="/" size="large" variant="contained" sx={{ my: 5 }}>
        Go to home
      </Button>
    </Box>
  );
}
