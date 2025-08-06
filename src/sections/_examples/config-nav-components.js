import { paramCase } from 'src/utils/change-case';
import { CONFIG } from 'src/config-global';

// Helper to create nav items with hover description
const getHref = (category, name) => `/components/${category}/${paramCase(name)}`;

export const foundationNav = [
  {
    name: 'Version Control',
    href: getHref('foundation', 'Version Control'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-version-control.svg`,
    description: `Astradocs Integration: Harness the power of Astradocs for unparalleled version control. Ensure a detailed history of document changes, aiding in compliance and accountability.`,
  },
  {
    name: 'Access Control',
    href: getHref('foundation', 'Access Control'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-access-control.svg`,
    description: `Role-Based Access: Utilize Astradocs's role-based access controls, allowing administrators to define granular access permissions. From read-only access to full document control, tailor permissions to match organizational hierarchies.`,
  },
  {
    name: 'Metadata Management',
    href: getHref('foundation', 'Metadata Management'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-metadata-management.svg`,
    description: `Customizable Metadata Fields: Leverage Astradocs's metadata flexibility. Tailor metadata fields to your specific needs, enabling efficient document categorization, search, and retrieval.`,
  },
  {
    name: 'OCR Integration',
    href: getHref('foundation', 'OCR Integration'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-ocr-integration.svg`,
    description: `Astradocs OCR Engine: Seamlessly integrate the powerful Astradocs OCR engine. Transform scanned documents into editable and searchable text, significantly reducing manual data entry and enhancing document discoverability.`,
  },
  {
    name: 'Collaboration Tools',
    href: getHref('foundation', 'Collaboration Tools'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-collaboration-tools.svg`,
    description: `Annotations and Comments: Foster collaboration with Astradocs's annotation and comment features. Team members can provide feedback, clarify points, and suggest edits directly within the document interface.`,
  },
  {
    name: 'Workflow Automation',
    href: getHref('foundation', 'Workflow Automation'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-workflow-automation.svg`,
    description: `Astradocs Workflows: Streamline processes with Astradocs's workflow automation. Design custom workflows to automate document routing, approval processes, and task assignments, enhancing overall efficiency.`,
  },
];

export const muiNav = [
  {
    name: 'Audit Trail',
    href: getHref('mui', 'Audit Trail'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-audit-trail.svg`,
    description: `Detailed Logging: Astradocs's detailed logging ensures an extensive audit trail. Track every action performed on documents, facilitating compliance adherence and providing transparency into user activities.`,
  },
  {
    name: 'Encryption',
    href: getHref('mui', 'Encryption'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-encryption.svg`,
    description: `Secure Document Storage: Benefit from Astradocs's encryption protocols for secure document storage. Protect sensitive information with robust encryption measures, ensuring confidentiality.`,
  },
];

export const extraNav = [
  {
    name: 'Legal Firms',
    href: getHref('extra', 'Legal Firms'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-extra-legal-firms.svg`,
    description: 'Astradocs for Legal Documentation: Utilize Astradocs\'s advanced version control for managing legal documentation. Securely collaborate on contracts, case files, and legal briefs while ensuring compliance.',
  },
  {
    name: 'Healthcare Providers',
    href: getHref('extra', 'Healthcare Providers'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-extra-healthcare-providers.svg`,
    description: 'OCR Integration for Medical Records: Leverage Astradocs\'s OCR integration to digitize and manage medical records efficiently.',
  },
  {
    name: 'Educational Institutions',
    href: getHref('extra', 'Educational Institutions'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-extra-educational-institutions.svg`,
    description: 'Workflow Automation for Educational Processes: Implement Astradocs\'s workflow automation to streamline educational processes.',
  },
  {
    name: 'Corporate Offices',
    href: getHref('extra', 'Corporate Offices'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-extra-corporate-offices.svg`,
    description: 'Access Control for Confidential Documents: Employ Astradocs\'s role-based access controls to safeguard confidential corporate documents.',
  },
  {
    name: 'Government Agencies',
    href: getHref('extra', 'Government Agencies'),
    icon: `${CONFIG.assetsDir}/assets/icons/components/ic-extra-government-agencies.svg`,
    description: 'Audit Trail for Compliance: Astradocs\'s detailed logging and audit trail features are essential for ensuring compliance.',
  },
];
