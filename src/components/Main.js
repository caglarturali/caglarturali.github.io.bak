import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
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

import Header from './Header';
import StatusBar from './StatusBar';
import LeftBar from './LeftBar';
import Greeter from './Greeter';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Certificates from './Certificates';

let history = createHistory(window);

const Main = () => (
  <div>
    <Header />
    <LeftBar />
    <main>
      <Router history={history}>
        <Greeter path="/" />
        <Skills path="/skills" />
        <Education path="/education" />
        <Projects path="/projects" />
        <Contact path="/contact" />
        <Certificates path="/certifications" />
      </Router>
    </main>
    <StatusBar />
  </div>
);

export default Main;
