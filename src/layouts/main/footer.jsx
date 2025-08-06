import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

import { Logo } from 'src/components/logo';

import { textGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Quick Links',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Features', href: paths.components },
      { name: 'Pricing', href: paths.pricing },
      { name: 'How it works', href: '/components/mui/timeline' },
    ],
  },
  {
    headline: 'Other',
    children: [
      { name: 'Blogs', href: paths.post.root },
      { name: 'FAQs', href: paths.faqs },
      { name: 'Integration', href: '/components/mui/dialog' },
      { name: 'Updates/Release Notes', href: paths.maintenance },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and condition', href: '/components/extra/markdown' },
      { name: 'Privacy policy', href: '/components/extra/markdown' },
      { name: 'Security', href: '/components/mui/accordion' },
      { name: 'Contact us', href: paths.contact },
    ],
  },
  {
    headline: 'Contact',
    children: [
      {
        name: (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon="eva:email-outline" />
            info@astradocs.in
          </Stack>
        ),
        href: 'mailto:info@astradocs.in',
      },
      {
        name: (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon="eva:phone-call-outline" />
            +91-7714915561
          </Stack>
        ),
        href: 'tel:+917714915561',
      },
    ],
  },
];

// ----------------------------------------------------------------------
export function Footer({ layoutQuery, sx }) {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      <Divider />

      <Container
        sx={{
          pb: 3,
          pt: 3,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Logo
          isFooter
          sx={{
            [theme.breakpoints.down('sm')]: {
              width: 80,
              height: 80,
            },
          }}
        />

        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid {...{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                textAlign: 'justify',
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              Experience effortless document management with Astradocs. Simplify, secure, and
              streamline your workflow today!
            </Typography>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {_socials.map((social) => (
                <IconButton key={social.label} color="inherit">
                  {social.value === 'twitter' && <TwitterIcon />}
                  {social.value === 'facebook' && <FacebookIcon />}
                  {social.value === 'instagram' && <InstagramIcon />}
                  {social.value === 'linkedin' && <LinkedinIcon />}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid
            {...{ xs: 12, [layoutQuery]: 8 }}
            container
            spacing={2}
            sx={{
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'row',
              },
            }}
          >
            {LINKS.map((list) => (
              <Grid
                item
                xs={6}
                md={3}
                key={list.headline}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Typography component="div" variant="overline">
                  {list.headline}
                </Typography>
                {list.children.map((link) => (
                  <Link
                    key={link.name}
                    component={RouterLink}
                    href={link.href}
                    color="inherit"
                    variant="body2"
                    sx={{
                      display: 'block',
                      marginBottom: 1,
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 0 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
