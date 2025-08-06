import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Iconify } from 'src/components/iconify';

export function ContactMap({ contacts, sx, ...other }) {
  const theme = useTheme();
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <Box
      sx={{
        zIndex: 0,
        borderRadius: 1.5,
        overflow: 'hidden',
        position: 'relative',
        height: { xs: 320, md: 560 },
        ...sx,
      }}
      {...other}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.343028437863!2d81.63408677572394!3d21.257885079868633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddf327896b3b%3A0xab7c3cf5681e16a7!2sPatio%20Digital%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1735282575365!5m2!1sen!2sin"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 'none' }}
        allowFullScreen
        title="Google Map Location of Patio Digital Pvt. Ltd."
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
