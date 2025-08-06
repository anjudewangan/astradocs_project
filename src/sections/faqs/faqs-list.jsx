import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { _faqs } from 'src/_mock';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function FaqsList({ sx, ...other }) {
  const groupedFaqs = _faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const [expandedCategory, setExpandedCategory] = useState("Getting Started");

  const handleCategoryChange = (category) => {
    setExpandedCategory(prev => prev === category ? "" : category); 
  };

  return (
    <Box sx={sx} {...other}>
      {Object.keys(groupedFaqs).map((category) => (
        <Box key={category} sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              cursor: 'pointer',
              color: expandedCategory === category ? 'primary.main' : 'text.secondary', 
              fontWeight: expandedCategory === category ? 'bold' : 'normal', 
            }}
            onClick={() => handleCategoryChange(category)} 
          >
            {category}
          </Typography>

          {expandedCategory === category && groupedFaqs[category].map((accordion) => (
            <Accordion key={accordion.id}>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>{accordion.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Box>
  );
}
