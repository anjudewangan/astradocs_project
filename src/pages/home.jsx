import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Astradocs',
  description:
    'Welcome to Astradocs, where innovation meets document management excellence. Revolutionize your approach to handling documents with our cutting-edge platform. Explore a seamless blend of advanced features, a user-friendly interface, and robust security.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <HomeView />
    </>
  );
}
