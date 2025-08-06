import { forwardRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { RouterLink } from 'src/routes/components';
import { CONFIG } from 'src/config-global';
import { useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';

import { textGradient } from 'src/theme/styles';
import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export const Logo = forwardRef(
  (
    {
      width,
      href = '/',
      height,
      isSingle = true,
      disableLink = false,
      className,
      sx,
      isNavMini,
      isFooter,
      ...other
    },
    ref
  ) => {
    const [rotateOnLoad, setRotateOnLoad] = useState(true);
    const [hovered, setHovered] = useState(false);
    const theme = useTheme();

    useEffect(() => {
      const timeout = setTimeout(() => {
        setRotateOnLoad(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }, []);

    const logoStyles = {
      width: width ?? 50,
      height: height ?? 50,
      flexShrink: 0,
      display: 'inline-flex',
      verticalAlign: 'middle',
      transition: 'transform 0.3s ease, filter 0.3s ease',
      textDecoration: 'none',
      ...(disableLink && { pointerEvents: 'none' }),
      ...sx,
      ...(hovered && { filter: 'brightness(1.5)' }),
      ...(isFooter && {
        [theme.breakpoints.down('sm')]: {
          width: 80,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    };

    const singleLogo = (
      <Box
        alt="Single logo"
        component="img"
        src={`${CONFIG.assetsDir}/logo/logo.svg`}
        width="100%"
        height="100%"
        sx={{
          ...(rotateOnLoad && {
            animation: 'spin 0.5s linear',
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }),
        }}
      />
    );

    const fullLogo = (
      <Box
        alt="Full logo"
        component="img"
        src={`${CONFIG.assetsDir}/logo/logo-gold.svg`}
        width="100%"
        height="100%"
      />
    );

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="Logo"
        sx={logoStyles}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}

        {!rotateOnLoad && !isNavMini && (
          <Box
            component={m.span}
            animate={{ backgroundPosition: '200% center' }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            sx={{
              ...textGradient(
                `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
              ),
              backgroundSize: '400%',
              ml: { xs: 0.75, md: 1, xl: 1.5 },
              textAlign: 'center',
              display: { xs: 'none', sm: 'inline-block' },
              fontSize: { xs: '20px', sm: '30px' },
            }}
          >
            <span
              style={{
                fontFamily: 'Samarkan, sans-serif',
                fontWeight: 'bold',
                color: '#fca311',
              }}
            >
              Astradocs
            </span>
          </Box>
        )}

        {isFooter && (
          <Box
            component={m.span}
            animate={{ backgroundPosition: '200% center' }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            sx={{
              ...textGradient(
                `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
              ),
              backgroundSize: '400%',
              ml: { xs: 0.75, md: 1, xl: 1.5 },
              textAlign: 'center',
              display: { xs: 'block', sm: 'none' },
              fontSize: { xs: '40px' },
            }}
          >
            <span
              style={{
                fontFamily: 'Samarkan, sans-serif',
                fontWeight: 'bold',
                color: '#fca311',
              }}
            >
              Astradocs
            </span>
          </Box>
        )}
      </Box>
    );
  }
);
