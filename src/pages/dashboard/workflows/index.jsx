import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { WorkflowsView } from 'src/sections/workflows/view';

// ----------------------------------------------------------------------

const metadata = { title: `Workflows | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <WorkflowsView />
    </>
  );
}
