import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { SuspenseLoader } from './components';
import { ROUTES } from './constants';

const Loader = Component => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
const HomePage = Loader(lazy(() => import('./pages/home')));
const AboutUs = Loader(lazy(() => import('./pages/about')));
const NotFound = Loader(lazy(() => import('./pages/not-found')));
const Services = Loader(lazy(() => import('./pages/services')));
const ServiceDetails = Loader(lazy(() => import('./pages/service-details')));
const Projects = Loader(lazy(() => import('./pages/projects')));

const routes: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.aboutUs,
    element: <AboutUs />,
  },

  {
    path: ROUTES.services,
    element: <Services />,
  },
  {
    path: ROUTES.serviceDetails,
    element: <ServiceDetails />,
  },
  {
    path: `${ROUTES.projects}/:id`,
    element: <Projects />,
  },

  {
    path: ROUTES.notFound,
    element: <NotFound />,
  },
];

export default routes;
