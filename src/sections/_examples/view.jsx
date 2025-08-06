import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { orderBy } from 'src/utils/helper';

import { varFade, MotionContainer } from 'src/components/animate';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { ComponentNav } from './component-nav';
import { ComponentCard } from './component-card';
import { ComponentHero } from './component-hero';
import { muiNav, extraNav, foundationNav } from './config-nav-components';

import { AlertView } from './mui/alert-view';

export function ComponentsView() {
  return (
    <>
      <ComponentHero sx={{ py: 15 }}>
        <CustomBreadcrumbs
          heading="Features"
          links={[{ name: 'Dashboard', href: '/' }, { name: 'Features' }]}
        />
        {/* <MotionContainer sx={{ textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" component="h1">
              Features
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Astradocs offers efficient document management with features like version control,
              access control, OCR, and automation.
            </Typography>
          </m.div>
        </MotionContainer> */}
      </ComponentHero>

      <Container sx={{ mt: 10, mb: 0 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'flex-start' }}>
          {/* <ComponentNav /> */}

          <Stack divider={<Divider sx={{ borderStyle: 'dashed', my: 8 }} />}>
            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Document Management Features</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Astradocs offers key document management features like version control, access
                  control, OCR, and workflow automation for enhanced efficiency and security.
                </Typography>
              </Stack>

              <Grid>
                {foundationNav.map((item) => (
                  <ComponentCard key={item.name} item={item} />
                ))}
              </Grid>
            </Stack>

            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Security Features</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Astradocs ensures document security with features like detailed audit trails,
                  encryption, and role-based access controls, safeguarding sensitive information and
                  ensuring compliance.
                </Typography>
              </Stack>

              <Grid>
                {orderBy(muiNav, ['name'], ['asc']).map((item) => (
                  <ComponentCard key={item.name} item={item} />
                ))}
              </Grid>
            </Stack>

            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Use Cases</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Astradocs is ideal for legal, healthcare, education, corporate, and government
                  sectors, offering tailored solutions for efficient document management and
                  compliance.
                </Typography>
              </Stack>

              <Grid>
                {orderBy(extraNav, ['name'], ['asc']).map((item) => (
                  <ComponentCard key={item.name} item={item} />
                ))}
              </Grid>
            </Stack>

            <Stack spacing={3} alignItems="center">
              <Typography variant="h4">Benefits</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Astradocs offers a comprehensive suite of features designed to enhance document
                management, streamline workflows, and improve collaboration. With advanced security
                and cost-efficiency, it empowers businesses across various industries to optimize
                their operations and safeguard critical data.
              </Typography>
              <AlertView />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

function Grid({ children }) {
  return (
    <Box
      rowGap={3}
      display="grid"
      columnGap={2.5}
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
      }}
    >
      {children}
    </Box>
  );
}
