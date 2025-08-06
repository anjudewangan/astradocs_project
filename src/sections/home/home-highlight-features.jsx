import { useRef, useState, forwardRef } from 'react';
import { m, useSpring, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { useClientRect } from 'src/hooks/use-client-rect';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';
import PRIMARY_COLOR from 'src/theme/with-settings/primary-color.json';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeHighlightFeatures({ sx, ...other }) {
  const containerRoot = useClientRect();

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 2, sm: 2, md: 5 },
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container>
          <Stack
            ref={containerRoot.elementRef}
            spacing={5}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <SectionTitle
              caption="Key Benefits"
              title="Highlight"
              txtGradient="benefits"
              sx={{
                position: 'sticky',
                top: 0, 
                zIndex: 1, 
                padding: '10px',
              }}
            />

            <SvgIcon
              component={m.svg}
              variants={varFade({ distance: 24 }).inDown}
              sx={{ width: 28, height: 28, color: 'grey.500' }}
            >
              <path
                d="M13.9999 6.75956L7.74031 0.5H20.2594L13.9999 6.75956Z"
                fill="#currentColor"
                opacity={0.12}
              />
              <path
                d="M13.9998 23.8264L2.14021 11.9668H25.8593L13.9998 23.8264Z"
                fill="#currentColor"
                opacity={0.24}
              />
            </SvgIcon>
          </Stack>
        </Container>
      </MotionViewport>

      <ScrollContent containerRoot={containerRoot} />
    </Box>
  );
}

// ----------------------------------------------------------------------

const StyledRoot = styled(
  forwardRef((props, ref) => <Box ref={ref} component={m.div} {...props} />)
)(({ theme }) => ({
  zIndex: 9,
  position: 'relative',
  paddingTop: theme.spacing(3),
  [theme.breakpoints.up('md')]: { paddingTop: theme.spacing(8) },
}));

const StyledContainer = styled((props) => <Box component={m.div} {...props} />)(({ theme }) => ({
  top: 0,
  height: '100vh',
  display: 'flex',
  position: 'sticky',
  overflow: 'hidden',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: theme.transitions.create(['background-color']),
  '&[data-scrolling="true"]': { justifyContent: 'center' },
}));

const StyledContent = styled(
  forwardRef((props, ref) => (
    <Box ref={ref} component={m.div} transition={{ ease: 'linear', duration: 0.25 }} {...props} />
  ))
)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(5),
  paddingLeft: theme.spacing(3),
  transition: theme.transitions.create(['margin-left', 'margin-top']),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(8),
    paddingLeft: theme.spacing(0),
  },
}));

// ----------------------------------------------------------------------

function ScrollContent({ containerRoot }) {
  const theme = useTheme();

  const containerRef = useRef(null);
  const containeRect = useClientRect(containerRef);

  const scrollRef = useRef(null);
  const scrollRect = useClientRect(scrollRef);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const [startScroll, setStartScroll] = useState(false);

  const physics = { damping: 16, mass: 0.12, stiffness: 80 };

  const scrollRange = -scrollRect.scrollWidth + containeRect.width / 2;

  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, scrollRange]), physics);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest !== 0 && latest !== 1) {
      setStartScroll(true);
    } else {
      setStartScroll(false);
    }
  });

  return (
    <StyledRoot ref={containerRef} sx={{ height: scrollRect.scrollWidth, minHeight: '100vh' }}>
      <StyledContainer
        style={{ background: theme.palette.mode === 'dark' ? 'black' : 'white' }}
        data-scrolling={startScroll}
      >
        <StyledContent ref={scrollRef} style={{ x }} layout sx={{ ml: `${containerRoot.left}px` }}>
          {ITEMS.map((item) => (
            <Item key={item.title} item={item} />
          ))}
        </StyledContent>
      </StyledContainer>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Item({ item, sx, ...other }) {
  return (
    <Box sx={{ flexShrink: 0, ...sx }} {...other}>
      <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
        <Iconify width={28} icon={item.icon} sx={{ mt: '10px' }} />
        <Stack spacing={2}>
          <Typography variant="h3">{item.title}</Typography>
          <Typography sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
            {item.subtitle}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={{ xs: 5, md: 8 }}>
        {item.imgUrl.map((url) => (
          <Box
            key={url}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: (theme) =>
                `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              [stylesMode.dark]: {
                boxShadow: (theme) =>
                  `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
              },
              margin: '0 auto',
            }}
          >
            <Box
              component="img"
              alt={url}
              src={url}
              sx={{
                width: {
                  xs: 280,
                  sm: 280,
                  md: 400,
                  lg: 400,
                  xl: 400,
                },
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

const ITEMS = [
  {
    title: 'Increased Productivity',
    subtitle:
      '1. Automates document management, saving time. \n2. Breaks down complex tasks, improving team efficiency. \n3. Frees up resources for strategic work. \n4. Quick document access speeds up decision-making. \n5. Enhances collaboration, increasing output.',
    icon: 'solar:graph-new-up-bold-duotone',
    imgUrl: [`${CONFIG.assetsDir}/assets/images/home/benefit-1.webp`],
  },
  {
    title: 'Data Security',
    subtitle:
      '1. Restricts access by user roles. \n2. Encrypts data in transit and at rest. \n3. Stores documents securely in the cloud. \n4. Tracks user actions for accountability. \n5. Ensures compliance with industry standards.',
    icon: 'solar:lock-keyhole-bold-duotone',
    imgUrl: [`${CONFIG.assetsDir}/assets/images/home/benefit-2.webp`],
  },
  {
    title: 'Cost-Efficiency',
    subtitle:
      '1. Reduces need for physical storage, cutting overhead costs. \n2. Lowers expenses by decreasing paper usage. \n3. Provides easy, anytime access to documents. \n4. Automates tasks, reducing labor costs. \n5. Scales with business growth, preventing storage expansion costs.',
    icon: 'solar:money-bag-bold-duotone',
    imgUrl: [`${CONFIG.assetsDir}/assets/images/home/benefit-3.webp`],
  },
  {
    title: 'Enhanced Collaboration',
    subtitle:
      '1. Collaborate on documents in real-time, improving productivity. \n2. Share documents seamlessly with internal and external teams. \n3. Track edits and changes to ensure the latest version. \n4. Add comments directly on documents, reducing email exchanges. \n5. Access documents from any device, enabling flexible collaboration.',
    icon: 'solar:users-group-two-rounded-bold-duotone',
    imgUrl: [`${CONFIG.assetsDir}/assets/images/home/benefit-4.webp`],
  },
  {
    title: 'Tailored to Your Industry',
    subtitle:
      '1. Adaptable features for legal, healthcare, education, corporate, and government sectors. \n2. Customizable workflows for improved efficiency. \n3. Built-in tools for industry-specific compliance and reporting. \n4. Streamlined tasks like case and patient records management. \n5. Scalable to meet growing demands across sectors.',
    icon: 'solar:buildings-bold-duotone',
    imgUrl: [`${CONFIG.assetsDir}/assets/images/home/benefit-5.webp`],
  },
];
