import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { FormDialog } from './form-dialog';
import { AlertDialog } from './alert-dialog';
import { ScrollDialog } from './scroll-dialog';
import { SimpleDialog } from './simple-dialog';
import { MaxWidthDialog } from './max-width-dialog';
import { ComponentHero } from '../../component-hero';
import { FullScreenDialog } from './full-screen-dialog';
import { TransitionsDialog } from './transitions-dialog';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function DialogView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Integration"
          links={[{ name: 'Dashboard', href: '/' }, { name: 'More' }, { name: 'Pages' }, { name: 'Integration' }]}
        />
      </ComponentHero>

      <ComponentContainer
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        }}
      >

        <ComponentBlock title="Explore Our Integrations">
          <AlertDialog />
        </ComponentBlock>

        <ComponentBlock title="All Supported Integrations">
          <TransitionsDialog />
        </ComponentBlock>

        <ComponentBlock title="Access Integration Guides">
          <FormDialog />
        </ComponentBlock>

        <ComponentBlock title="Request Custom Integration Support">
          <MaxWidthDialog />
        </ComponentBlock>

      </ComponentContainer>
    </>
  );
}
