import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { DashboardContent } from 'src/layouts/dashboard';
import { SeoIllustration } from 'src/assets/illustrations';
import { _appAuthors, _appRelated, _appFeatured, _appInvoices, _appInstalled } from 'src/_mock';

import { CONFIG } from 'src/config-global';
import { svgColorClasses } from 'src/components/svg-color';

import { useAuthContext } from 'src/auth/hooks';

import { AppWidget } from '../app-widget';
import { AppWelcome } from '../app-welcome';
import { AppFeatured } from '../app-featured';
import { AppNewInvoice } from '../app-new-invoice';
import { AppTopAuthors } from '../app-top-authors';
import { AppTopRelated } from '../app-top-related';
import { AppAreaInstalled } from '../app-area-installed';
import { AppWidgetSummary } from '../app-widget-summary';
import { AppCurrentDownload } from '../app-current-download';
import { AppTopInstalledCountries } from '../app-top-installed-countries';

// ----------------------------------------------------------------------

export function OverviewAppView() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        {/* <Grid xs={12} md={8}>
          <AppWelcome
            title={`Welcome back 👋 \n ${user?.username}`}
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            img={<SeoIllustration hideBackground />}
            action={
              <Button variant="contained" color="primary">
                Go now
              </Button>
            }
          />
        </Grid> */}

        {/* <Grid xs={12} md={4}>
          <AppFeatured list={_appFeatured} />
        </Grid> */}

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/file-manager')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="Checked out documents"
            percent={2.6}
            total={300}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-file-checkout.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/file-manager')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="Total documents"
            // percent={0.2}
            total={500}
            icon={`${CONFIG.assetsDir}/assets/icons/platforms/4.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/file-manager')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="Total pages"
            // percent={-0.1}
            total={150}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-page.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/file-manager')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="Document types"
            // percent={0.2}
            total={800}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-file-type.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/file-manager')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="New documents this month"
            // percent={-0.1}
            total={8000}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-new-doc.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/file-manager')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="New pages this month"
            percent={2.6}
            total={5000}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-new-page.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/user/list')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="Total groups"
            // percent={0.2}
            total={2000}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-groups.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/user/cards')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="Total roles"
            // percent={-0.1}
            total={1500}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-roles.svg`}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          onClick={() => handleNavigate('/dashboard/user/list')}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AppWidgetSummary
            title="Total users"
            // percent={-0.1}
            total={1000}
            icon={`${CONFIG.assetsDir}/assets/icons/apps/ic-users.svg`}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentDownload
            title="Current download"
            subheader="Downloaded by operating system"
            chart={{
              series: [
                { label: 'Mac', value: 12244 },
                { label: 'Window', value: 53345 },
                { label: 'iOS', value: 44313 },
                { label: 'Android', value: 78343 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppAreaInstalled
            title="Area installed"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: '2022',
                  data: [
                    { name: 'Asia', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: 'Europe', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: 'Americas', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                  ],
                },
                {
                  name: '2023',
                  data: [
                    { name: 'Asia', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                    { name: 'Europe', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                    { name: 'Americas', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                  ],
                },
                {
                  name: '2024',
                  data: [
                    { name: 'Asia', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                    { name: 'Europe', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                    { name: 'Americas', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} lg={8}>
          <AppNewInvoice
            title="New invoice"
            tableData={_appInvoices}
            headLabel={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopRelated title="Related applications" list={_appRelated} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title="Top installed countries" list={_appInstalled} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopAuthors title="Top authors" list={_appAuthors} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <AppWidget
              title="Conversion"
              total={38566}
              icon="solar:user-rounded-bold"
              chart={{ series: 48 }}
            />

            <AppWidget
              title="Applications"
              total={55566}
              icon="fluent:mail-24-filled"
              chart={{
                series: 75,
                colors: [theme.vars.palette.info.light, theme.vars.palette.info.main],
              }}
              sx={{ bgcolor: 'info.dark', [`& .${svgColorClasses.root}`]: { color: 'info.light' } }}
            />
          </Box>
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}
