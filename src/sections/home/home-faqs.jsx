import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'What is Astradocs, and how does it simplify document management?',
    answer: (
      <Typography>
        Astradocs is your document whisperer, gracefully managing the chaos of files. It elegantly
        simplifies document organization, retrieval, and collaboration, making your document journey
        as smooth as a waltz.
      </Typography>
    ),
  },
  {
    question: 'Is there a free trial available, and how can I sign up?',
    answer: (
      <Typography>
        Indeed! Dive into the Astradocs symphony with our free trial. Simply follow the melodious
        cues on our website to sign up and experience the harmony of seamless document management.
      </Typography>
    ),
  },
  {
    question: 'What security measures does Astradocs employ to protect my documents?',
    answer: (
      <Typography>
        Astradocs dances with security like a tango. With robust encryption, routine security
        audits, and compliance adherence, your documents are under a protective waltz in our secure
        vault.
      </Typography>
    ),
  },
  {
    question: 'Can I integrate Astradocs with other tools like Google Workspace or Microsoft 365?',
    answer: (
      <Typography>
        Absolutely! Astradocs is a dance partner that seamlessly twirls with Google Workspace,
        Microsoft 365, and more. Integrate and let the collaboration ball begin!
      </Typography>
    ),
  },
  {
    question: 'What types of organizations benefit most from using Astradocs?',
    answer: (
      <Typography>
        Astradocs is the universal dance floor for organizations — from solo artists to large
        orchestras. Whether you are a startup humming a startup tune or a seasoned enterprise
        orchestrating a symphony, Astradocs caters to all.
      </Typography>
    ),
  },
  {
    question: 'How do I get started with Astradocs? Are there setup fees?',
    answer: (
      <Typography>
        Embark on your Astradocs journey with grace. No setup fees – just a simple two-step: sign up
        and start dancing through the document waltz!
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }) {
  const [expanded, setExpanded] = useState(FAQs[0].question);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDescription = (
    <SectionTitle
      caption="FAQs"
      title="We’ve got the"
      txtGradient="answers"
      sx={{ textAlign: 'center' }}
    />
  );

  const renderContent = (
    <Stack
      spacing={1}
      sx={{
        mt: 8,
        mx: 'auto',
        maxWidth: 720,
        mb: { xs: 5, md: 8 },
      }}
    >
      {FAQs.map((item, index) => (
        <Accordion
          key={item.question}
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          expanded={expanded === item.question}
          onChange={handleChange(item.question)}
          sx={{
            borderRadius: 2,
            transition: (theme) =>
              theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.short,
              }),
            '&::before': { display: 'none' },
            '&:hover': {
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
            },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
            [`&.${accordionClasses.expanded}`]: {
              m: 0,
              borderRadius: 2,
              boxShadow: 'none',
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            [`& .${accordionSummaryClasses.root}`]: {
              py: 3,
              px: 2.5,
              minHeight: 'auto',
              [`& .${accordionSummaryClasses.content}`]: {
                m: 0,
                [`&.${accordionSummaryClasses.expanded}`]: { m: 0 },
              },
            },
            [`& .${accordionDetailsClasses.root}`]: { px: 2.5, pt: 0, pb: 3 },
          }}
        >
          <AccordionSummary
            expandIcon={
              <Iconify
                width={20}
                icon={expanded === item.question ? 'mingcute:minimize-line' : 'mingcute:add-line'}
              />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6"> {item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
  
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          color="inherit"
          variant="outlined"
          size="large"
          href="/faqs" 
          startIcon={<Iconify icon="ic:round-question-answer" />}
        >
          Further FAQs
        </Button>
      </Box>
    </Stack>
  );
  

  const renderContact = (
    <Stack
      alignItems="center"
      sx={{
        px: 3,
        py: 8,
        textAlign: 'center',
        background: (theme) =>
          `linear-gradient(270deg, ${varAlpha(
            theme.vars.palette.grey['500Channel'],
            0.08
          )}, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)})`,
      }}
    >
      <m.div variants={varFade().in}>
        <Typography variant="h4">Still have questions?</Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
          Have questions or want to explore how Astradocs can benefit your organization? Our team is
          here to assist you.
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Button
          color="inherit"
          variant="contained"
          href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
          startIcon={<Iconify icon="fluent:mail-24-filled" />}
        >
          Contact us
        </Button>
      </m.div>
    </Stack>
  );

  return (
    <Box component="section" sx={{ ...sx }} {...other}>
      <MotionViewport sx={{ py: { xs: 2, sm: 2, md: 5 }, position: 'relative' }}>
        <TopLines />

        <Container>
          {renderDescription}
          {renderContent}
        </Container>

        <Stack sx={{ position: 'relative' }}>
          <BottomLines />
          {renderContact}
        </Stack>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TopLines() {
  return (
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
        <FloatTriangleDownIcon
          sx={{
            position: 'static',
            opacity: 0.24,
            width: 30,
            height: 15,
          }}
        />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );
}

function BottomLines() {
  return (
    <>
      <FloatLine sx={{ top: 0, left: 0 }} />
      <FloatLine sx={{ bottom: 0, left: 0 }} />
      <FloatPlusIcon sx={{ top: -8, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: -8, left: 72 }} />
    </>
  );
}
