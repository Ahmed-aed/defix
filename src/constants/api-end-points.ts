export const apiEndPoints = {
  header: '/header',
  footer: '/footer',
  body: '/body',
  service: '/service',
  serviceDetails: (id: string) => `/service/details/${id}`,
  about: '/about',
  constructions: '/constructions',
  project: '/project',
} as const;
