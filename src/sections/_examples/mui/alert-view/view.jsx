import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';

import { paths } from 'src/routes/paths';

import { varAlpha } from 'src/theme/styles';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

export function AlertView() {
  const DEMO = [
    {
      name: 'Increased Productivity',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Alert severity="info" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Workflow Automation</AlertTitle>
            Automate repetitive tasks to save time and reduce manual effort.
          </Alert>
          <Alert severity="success" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Task Simplification</AlertTitle>
            Simplify complex processes with intuitive tools and user-friendly interfaces.
          </Alert>
          <Alert severity="warning" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Collaboration Boost</AlertTitle>
            Enhance teamwork with seamless document sharing and real-time collaboration.
          </Alert>
          <Alert severity="error" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Focus on Priorities</AlertTitle>
            Free up your teams time to concentrate on strategic and impactful work.
          </Alert>
        </ComponentBlock>
      ),
    },
    {
      name: 'Data Security',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          {COLORS.map((color) => (
            <Alert key={color} severity={color} variant="filled" onClose={() => {}}>
              <AlertTitle sx={{ fontWeight: 'bold' }}>
                {color === 'info' && 'Robust Encryption'}
                {color === 'success' && 'Access Controls'}
                {color === 'warning' && 'Data Backup'}
                {color === 'error' && 'Real-Time Monitoring'}
              </AlertTitle>
              {color === 'info' &&
                'Ensure end-to-end encryption for all your documents to protect them from unauthorized access.'}
              {color === 'success' &&
                'Manage user permissions and restrict document access to authorized personnel only.'}
              {color === 'warning' &&
                'Automatic backups safeguard against data loss and ensure quick recovery when needed.'}
              {color === 'error' &&
                'Detect and prevent potential security threats with live monitoring of document activities.'}
            </Alert>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Cost-Efficiency',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Alert severity="info" variant="outlined" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Reduced Storage Costs</AlertTitle>
            Eliminate the need for physical storage by digitizing documents and leveraging cloud-based solutions.
          </Alert>
          <Alert severity="success" variant="outlined" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Streamlined Document Management</AlertTitle>
            Improve efficiency by organizing documents in a centralized system, saving time and reducing retrieval costs.
          </Alert>
          <Alert severity="warning" variant="outlined" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Lower Printing Costs</AlertTitle>
            Minimize paper usage and printing expenses by transitioning to a fully digital document workflow.
          </Alert>
          <Alert severity="error" variant="outlined" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Improved Accessibility</AlertTitle>
            Enhance document accessibility, allowing teams to retrieve files instantly without the need for physical retrieval.
          </Alert>
        </ComponentBlock>
      ),
    },
    {
      name: 'Enhanced Collaboration',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Alert severity="info" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Real-Time Collaboration</AlertTitle>
            Astradocs allows teams to collaborate on documents simultaneously, improving efficiency and reducing delays.
          </Alert>
          <Alert severity="success" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Centralized Document Sharing</AlertTitle>
            Easily share and access documents within your team or with external partners, ensuring everyone stays on the same page.
          </Alert>
          <Alert severity="warning" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Cross-Device Compatibility</AlertTitle>
            Astradocs ensures seamless access across devices, enabling collaboration from anywhere, anytime.
          </Alert>
          <Alert severity="error" onClose={() => {}}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Secure Communication</AlertTitle>
            All collaborative efforts within Astradocs are backed by robust security features, ensuring your team’s interactions are always protected.
          </Alert>
        </ComponentBlock>
      ),
    },
    {
      name: 'Tailored to Your Industry',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Alert severity="info">
            <AlertTitle sx={{ fontWeight: 'bold' }}>Legal Firms</AlertTitle>
            Secure and compliant document management tailored for legal professionals, ensuring confidentiality and streamlined workflows.
          </Alert>
    
          <Alert severity="info" variant="filled">
            <AlertTitle sx={{ fontWeight: 'bold' }}>Healthcare Providers</AlertTitle>
            Simplified patient record management, with HIPAA-compliant features to safeguard sensitive health data.
          </Alert>
    
          <Alert severity="info" variant="outlined">
            <AlertTitle sx={{ fontWeight: 'bold' }}>Educational Institutions</AlertTitle>
            Efficient document sharing and collaboration for educators and administrators, with features like version control and online editing.
          </Alert>
    
          <Alert severity="info">
            <AlertTitle sx={{ fontWeight: 'bold' }}>Government Agencies</AlertTitle>
            Reliable document archiving and secure sharing, with full compliance to regulatory standards and seamless access across departments.
          </Alert>
        </ComponentBlock>
      ),
    }
  ];

  return (
    <>
      {/* <ComponentHero>
        <CustomBreadcrumbs
          heading="Benefits"
          links={[
            { name: 'Dashboard', href: '/' },
            { name: 'More' },
            { name: 'Other' },
            { name: 'Benefits' },
          ]}
        />
      </ComponentHero> */}

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
