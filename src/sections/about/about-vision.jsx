import { m } from 'framer-motion';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Import Grid component

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutVision({ sx, ...other }) {
  const renderImg = (
    <Image
      src={`${CONFIG.assetsDir}/assets/images/about/vision.webp`}
      alt="about-vision"
      ratio={{ xs: '4/3', sm: '16/9' }}
      slotProps={{
        overlay: {
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
        },
      }}
    />
  );

  const renderLogos = (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 1,
        zIndex: 9,
        bottom: 0,
        opacity: 0.48,
        position: 'absolute',
        py: { xs: 1.5, md: 2.5 },
      }}
    >
      {/* Logos can be added here if needed */}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        pb: 10,
        position: 'relative',
        bgcolor: 'background.neutral',
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          content: "''",
          position: 'absolute',
          height: { xs: 80, md: 120 },
          bgcolor: 'background.default',
        },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left side: Video/Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 2,
                display: 'flex',
                overflow: 'hidden',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {renderImg}
              {renderLogos}
              <Fab sx={{ position: 'absolute', zIndex: 9 }}>
                <Iconify icon="solar:play-broken" width={24} />
              </Fab>
            </Box>
          </Grid>

          {/* Right side: Text */}
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  maxWidth: 800,
                  mx: 'auto',
                  visibility: 'visible', // Ensure visibility
                  opacity: 1, // Ensure opacity is fully visible
                  zIndex: 10, // Ensure text is on top
                  position: 'relative', // Adjust positioning to make sure it's not hidden
                }}
              >
                Our vision is to transform document management into a seamless, secure, and empowering experience that drives success for businesses worldwide.
              </Typography>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
