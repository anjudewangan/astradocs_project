import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { fPercent } from 'src/utils/format-number';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export const SKILLS = [...Array(4)].map((_, index) => ({
  label: ['Innovation', 'User-Centric Design', 'Security', 'Transparency'][index],
  value: [80, 40, 60, 50][index],
}));

export const FEATURES = [...Array(3)].map((_, index) => ({
  label: ['User-Focused Approach', 'Continuous Innovation', 'Uncompromised Security'][index],
  value: [20, 40, 60][index],
}));

// ----------------------------------------------------------------------

export function AboutWhat({ sx, ...other }) {
  return (
    <Box component="section" sx={{ overflow: 'hidden', ...sx }} {...other}>
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid container columnSpacing={{ md: 3 }} alignItems="center">
          <Grid
            container
            xs={12}
            md={6}
            lg={7}
            alignItems="center"
            sx={{
              pr: { md: 7 },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="Our office small"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-small.webp`}
                  ratio="1/1"
                  sx={(theme) => ({
                    borderRadius: 3,
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    [stylesMode.dark]: {
                      boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                    },
                  })}
                />
              </m.div>
            </Grid>

            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="Our office large"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-large.webp`}
                  ratio="3/4"
                  sx={(theme) => ({
                    borderRadius: 3,
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    [stylesMode.dark]: {
                      boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                    },
                  })}
                />
              </m.div>
            </Grid>
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Our Story
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{ color: 'text.secondary', [stylesMode.dark]: { color: 'common.white' } }}
              >
                At Astradocs, we envision a world where document management transcends boundaries.
                Our journey began with a passion for simplifying complex processes and empowering
                organizations with efficient document handling.
              </Typography>
            </m.div>

            <Box gap={3} display="flex" flexDirection="column" sx={{ my: 5 }}>
              {SKILLS.map((progress, index) => (
                <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ mb: 1, color: 'text.secondary', typography: 'body2' }}
                  >
                    <Typography variant="subtitle2" sx={{ flexGrow: 1, color: 'text.primary' }}>
                      {progress.label}
                    </Typography>
                    {fPercent(progress.value)}
                  </Box>

                  <LinearProgress
                    color={
                      (index === 0 && 'primary') ||
                      (index === 1 && 'warning') ||
                      (index === 2 && 'info') ||
                      'error'
                    }
                    variant="determinate"
                    value={progress.value}
                  />
                </Box>
              ))}
            </Box>

            <m.div variants={varFade().inRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Our work
              </Button>
            </m.div>
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 3 }} alignItems="center" marginTop="100px">
          <Grid xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Our Mission
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{ color: 'text.secondary', [stylesMode.dark]: { color: 'common.white' } }}
              >
                Our mission is to provide cutting-edge document management solutions that cater to
                the diverse needs of businesses across various industries. We are committed to
                enhancing productivity, ensuring data security, and fostering collaboration.
              </Typography>
            </m.div>

            <Box gap={3} display="flex" flexDirection="column" sx={{ my: 5 }}>
              {FEATURES.map((progress, index) => (
                <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ mb: 1, color: 'text.secondary', typography: 'body2' }}
                  >
                    <Typography variant="subtitle2" sx={{ flexGrow: 1, color: 'text.primary' }}>
                      {progress.label}
                    </Typography>
                    {fPercent(progress.value)}
                  </Box>

                  <LinearProgress
                    color={(index === 0 && 'primary') || (index === 1 && 'warning') || 'error'}
                    variant="determinate"
                    value={progress.value}
                  />
                </Box>
              ))}
            </Box>

            <m.div variants={varFade().inRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Our features
              </Button>
            </m.div>
          </Grid>

          <Grid
            container
            xs={12}
            md={6}
            lg={7}
            alignItems="center"
            sx={{
              pr: { md: 7 },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="Our office large"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-large-mission.webp`}
                  ratio="3/4"
                  sx={(theme) => ({
                    borderRadius: 3,
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    [stylesMode.dark]: {
                      boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                    },
                  })}
                />
              </m.div>
            </Grid>
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="Our office small"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-small-mission.webp`}
                  ratio="1/1"
                  sx={(theme) => ({
                    borderRadius: 3,
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    [stylesMode.dark]: {
                      boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                    },
                  })}
                />
              </m.div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
