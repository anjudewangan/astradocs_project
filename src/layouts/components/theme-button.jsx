import React, { useState, useEffect } from 'react';
import { IconButton, SvgIcon } from '@mui/material';
import { useSettingsContext } from 'src/components/settings/context';
import { BaseOption } from 'src/components/settings/drawer/base-option';
import { useColorScheme } from '@mui/material/styles';

export function ThemeButton({ sx, ...other }) {
  const settings = useSettingsContext();
  const { mode, setMode } = useColorScheme();
  const [currentMode, setCurrentMode] = useState(settings.colorScheme || 'light');

  useEffect(() => {
    if (settings.colorScheme !== currentMode) {
      setCurrentMode(settings.colorScheme);
    }
  }, [settings.colorScheme, currentMode]);

  const toggleMode = () => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    settings.onUpdateField('colorScheme', newMode);
    setMode(newMode);
    setCurrentMode(newMode);
  };

  const modeIcon =
    currentMode === 'light' ? (
      <SvgIcon>
        <path
          fill="currentColor"
          d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
          opacity={0.5}
        />
        <path
          fill="currentColor"
          d="M11.286 22C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336C12.295 13.371 10.72 12 8.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C3.248 16.706 2 17.89 2 19.353S3.247 22 4.786 22z"
        />
      </SvgIcon>
    ) : (
      <SvgIcon>
        <path fill="currentColor" d="M11.5 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" opacity={0.5} />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06m8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0M1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0"
          clipRule="evenodd"
          opacity={0.5}
        />
        <path
          fill="currentColor"
          d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6C9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22z"
        />
      </SvgIcon>
    );

  return (
    <div>
      <IconButton
        aria-label="toggle theme"
        onClick={toggleMode}
        sx={{ p: 0, width: 40, height: 40, ...sx }}
        {...other}
      >
        {modeIcon}
      </IconButton>
    </div>
  );
}
