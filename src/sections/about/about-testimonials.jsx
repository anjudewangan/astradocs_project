import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fDate } from 'src/utils/format-time';

import { CONFIG } from 'src/config-global';
import { bgBlur, varAlpha, bgGradient, hideScrollY } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { useEffect, useRef } from 'react';

// ----------------------------------------------------------------------

export function AboutTestimonials({ sx, ...other }) {
  const theme = useTheme();

  const renderLink = (
    <Button color="primary" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
      Read more
    </Button>
  );

  const renderDescription = (
    <Box
      sx={{
        maxWidth: { md: 360 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="overline" sx={{ color: 'common.white', opacity: 0.48 }}>
          Our Clients
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          Trusted partners across industries
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'common.white' }}>
          At Astradocs, we are proud to collaborate with a diverse range of clients from various
          sectors. Our innovative document management solutions empower businesses to streamline
          their operations, maintain data integrity, and achieve their goals.
        </Typography>
      </m.div>

      <Box
        component={m.div}
        variants={varFade().inUp}
        sx={{
          mt: 3,
          justifyContent: 'center',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        {renderLink}
      </Box>
    </Box>
  );

  const clientLogos = [
    { src: '/assets/images/about/client-1.webp', alt: 'Client 1 Logo' },
    { src: '/assets/images/about/client-9.webp', alt: 'Client 9 Logo' },
    { src: '/assets/images/about/client-11.webp', alt: 'Client 11 Logo' },
    { src: '/assets/images/about/client-10.webp', alt: 'Client 10 Logo' },
    { src: '/assets/images/about/client-8.webp', alt: 'Client 8 Logo' },
    { src: '/assets/images/about/client-12.webp', alt: 'Client 12 Logo' },
    { src: '/assets/images/about/client-2.webp', alt: 'Client 2 Logo' },
    { src: '/assets/images/about/client-3.webp', alt: 'Client 3 Logo' },
    { src: '/assets/images/about/client-5.webp', alt: 'Client 5 Logo' },
    { src: '/assets/images/about/client-4.webp', alt: 'Client 4 Logo' },
    { src: '/assets/images/about/client-7.webp', alt: 'Client 7 Logo' },
    { src: '/assets/images/about/client-6.webp', alt: 'Client 6 Logo' },
    { src: '/assets/images/about/client-13.webp', alt: 'Client 13 Logo' },
    { src: '/assets/images/about/client-14.webp', alt: 'Client 14 Logo' },
    { src: '/assets/images/about/client-16.webp', alt: 'Client 16 Logo' },
    { src: '/assets/images/about/client-17.webp', alt: 'Client 17 Logo' },
    { src: '/assets/images/about/client-15.webp', alt: 'Client 15 Logo' },
    { src: '/assets/images/about/client-18.webp', alt: 'Client 18 Logo' },
    { src: '/assets/images/about/client-19.webp', alt: 'Client 19 Logo' },
    { src: '/assets/images/about/client-20.webp', alt: 'Client 20 Logo' },
    { src: '/assets/images/about/client-21.webp', alt: 'Client 21 Logo' },
    { src: '/assets/images/about/client-22.webp', alt: 'Client 22 Logo' },
  ];

  const contentRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (contentRef.current) {
        contentRef.current.scrollBy({ top: 5, behavior: 'smooth' });
  
        if (contentRef.current.scrollTop + contentRef.current.clientHeight >= contentRef.current.scrollHeight) {
          contentRef.current.scrollTop = 0;
        }
      }
    }, 20); 
  
    return () => clearInterval(scrollInterval); 
  }, []);
  
  const renderContent = (
    <Box
      ref={contentRef} 
      sx={{
        ...hideScrollY,
        py: { md: 10 },
        height: { md: 1 },
        overflowY: { xs: 'unset', md: 'auto' },
      }}
    >
      <Masonry spacing={3} columns={{ xs: 3, md: 3 }} sx={{ ml: 0 }}>
        {clientLogos.map((logo, index) => (
          <m.div key={index} variants={varFade().inUp}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'common.white',
                borderRadius: 2,
                p: 2,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt || `Client ${index + 1}`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </m.div>
        ))}
      </Masonry>
    </Box>
  );


  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/images/about/testimonials.webp`,
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid xs={10} md={4}>
            {renderDescription}
          </Grid>

          <Grid xs={12} md={7} lg={6} alignItems="center" sx={{ height: 1 }}>
            {renderContent}
          </Grid>
        </Grid>

        <Box
          component={m.div}
          variants={varFade().inUp}
          sx={{
            bottom: 60,
            position: 'absolute',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {/* {renderLink} */}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TestimonialItem({ testimonial, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      gap={3}
      display="flex"
      flexDirection="column"
      sx={{
        ...bgBlur({ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.08) }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{testimonial.content}</Typography>

      {/* <Rating value={testimonial.ratingNumber} readOnly size="small" /> */}

      <Box gap={2} display="flex">
        <Avatar alt={testimonial.name} src={testimonial.avatarUrl} />

        <ListItemText
          primary={testimonial.name}
          secondary={fDate(testimonial.postedDate)}
          primaryTypographyProps={{ typography: 'subtitle2', mb: 0.5 }}
          secondaryTypographyProps={{
            color: 'inherit',
            typography: 'caption',
            sx: { opacity: 0.64 },
          }}
        />
      </Box>
    </Box>
  );
}
