import React from 'react';
import { Router } from '@reach/router';
import MainLayout from './layouts/Main';
import routes from './routes';

const App: React.FC = () => (
  <MainLayout>
    <Router>{routes}</Router>
  </MainLayout>
);

export default App;
