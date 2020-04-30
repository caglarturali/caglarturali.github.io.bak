import React from 'react';
import 'normalize.css/normalize.css';
import { Router, createHistory } from '@reach/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faSlidersH,
  faUniversity,
  faCodeBranch,
  faTimes,
  faSmile,
  faStar,
  faCopy,
  faSearch,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faSlidersH,
  faUniversity,
  faCodeBranch,
  faTimes,
  faSmile,
  faStar,
  faCopy,
  faSearch,
  faCog,
);

import MainLayout from '../layouts/Main';
import Greeter from './Greeter';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Certificates from './Certificates';

const history = createHistory(window);

const Main = () => (
  <MainLayout>
    <Router history={history}>
      <Greeter path="/" />
      <Skills path="/skills" />
      <Education path="/education" />
      <Projects path="/projects" />
      <Contact path="/contact" />
      <Certificates path="/certifications" />
    </Router>
  </MainLayout>
);

export default Main;
