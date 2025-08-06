import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const _accordions = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: `Security ${index + 1}`,
  subHeading: _mock.securityTitle(index),
  detail: _mock.descriptionSecurity(index),
}));

// ----------------------------------------------------------------------

export function AccordionView() {
  const [controlled, setControlled] = useState(false);

  const handleChangeControlled = (panel) => (event, isExpanded) => {
    setControlled(isExpanded ? panel : false);
  };

  const DEMO = [
    // {
    //   name: 'Simple',
    //   component: (
    //     <ComponentBlock>
    //       <div>
    //         {_accordions.map((accordion, index) => (
    //           <Accordion key={accordion.value} disabled={index === 3}>
    //             <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
    //               <Typography variant="subtitle1">{accordion.heading}</Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //               <Typography>{accordion.detail}</Typography>
    //             </AccordionDetails>
    //           </Accordion>
    //         ))}
    //       </div>
    //     </ComponentBlock>
    //   ),
    // },
    {
      name: 'Learn About Our Security Measures',
      component: (
        <ComponentBlock>
          <div>
            {_accordions.map((item, index) => (
              <Accordion
                key={item.value}
                // disabled={index === 3}
                expanded={controlled === item.value}
                onChange={handleChangeControlled(item.value)}
              >
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Typography variant="subtitle1" sx={{ width: '33%', flexShrink: 0 }}>
                    {item.heading}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.subHeading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Security"
          links={[
            { name: 'Dashboard', href: '/' },
            { name: 'More' },
            { name: 'Pages' },
            { name: 'Security' },
          ]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
