import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import { Router } from '@reach/router';
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

const Main = () => (
  <div>
    <Header />
    <main>
      <Router>
        <Greeter path="/" />
      </Router>
    </main>
    <StatusBar />
  </div>
);

export default Main;
