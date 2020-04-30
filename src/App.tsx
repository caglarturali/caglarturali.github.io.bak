import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import MainLayout from './layouts/Main';
import './theme/icons';

const Home: React.FC<RouteComponentProps> = () => <div>Hello</div>;

const Main: React.FC = () => (
  <MainLayout>
    <Router>
      <Home path="/" />
    </Router>
  </MainLayout>
);

const App: React.FC = () => {
  return <Main />;
};

export default App;
