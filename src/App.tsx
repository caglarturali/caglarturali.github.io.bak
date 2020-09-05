import React from 'react';
import { Router } from '@reach/router';
import MainLayout from './layouts/Main';
import routes from './routes';

import tabs from './data/tabs/_';
import contactData from './data/contact.json';

const App: React.FC = () => (
  <MainLayout tabs={tabs} contactData={contactData}>
    <Router>{routes}</Router>
  </MainLayout>
);

export default App;
