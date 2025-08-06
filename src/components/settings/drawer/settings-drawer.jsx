import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import { useTheme, useColorScheme } from '@mui/material/styles';

import COLORS from 'src/theme/core/colors.json';
import { CONFIG } from 'src/config-global';
import { paper, varAlpha } from 'src/theme/styles';
import { defaultFont } from 'src/theme/core/typography';
import PRIMARY_COLOR from 'src/theme/with-settings/primary-color.json';

import { Iconify } from '../../iconify';
import { BaseOption } from './base-option';
import { NavOptions } from './nav-options';
import { Scrollbar } from '../../scrollbar';
import { FontOptions } from './font-options';
import { useSettingsContext } from '../context';
import { PresetsOptions } from './presets-options';
import { defaultSettings } from '../config-settings';
import { FullScreenButton } from './fullscreen-button';

// ----------------------------------------------------------------------

export function SettingsDrawer({
  sx,
  hideFont,
  hideCompact,
  hidePresets,
  hideNavColor,
  hideContrast,
  hideNavLayout,
  hideDirection,
  hideColorScheme,
}) {
  const theme = useTheme();
  const settings = useSettingsContext();
  const { mode, setMode } = useColorScheme();

  const renderHead = (
    <Box display="flex" alignItems="center" sx={{ py: 2, pr: 1, pl: 2.5 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Setup items
      </Typography>

      <FullScreenButton />

      <Tooltip title="Reset">
        <IconButton
          onClick={() => {
            settings.onReset();
            setMode(defaultSettings.colorScheme);
          }}
        >
          <Badge color="error" variant="dot" invisible={!settings.canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Close">
        <IconButton onClick={settings.onCloseDrawer}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </Tooltip>
    </Box>
  );

  const renderDescription = (
    <Typography variant="body2" sx={{ px: 2.5, pb: 2 }}>
      Here you can configure all aspects of the system.
    </Typography>
  );

  const renderAnnouncementBox = (
    <Tooltip
      title="Announcements" arrow placement="top">
      <Link
        href="/announcement"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-announcement.svg`}
          alt="Announcement"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderAssetsBox = (
    <Tooltip title="Assets" arrow placement="top">
      <Link
        href="/assets"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-assets.svg`}
          alt="Assets"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderDocumentsBox = (
    <Tooltip title="Document Types" arrow placement="top">
      <Link
        href="/document-types"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/platforms/3.svg`}
          alt="Document Types"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderGlobalACLsBox = (
    <Tooltip title="Global ACLs" arrow placement="top">
      <Link
        href="/global-acls"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/platforms/4.svg`}
          alt="Global ACLs"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderGroupsBox = (
    <Tooltip title="Groups" arrow placement="top">
      <Link
        href="/groups"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-groups.svg`}
          alt="Groups"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderIndexesBox = (
    <Tooltip title="Indexes" arrow placement="top">
      <Link
        href="/indexes"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-indexes.svg`}
          alt="Indexes"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderKeyManagementBox = (
    <Tooltip title="Key Management" arrow placement="top">
      <Link
        href="/key-management"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-key.svg`}
          alt="Key Management"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderMailingProfilesBox = (
    <Tooltip title="Mailing Profiles" arrow placement="top">
      <Link
        href="/mailing-profiles"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-mail.svg`}
          alt="Mailing Profiles"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderMetadataTypesBox = (
    <Tooltip title="Metadata Types" arrow placement="top">
      <Link
        href="/metadata-types"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-metadata.svg`}
          alt="Metadata Types"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderQuotasBox = (
    <Tooltip title="Quotas" arrow placement="top">
      <Link
        href="/quotas"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-quotas.svg`}
          alt="Quotas"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderRolesBox = (
    <Tooltip title="Roles" arrow placement="top">
      <Link
        href="/roles"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-roles.svg`}
          alt="Roles"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderSettingsBox = (
    <Tooltip title="Settings" arrow placement="top">
      <Link
        href="/settings"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-settings.svg`}
          alt="Settings"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderSmartLinksBox = (
    <Tooltip title="Smart Links" arrow placement="top">
      <Link
        href="/smart-links"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-links.svg`}
          alt="Smart Links"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderSourcesBox = (
    <Tooltip title="Sources" arrow placement="top">
      <Link
        href="/sources"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-sources.svg`}
          alt="Sources"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  // const renderThemesBox = (
  //   <Tooltip title="Themes" arrow placement="top">
  //     <Link
  //       href="/themes"
  //       underline="none"
  //       sx={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         p: 1,
  //         borderRadius: 1,
  //         backgroundColor: 'background.paper',
  //         boxShadow: 1,
  //         transition: 'background-color 0.3s, color 0.3s',
  //         '&:hover': {
  //           backgroundColor: theme.palette.primary.light,
  //           color: theme.palette.primary.contrastText,
  //         },
  //       }}
  //     >
  //       <img
  //         src={`${CONFIG.assetsDir}/assets/icons/settings/ic-themes.svg`}
  //         alt="Themes"
  //         style={{ width: 40, height: 40 }}
  //       />
  //     </Link>
  //   </Tooltip>
  // );

  const renderUsersBox = (
    <Tooltip title="Users" arrow placement="top">
      <Link
        href="/users"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-users.svg`}
          alt="Users"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderWebLinksBox = (
    <Tooltip title="Web Links" arrow placement="top">
      <Link
        href="/web-links"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-weblinks.svg`}
          alt="Web Links"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderworkflowsBox = (
    <Tooltip title="Workflows" arrow placement="top">
      <Link
        href="/workflows"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          boxShadow: 1,
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <img
          src={`${CONFIG.assetsDir}/assets/icons/settings/ic-workflows.svg`}
          alt="Workflows"
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </Tooltip>
  );

  const renderMode = (
    <BaseOption
      label="Dark mode"
      icon="moon"
      selected={settings.colorScheme === 'dark'}
      onClick={() => {
        settings.onUpdateField('colorScheme', mode === 'light' ? 'dark' : 'light');
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    />
  );

  const renderContrast = (
    <BaseOption
      label="Contrast"
      icon="contrast"
      selected={settings.contrast === 'hight'}
      onClick={() =>
        settings.onUpdateField('contrast', settings.contrast === 'default' ? 'hight' : 'default')
      }
    />
  );

  const renderRTL = (
    <BaseOption
      label="Right to left"
      icon="align-right"
      selected={settings.direction === 'rtl'}
      onClick={() =>
        settings.onUpdateField('direction', settings.direction === 'ltr' ? 'rtl' : 'ltr')
      }
    />
  );

  const renderCompact = (
    <BaseOption
      tooltip="Dashboard only and available at large resolutions > 1600px (xl)"
      label="Compact"
      icon="autofit-width"
      selected={settings.compactLayout}
      onClick={() => settings.onUpdateField('compactLayout', !settings.compactLayout)}
    />
  );

  const renderPresets = (
    <PresetsOptions
      value={settings.primaryColor}
      onClickOption={(newValue) => settings.onUpdateField('primaryColor', newValue)}
      options={[
        { name: 'default', value: COLORS.primary.main },
        { name: 'cyan', value: PRIMARY_COLOR.cyan.main },
        { name: 'purple', value: PRIMARY_COLOR.purple.main },
        { name: 'blue', value: PRIMARY_COLOR.blue.main },
        { name: 'orange', value: PRIMARY_COLOR.orange.main },
        { name: 'red', value: PRIMARY_COLOR.red.main },
      ]}
    />
  );

  const renderNav = (
    <NavOptions
      value={{
        color: settings.navColor,
        layout: settings.navLayout,
      }}
      onClickOption={{
        color: (newValue) => settings.onUpdateField('navColor', newValue),
        layout: (newValue) => settings.onUpdateField('navLayout', newValue),
      }}
      options={{
        colors: ['integrate', 'apparent'],
        layouts: ['vertical', 'horizontal', 'mini'],
      }}
      hideNavColor={hideNavColor}
      hideNavLayout={hideNavLayout}
    />
  );

  const renderFont = (
    <FontOptions
      value={settings.fontFamily}
      onClickOption={(newValue) => settings.onUpdateField('fontFamily', newValue)}
      options={[defaultFont, 'Inter Variable', 'DM Sans Variable', 'Nunito Sans Variable']}
    />
  );

  return (
    <Drawer
      anchor="right"
      open={settings.openDrawer}
      onClose={settings.onCloseDrawer}
      slotProps={{ backdrop: { invisible: true } }}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          ...paper({
            theme,
            color: varAlpha(theme.vars.palette.background.defaultChannel, 0.9),
          }),
          width: 360,
          ...sx,
        },
      }}
    >
      {renderHead}

      {renderDescription}

      <Scrollbar>
        <Grid container spacing={2} sx={{ px: 2.5, pb: 2 }}>
          <Grid item xs={3} sm={3}>
            {renderAnnouncementBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderAssetsBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderDocumentsBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderGlobalACLsBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderGroupsBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderIndexesBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderKeyManagementBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderMailingProfilesBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderMetadataTypesBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderQuotasBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderRolesBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderSettingsBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderSmartLinksBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderSourcesBox}
          </Grid>
          {/* <Grid item xs={3} sm={3}>
            {renderThemesBox}
          </Grid> */}
          <Grid item xs={3} sm={3}>
            {renderUsersBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderWebLinksBox}
          </Grid>
          <Grid item xs={3} sm={3}>
            {renderworkflowsBox}
          </Grid>
        </Grid>

        <Stack spacing={6} sx={{ px: 2.5, pb: 5 }}>
          <Box gap={2} display="grid" gridTemplateColumns="repeat(2, 1fr)">
            {!hideColorScheme && renderMode}
            {!hideContrast && renderContrast}
            {!hideDirection && renderRTL}
            {!hideCompact && renderCompact}
          </Box>
          {!(hideNavLayout && hideNavColor) && renderNav}
          {!hidePresets && renderPresets}
          {!hideFont && renderFont}
        </Stack>
      </Scrollbar>
    </Drawer>
  );
}
