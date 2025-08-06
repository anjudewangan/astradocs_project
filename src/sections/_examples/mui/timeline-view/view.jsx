import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

const TIMELINES = [
  {
    key: 1,
    title: 'Upload Documents',
    des: 'Begin your Astradocs journey by effortlessly uploading documents. Our drag-and-drop interface simplifies the process, ensuring that your documents are quickly and securely added to the system.',
    time: 'Step - 1',
    icon: <Iconify icon="eva:folder-add-fill" width={24} />,
  },
  {
    key: 2,
    title: 'Set Permissions',
    des: 'Tailor access rights with Astradocs role-based access controls. Define who can view, edit, and share documents, maintaining control and ensuring data security.',
    time: 'Step - 2',
    color: 'primary',
    icon: <Iconify icon="eva:cube-fill" width={24} />,
  },
  {
    key: 3,
    title: 'Collaborate in Real Time',
    des: 'Experience real-time collaboration. Whether your team is in the same office or spread globally, Astradocs enables seamless collaboration with instant edits and updates.',
    time: 'Step - 3',
    color: 'secondary',
    icon: <Iconify icon="eva:pantone-fill" width={24} />,
  },
  {
    key: 4,
    title: 'Version Tracking',
    des: 'Keep tabs on document versions with Astradocs. Track changes, compare versions, and revert when needed, all within an easy-to-use interface.',
    time: 'Step - 4',
    color: 'info',
    icon: <Iconify icon="eva:tv-fill" width={24} />,
  },
  {
    key: 5,
    title: 'Workflow Automation',
    des: 'Streamline your processes with Astradocs workflow automation. Design custom workflows to automate document routing, approval processes, and task assignments, enhancing overall efficiency.',
    time: 'Step - 5',
    color: 'success',
    icon: <Iconify icon="eva:activity-fill" width={24} />,
  },
];

export function TimelineView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="How it works"
          links={[{ name: 'Dashboard', href: '/' }, { name: 'How it works' }]}
        />
      </ComponentHero>

      <div style={{ display: 'flex', overflowX: 'auto', padding: '20px' }}>
        <Timeline position="top" style={{ display: 'flex', flexDirection: 'row' }}>
          {TIMELINES.map((item) => (
            <TimelineItem key={item.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TimelineOppositeContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.time}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                {item.key !== TIMELINES.length && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                  }}
                >
                  <Typography variant="subtitle2">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.des}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}
