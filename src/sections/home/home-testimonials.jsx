import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fToNow } from 'src/utils/format-time';

import { _mock } from 'src/_mock';
import { maxLine, varAlpha, textGradient } from 'src/theme/styles';

import { varFade, MotionViewport, AnimateCountUp } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeTestimonials({ sx, ...other }) {
  const renderLines = (
    <>
      <Stack
        spacing={8}
        alignItems="center"
        sx={{
          top: 64,
          left: 80,
          position: 'absolute',
          transform: 'translateX(-15px)',
        }}
      >
        <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
        <FloatTriangleDownIcon sx={{ width: 30, height: 15, opacity: 0.24, position: 'static' }} />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const carousel = useCarousel({
    align: 'start',
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 4 },
    breakpoints: {
      [carouselBreakpoints.sm]: { slideSpacing: '24px' },
      [carouselBreakpoints.md]: { slideSpacing: '40px' },
      [carouselBreakpoints.lg]: { slideSpacing: '64px' },
    },
  });

  const renderDescription = (
    <SectionTitle
      caption="testimonials"
      title="What our clients"
      txtGradient="say..."
      sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
    />
  );

  const horizontalDivider = (position) => (
    <Divider
      component="div"
      sx={{
        width: 1,
        opacity: 0.16,
        height: '1px',
        border: 'none',
        position: 'absolute',
        background: (theme) =>
          `linear-gradient(to right, ${varAlpha(
            theme.vars.palette.grey['500Channel'],
            0
          )} 0%, ${theme.vars.palette.grey[500]} 50%, ${varAlpha(
            theme.vars.palette.grey['500Channel'],
            0
          )} 100%)`,
        ...(position === 'top' && { top: 0 }),
        ...(position === 'bottom' && { bottom: 0 }),
      }}
    />
  );

  const verticalDivider = (
    <Divider
      component="div"
      orientation="vertical"
      flexItem
      sx={{
        width: '1px',
        opacity: 0.16,
        border: 'none',
        background: (theme) =>
          `linear-gradient(to bottom, ${varAlpha(
            theme.vars.palette.grey['500Channel'],
            0
          )} 0%, ${theme.vars.palette.grey[500]} 50%, ${varAlpha(
            theme.vars.palette.grey['500Channel'],
            0
          )} 100%)`,
        display: { xs: 'none', md: 'block' },
      }}
    />
  );

  const renderContent = (
    <Stack sx={{ position: 'relative', py: { xs: 5, md: 8 } }}>
      {horizontalDivider('top')}

      <Carousel carousel={carousel}>
        {TESTIMONIALS.map((item) => (
          <Stack key={item.id} component={m.div} variants={varFade().in}>
            <Stack spacing={1} sx={{ typography: 'subtitle2' }}>
              <Rating size="small" name="read-only" value={item.rating} precision={0.5} readOnly />
              {item.category}
            </Stack>

            <Typography
              sx={(theme) => ({
                ...maxLine({ line: 4, persistent: theme.typography.body1 }),
                mt: 2,
                mb: 3,
              })}
            >
              {item.content}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt={item.name} src={item.avatar} sx={{ width: 48, height: 48 }} />
              <Stack sx={{ typography: 'subtitle1' }}>
                <Box component="span">{item.name}</Box>
                <Box component="span" sx={{ typography: 'body2', color: 'text.disabled' }}>
                  {fToNow(new Date(item.postedAt))}
                </Box>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Carousel>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: { xs: 5, md: 8 } }}
      >
        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />

        <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
      </Stack>
    </Stack>
  );

  const renderNumber = (
    <Stack sx={{ py: { xs: 5, md: 8 }, position: 'relative' }}>
      {horizontalDivider('top')}

      <Stack spacing={5} direction={{ xs: 'row', md: 'row' }} divider={verticalDivider}>
        {[
          { label: 'Purchased order', value: 12.121 },
          { label: 'Happy customers', value: 160 },
          { label: 'Review rate', value: 4.9 },
        ].map((item) => (
          <Stack key={item.label} spacing={2} sx={{ textAlign: 'center', width: 1 }}>
            <m.div variants={varFade({ distance: 24 }).inUp}>
              <AnimateCountUp
                to={item.value}
                unit={item.label === 'Purchased order' ? 'k+' : '+'}
                toFixed={item.label === 'Happy customers' ? 0 : 1}
                sx={{
                  fontWeight: 'fontWeightBold',
                  fontSize: { xs: 40, md: 64 },
                  lineHeight: { xs: 50 / 40, md: 80 / 64 },
                  fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                }}
              />
            </m.div>

            <m.div variants={varFade({ distance: 24 }).inUp}>
              <Box
                component="span"
                sx={(theme) => ({
                  ...textGradient(
                    `90deg, ${theme.vars.palette.text.primary}, ${varAlpha(
                      theme.vars.palette.text.primaryChannel,
                      0.2
                    )}`
                  ),
                  opacity: 0.4,
                  typography: 'h6',
                })}
              >
                {item.label}
              </Box>
            </m.div>
          </Stack>
        ))}
      </Stack>

      {horizontalDivider('bottom')}
    </Stack>
  );

  return (
    <Box component="section" sx={{ py: { xs: 2, sm: 2, md: 5 }, position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        {renderLines}

        <Container>
          {renderDescription}

          {renderContent}

          {renderNumber}
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const base = (index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatar: _mock.image.avatar(index),
  rating: 5,
});

const TESTIMONIALS = [
  {
    ...base(1),
    category: 'User-Centric Design',
    content: `Implementing Astradocs has been a game-changer for our organization. The features, security, and ease of use have significantly improved our document management processes.`,
    postedAt: 'April 20, 2024 23:15:30',
  },
  {
    ...base(2),
    category: 'User-Centric Design',
    content: `stradocs has completely transformed the way we handle our documents. The platform is intuitive, secure, and incredibly efficient a game changer for our team!`,
    postedAt: 'March 19, 2024 23:15:30',
  },
  {
    ...base(3),
    category: 'Security',
    content: `The user-friendly interface and advanced features of Astradocs have significantly improved our workflow. We can now access documents securely from anywhere, making remote work seamless.`,
    postedAt: 'April 19, 2023 23:15:30',
  },
  {
    ...base(4),
    category: 'Transparency',
    content: `Astradocs has been a fantastic tool for our business. Its robust security and powerful features have given us confidence in managing our most sensitive documents.`,
    postedAt: 'May 19, 2023 23:15:30',
  },
  {
    ...base(5),
    category: 'Transparency',
    content:
      'Thanks to Astradocs, we’ve streamlined our document management system, saving time and improving collaboration across departments. It is an indispensable tool for our business.',
    postedAt: 'June 19, 2023 23:15:30',
  },
  {
    ...base(6),
    category: 'User-Centric Design',
    content: 'Astradocs has been a lifesaver for our team. The easy integration and cloud-based access have made document management more efficient and secure than ever before.',
    postedAt: 'July 19, 2023 23:15:30',
  },
  {
    ...base(7),
    category: 'Security',
    content:
      'We’ve tried several document management systems, but none compare to Astradocs. The advanced features and excellent Transparency have made it an invaluable asset to our company.',
    postedAt: 'August 19, 2023 23:15:30',
  },
  {
    ...base(8),
    category: 'Innovation',
    content:
      'The user-friendly interface and advanced features of Astradocs have significantly improved our workflow. We can now access documents securely from anywhere, making remote work seamless.',
    postedAt: 'September 19, 2023 23:15:30',
  },
];
