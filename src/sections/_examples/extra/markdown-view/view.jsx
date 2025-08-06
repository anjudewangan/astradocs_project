import { paths } from 'src/routes/paths';
import { _mock } from 'src/_mock';
import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

const imgPath = _mock.image.cover(18);

const htmlContent = `
<br/>
<p>Welcome to Astradocs! These Terms and Conditions ("Terms") govern your use of our website, services, and platform. By accessing or using Astradocs, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.</p>

<h4>1. Acceptance of Terms</h4>
<p>By creating an account, accessing, or using Astradocs, you agree to abide by these Terms and all applicable laws.</p>

<h4>2. Eligibility</h4>
<p>You must be at least 18 years old to use our services. By using Astradocs, you confirm that you meet this requirement.</p>

<h4>3. Account Responsibility</h4>
<ul>
  <li>
   You are responsible for maintaining the confidentiality of your account credentials.
  </li>
  <li>
  Notify us immediately of any unauthorized use of your account.
  </li>
</ul>

<h4>4. Use of Services</h4>
<ul>
  <li>
   You agree to use Astradocs only for lawful purposes.
  </li>
  <li>
 Prohibited uses include, but are not limited to:
 <ul>
 <li>
 Uploading or sharing harmful, offensive, or illegal content.
 </li>
 <li>
Attempting to breach our security measures.
 </li>
 </ul>
  </li>
</ul>

<h4>5. Intellectual Property</h4>
<ul>
  <li>
  Astradocs owns all intellectual property rights to the platform and its content.
  </li>
  <li>
You may not copy, distribute, or modify our materials without prior written consent.
  </li>
</ul>

<h4>5. Intellectual Property</h4>
<ul>
  <li>
  Astradocs owns all intellectual property rights to the platform and its content.
  </li>
  <li>
You may not copy, distribute, or modify our materials without prior written consent.
  </li>
</ul>

<h4>6. Data and Privacy</h4>
<ul>
  <li>
 Your data is processed according to our <a href='/components/extra/markdown'>Privacy Policy</a>.
  </li>
  <li>
You are responsible for ensuring the legality of your uploaded content.
  </li>
</ul>

<h4>7. Limitation of Liability</h4>
<p>Astradocs is not liable for:</p>
<ul>
  <li>
Indirect, incidental, or consequential damages.
  </li>
  <li>
Data loss caused by user actions, third-party integrations, or unforeseen events.
  </li>
</ul>

<h4>8. Termination</h4>
<p>We may suspend or terminate your access if you violate these Terms.</p>

<h4>9. Governing Law</h4>
<p>These Terms are governed by the laws of India.</p>

<hr/>
`;

const mardownContent = `
<br/>
<p>Astradocs is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.</p>

<h4>1. Information We Collect</h4>
<ul>
  <li><strong>Account Information:</strong> Name, email address, and other details provided during registration.</li>
  <li><strong>Uploaded Data:</strong> Documents and files you upload for processing.</li>
  <li><strong>Usage Data:</strong> Information about how you interact with our platform (e.g., IP address, browser type).</li>
</ul>

<h4>2. How We Use Your Information</h4>
<p>We use your information to:</p>
<ul>
  <li>Provide, maintain, and improve our services.</li>
  <li>Respond to customer inquiries and support requests.</li>
  <li>Ensure compliance with legal and regulatory obligations.</li>
</ul>

<h4>3. Data Sharing</h4>
<p>We do not sell your data. However, we may share your data with:</p>
<ul>
  <li><strong>Service Providers:</strong> Trusted third parties for hosting, analytics, or customer support.</li>
  <li><strong>Legal Authorities:</strong> When required by law or in response to valid requests.</li>
</ul>

<h4>4. Data Security</h4>
<ul>
  <li>We implement encryption protocols and regular security audits to protect your data.</li>
  <li>While we strive to safeguard your information, no method of transmission is 100% secure.</li>
</ul>

<h4>5. Your Rights</h4>
<ul>
  <li>Access, update, or delete your personal data by contacting our support team.</li>
  <li>Opt-out of marketing communications at any time.</li>
</ul>

<h4>6. Cookies and Tracking</h4>
<ul>
  <li>We use cookies to enhance your browsing experience and analyze platform performance.</li>
  <li>You can control cookie preferences in your browser settings.</li>
</ul>

<h4>7. Third-Party Links</h4>
<p>Astradocs may contain links to third-party sites. We are not responsible for their privacy practices.</p>

<h4>8. Children's Privacy</h4>
<p>Astradocs is not intended for children under 13. We do not knowingly collect personal information from children.</p>

<h4>9. Policy Updates</h4>
<p>We may update this policy periodically. Significant changes will be communicated through email or platform notifications.</p>

<hr/>
`;

export function MarkdownView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Terms and Conditions"
          links={[{ name: 'Dashboard', href: '/' }, { name: 'Terms and Conditions' }]}
        />
      </ComponentHero>

      <ComponentContainer
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' },
        }}
      >
        <ComponentBlock title="Terms and Conditions" sx={{ pt: 0 }}>
          <Markdown children={htmlContent} />
        </ComponentBlock>

        <ComponentBlock title="Privacy Policy" sx={{ pt: 0 }}>
          <Markdown children={mardownContent} />
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}