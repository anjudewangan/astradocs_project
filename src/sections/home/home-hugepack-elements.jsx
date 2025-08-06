import { useRef, useState, forwardRef } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { SectionTitle, SectionCaption } from './components/section-title';
import { FloatLine, FloatTriangleLeftIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeHugePackElements({ sx, ...other }) {
  const renderLines = (
    <>
      <FloatTriangleLeftIcon sx={{ top: 80, left: 80, opacity: 0.4 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  return (
    <Box
      component="section"
      sx={{ pt: { xs: 5, sm: 5, md: 10 }, pb: { xs: 5, sm: 5, md: 10 }, position: 'relative', ...sx }}
      {...other}
    >
      {renderLines}

      <Container sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Grid
          container
          disableEqualOverflow
          rowSpacing={{ xs: 3, md: 0 }}
          columnSpacing={{ xs: 0, md: 8 }}
        >
          <Grid xs={12} md={6} lg={7}>
            <SectionCaption title="Key Features" />
            <SectionTitle title="Astradocs Core" txtGradient="features" sx={{ mt: 3 }} />
            <img
              src="/assets/images/home/home-features.webp"
              alt="Astradocs Features"
              style={{ width: '100%', maxWidth: '500px' }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <Typography
              sx={{
                color: 'text.disabled',
                fontSize: { md: 20 },
                lineHeight: { md: 36 / 20 },
              }}
            >
              <Box component="span" sx={{ color: 'text.primary' }}>
                Empowering Document Management and Security
              </Box>
              <br />
              with advanced tools, streamlined workflows, and robust data protection.
            </Typography>
            <Button
              size="large"
              color="inherit"
              variant="outlined"
              rel="noopener"
              href={paths.components}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              sx={{ mt: 5, mx: 'auto' }}
            >
              Explore features
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const StyledRoot = styled(
  forwardRef((props, ref) => <Box ref={ref} component={m.div} {...props} />)
)(({ theme }) => ({
  zIndex: 9,
  position: 'relative',
}));

const StyledContainer = styled((props) => <Box component={m.div} {...props} />)(({ theme }) => ({
  top: 0,
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

const StyledContent = styled(
  forwardRef((props, ref) => (
    <Box ref={ref} component={m.div} transition={{ ease: 'linear', duration: 0.25 }} {...props} />
  ))
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: { gap: theme.spacing(5) },
}));

// ----------------------------------------------------------------------

function ScrollContent() {
  return (
    <StyledRoot>
      <StyledContainer>
        <StyledContent>{/* No scrolling effect content */}</StyledContent>
      </StyledContainer>
    </StyledRoot>
  );
}
