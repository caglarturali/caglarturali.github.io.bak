import React from 'react';
import { Router } from '@reach/router';
import ReactTooltip from 'react-tooltip';
import MainLayout from './layouts/Main';
import routes from './routes';

import { tabs } from './data';
import contactData from './data/json/contact.json';

const App: React.FC = () => (
  <MainLayout tabs={tabs} contactData={contactData}>
    <Router>{routes}</Router>
    <ReactTooltip />
  </MainLayout>
);

export default App;
