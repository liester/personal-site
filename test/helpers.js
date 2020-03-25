const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Levi Liester',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Levi Liester',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Levi Liester',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Levi Liester',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Levi Liester',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
