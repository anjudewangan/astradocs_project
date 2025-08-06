import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _carouselsMembers = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.portrait(index),
}));

// ----------------------------------------------------------------------

// export const _faqs = [...Array(20)].map((_, index) => ({
//   id: _mock.id(index),
//   value: `panel${index + 1}`,
//   heading: `Questions ${index + 1}`,
//   detail: _mock.description(index),
// }));

export const _faqs = [
  {
    id: _mock.id(1),
    value: "panel1",
    category: "Getting Started",
    heading: "What is Astradocs, and how does it simplify document management?",
    detail: _mock.description(0),
  },
  {
    id: _mock.id(7),
    value: "panel7",
    category: "Getting Started",
    heading: "How do I get started with Astradocs? Are there setup fees?",
    detail: _mock.description(6),
  },
  {
    id: _mock.id(16),
    value: "panel16",
    category: "Getting Started",
    heading: "What is the process for migrating existing documents to Astradocs?",
    detail: _mock.description(15),
  },

  {
    id: _mock.id(3),
    value: "panel3",
    category: "Security Concerns",
    heading: "What security measures does Astradocs employ to protect my documents?",
    detail: _mock.description(2),
  },
  {
    id: _mock.id(11),
    value: "panel11",
    category: "Security Concerns",
    heading: "How does Astradocs handle data backup and recovery?",
    detail: _mock.description(10),
  },

  {
    id: _mock.id(2),
    value: "panel2",
    category: "Billing and Plans",
    heading: "Is there a free trial available, and how can I sign up?",
    detail: _mock.description(1),
  },
  {
    id: _mock.id(9),
    value: "panel9",
    category: "Billing and Plans",
    heading: "What are the different pricing plans available, and what features do they include?",
    detail: _mock.description(8),
  },
  {
    id: _mock.id(10),
    value: "panel10",
    category: "Billing and Plans",
    heading: "Are there any discounts for non-profits or educational institutions?",
    detail: _mock.description(9),
  },
  {
    id: _mock.id(15),
    value: "panel15",
    category: "Billing and Plans",
    heading: "Are there any limitations on the number of users or storage space for each plan?",
    detail: _mock.description(14),
  },

  {
    id: _mock.id(8),
    value: "panel8",
    category: "Troubleshooting",
    heading: "Is Astradocs compatible with both Windows and Mac operating systems?",
    detail: _mock.description(7),
  },
  {
    id: _mock.id(13),
    value: "panel13",
    category: "Troubleshooting",
    heading: "What customer support options are available, and what is the response time?",
    detail: _mock.description(12),
  },
  {
    id: _mock.id(17),
    value: "panel17",
    category: "Troubleshooting",
    heading: "How often does Astradocs release updates, and how can I stay informed about new features?",
    detail: _mock.description(16),
  },
  {
    id: _mock.id(18),
    value: "panel18",
    category: "Troubleshooting",
    heading: "Does Astradocs offer training resources or documentation for users?",
    detail: _mock.description(17),
  },
  {
    id: _mock.id(19),
    value: "panel19",
    category: "Troubleshooting",
    heading: "What is the cancellation policy, and how can I export my data if I choose to discontinue using Astradocs?",
    detail: _mock.description(18),
  },
  {
    id: _mock.id(20),
    value: "panel20",
    category: "Troubleshooting",
    heading: "Is there a community or forum where users can share experiences and tips?",
    detail: _mock.description(19),
  },

  {
    id: _mock.id(4),
    value: "panel4",
    category: "Getting Started",
    heading: "Can I integrate Astradocs with other tools like Google Workspace or Microsoft 365?",
    detail: _mock.description(3),
  },
  {
    id: _mock.id(5),
    value: "panel5",
    category: "Getting Started",
    heading: "How does Astradocs ensure compliance with industry regulations?",
    detail: _mock.description(4),
  },
  {
    id: _mock.id(6),
    value: "panel6",
    category: "Getting Started",
    heading: "What types of organizations benefit most from using Astradocs?",
    detail: _mock.description(5),
  },
  {
    id: _mock.id(12),
    value: "panel12",
    category: "Security Concerns",
    heading: "Can I access Astradocs on mobile devices, and are there dedicated apps?",
    detail: _mock.description(11),
  },
  {
    id: _mock.id(14),
    value: "panel14",
    category: "Security Concerns",
    heading: "Can I customize Astradocs to fit the specific needs of my organization?",
    detail: _mock.description(13),
  },
];


// ----------------------------------------------------------------------

export const _addressBooks = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  primary: index === 0,
  name: _mock.fullName(index),
  email: _mock.email(index + 1),
  fullAddress: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  company: _mock.companyNames(index + 1),
  addressType: index === 0 ? 'Home' : 'Office',
}));

// ----------------------------------------------------------------------

export const _contacts = [...Array(20)].map((_, index) => {
  const status =
    (index % 2 && 'online') || (index % 3 && 'offline') || (index % 4 && 'alway') || 'busy';

  return {
    id: _mock.id(index),
    status,
    role: _mock.role(index),
    email: _mock.email(index),
    name: _mock.fullName(index),
    phoneNumber: _mock.phoneNumber(index),
    lastActivity: _mock.time(index),
    avatarUrl: _mock.image.avatar(index),
    address: _mock.fullAddress(index),
  };
});

// ----------------------------------------------------------------------

export const _notifications = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: [
    _mock.image.avatar(1),
    _mock.image.avatar(2),
    _mock.image.avatar(3),
    _mock.image.avatar(4),
    _mock.image.avatar(5),
    null,
    null,
    null,
    null,
    null,
  ][index],
  type: ['friend', 'project', 'file', 'tags', 'payment', 'order', 'chat', 'mail', 'delivery'][
    index
  ],
  category: [
    'Communication',
    'Project UI',
    'File manager',
    'File manager',
    'File manager',
    'Order',
    'Order',
    'Communication',
    'Communication',
  ][index],
  isUnRead: _mock.boolean(index),
  createdAt: _mock.time(index),
  title:
    (index === 0 && `<p><strong>Deja Brady</strong> sent you a friend request</p>`) ||
    (index === 1 &&
      `<p><strong>Jayvon Hull</strong> mentioned you in <strong><a href='#'>Minimal UI</a></strong></p>`) ||
    (index === 2 &&
      `<p><strong>Lainey Davidson</strong> added file to <strong><a href='#'>File manager</a></strong></p>`) ||
    (index === 3 &&
      `<p><strong>Angelique Morse</strong> added new tags to <strong><a href='#'>File manager<a/></strong></p>`) ||
    (index === 4 &&
      `<p><strong>Giana Brandt</strong> request a payment of <strong>$200</strong></p>`) ||
    (index === 5 && `<p>Your order is placed waiting for shipping</p>`) ||
    (index === 6 && `<p>Delivery processing your order is being shipped</p>`) ||
    (index === 7 && `<p>You have new message 5 unread messages</p>`) ||
    (index === 8 && `<p>You have new mail`) ||
    '',
}));

// ----------------------------------------------------------------------

export const _mapContact = [
  { latlng: [33, 65], address: _mock.fullAddress(1), phoneNumber: _mock.phoneNumber(1) },
  { latlng: [-12.5, 18.5], address: _mock.fullAddress(2), phoneNumber: _mock.phoneNumber(2) },
];

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'Facebook',
    path: 'https://www.facebook.com/caitlyn.kerluke',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    path: 'https://www.instagram.com/caitlyn.kerluke',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    path: 'https://www.linkedin.com/caitlyn.kerluke',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    path: 'https://www.twitter.com/caitlyn.kerluke',
  },
];

// ----------------------------------------------------------------------

export const _pricingPlans = [
  {
    subscription: 'free trial',
    price: 0,
    caption: 'Free',
    lists: ['Risk-Free Trial', 'Full Feature Access', 'Transformative Impact',],
    labelAction: 'Free trial',
  },
  {
    subscription: 'starter',
    price: 129,
    caption: 'Saving ₹24 a year',
    lists: [
      'Perfect for Startups',
      'Essential Features',
      'Boost Productivity',
      'Affordable',
    ],
    labelAction: 'Choose starter', 
  },
  {
    subscription: 'professional',
    price: 599,
    caption: 'Saving ₹124 a year',
    lists: [
      'Designed for Growth',
      'Advanced Features',
      'Collaboration Tools',
      'Enhanced Security',
      'Scalable Solution',
    ],
    labelAction: 'Choose professional',
  },
  {
    subscription: 'enterprise',
    price: 999,
    caption: 'Saving ₹324 a year',
    lists: [
      'Tailored Solutions',
      'Comprehensive Document Management',
      'Priority Support',
      'Custom Integrations',
      'Enhanced Security',
      'Advanced Analytics',
    ],
    labelAction: 'Choose enterprise',
  },
];

// ----------------------------------------------------------------------

export const _testimonials = [
  {
    name: _mock.fullName(1),
    postedDate: _mock.time(1),
    ratingNumber: _mock.number.rating(1),
    avatarUrl: _mock.image.avatar(1),
    content: `Astradocs has completely transformed the way we handle our documents. The platform is intuitive, secure, and incredibly efficient – a game changer for our team!`,
  },
  {
    name: _mock.fullName(2),
    postedDate: _mock.time(2),
    ratingNumber: _mock.number.rating(2),
    avatarUrl: _mock.image.avatar(2),
    content: `The user-friendly interface and advanced features of Astradocs have significantly improved our workflow. We can now access documents securely from anywhere, making remote work seamless.`,
  },
  {
    name: _mock.fullName(3),
    postedDate: _mock.time(3),
    ratingNumber: _mock.number.rating(3),
    avatarUrl: _mock.image.avatar(3),
    content: `Astradocs has been a fantastic tool for our business. Its robust security and powerful features have given us confidence in managing our most sensitive documents.`,
  },
  {
    name: _mock.fullName(4),
    postedDate: _mock.time(4),
    ratingNumber: _mock.number.rating(4),
    avatarUrl: _mock.image.avatar(4),
    content: `Thanks to Astradocs, we’ve streamlined our document management system, saving time and improving collaboration across departments. It's an indispensable tool for our business.`,
  },
  {
    name: _mock.fullName(5),
    postedDate: _mock.time(5),
    ratingNumber: _mock.number.rating(5),
    avatarUrl: _mock.image.avatar(5),
    content: `Astradocs has been a lifesaver for our team. The easy integration and cloud-based access have made document management more efficient and secure than ever before.`,
  },
  {
    name: _mock.fullName(6),
    postedDate: _mock.time(6),
    ratingNumber: _mock.number.rating(6),
    avatarUrl: _mock.image.avatar(6),
    content: `We’ve tried several document management systems, but none compare to Astradocs. The advanced features and excellent customer support have made it an invaluable asset to our company.`,
  },
];
