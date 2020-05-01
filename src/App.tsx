import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import MainLayout from './layouts/Main';
import { navLinks } from './data';

const getRoute = (
  Comp: React.ReactType,
  data: any,
  index: number,
): React.FC<RouteComponentProps> => ({ ...rest }) => (
  <Comp data={data} {...rest} key={`route-${index}`} />
);

const Routes: React.FC = () => (
  <MainLayout>
    <Router>
      {navLinks.map(({ component, data, url }, i) =>
        getRoute(component, data, i)({ path: url }),
      )}
    </Router>
  </MainLayout>
);

const App: React.FC = () => {
  return <Routes />;
};

export default App;
