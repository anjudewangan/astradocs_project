import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { timeline } from 'src/theme/core/components/timeline';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'About us',
    path: paths.about,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'Features',
    path: paths.components,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'Pricing',
    path: paths.pricing,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'How it works',
    path: '/components/mui/timeline',
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  // {
  //   title: 'More',
  //   path: '/pages',
  //   icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
  //   children: [
  //     {
  //       subheader: 'Other',
  //       items: [
  //         { title: 'Benefits', path: 'components/mui/alert' },
  //         { title: 'FAQs', path: paths.faqs },
  //         { title: 'Blogs', path: paths.post.root },
  //       ],
  //     },
  //     {
  //       subheader: 'Pages',
  //       items: [
  //         { title: 'Security', path: '/components/mui/accordion' },
  //         { title: 'Integration', path: '/components/mui/dialog' },
  //         { title: 'Updates/Release Notes', path: paths.maintenance },
  //       ],
  //     },
  //     {
  //       subheader: 'Contact',
  //       items: [
  //         { title: 'Contact us', path: paths.contact },
  //       ],
  //     },
  //     // {
  //     //   subheader: 'Concepts',
  //     //   items: [
  //     //     { title: 'Shop', path: paths.product.root },
  //     //     { title: 'Product', path: paths.product.demo.details },
  //     //     { title: 'Checkout', path: paths.product.checkout },
  //     //     { title: 'Posts', path: paths.post.root },
  //     //     { title: 'Post', path: paths.post.demo.details },
  //     //   ],
  //     // },
  //     // {
  //     //   subheader: 'Auth Demo',
  //     //   items: [
  //     //     { title: 'Sign in', path: paths.authDemo.split.signIn },
  //     //     { title: 'Sign up', path: paths.authDemo.split.signUp },
  //     //     { title: 'Reset password', path: paths.authDemo.split.resetPassword },
  //     //     { title: 'Update password', path: paths.authDemo.split.updatePassword },
  //     //     { title: 'Verify', path: paths.authDemo.split.verify },
  //     //     { title: 'Sign in (centered)', path: paths.authDemo.centered.signIn },
  //     //     { title: 'Sign up (centered)', path: paths.authDemo.centered.signUp },
  //     //     { title: 'Reset password (centered)', path: paths.authDemo.centered.resetPassword },
  //     //     { title: 'Update password (centered)', path: paths.authDemo.centered.updatePassword },
  //     //     { title: 'Verify (centered)', path: paths.authDemo.centered.verify },
  //     //   ],
  //     // },
  //     // {
  //     //   subheader: 'Error',
  //     //   items: [
  //     //     { title: 'Page 403', path: paths.page403 },
  //     //     { title: 'Page 404', path: paths.page404 },
  //     //     { title: 'Page 500', path: paths.page500 },
  //     //   ],
  //     // },
  //     { subheader: 'Dashboard', items: [{ title: 'Dashboard', path: CONFIG.auth.redirectPath }] },
  //   ],
  // },
  // {
  //   title: 'Docs',
  //   icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
  //   path: paths.docs,
  // },
];
