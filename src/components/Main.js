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
  faStar
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faSlidersH, faUniversity, faCodeBranch, faTimes, faSmile, faStar);

import Header from './Header/Header';
import StatusBar from './StatusBar/StatusBar';
import Greeter from './Greeter/Greeter';
import Skills from './Skills/Skills';

let history = createHistory(window);

const Main = () => (
  <div>
    <Header />
    <main>
      <Router history={history}>
        <Greeter path="/" />
        <Skills path="/skills" />
      </Router>
    </main>
    <StatusBar />
  </div>
);

export default Main;
