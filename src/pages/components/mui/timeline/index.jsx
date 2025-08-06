import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TimelineView } from 'src/sections/_examples/mui/timeline-view';

// ----------------------------------------------------------------------

const metadata = { title: `How it works | ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TimelineView />
    </>
  );
}
