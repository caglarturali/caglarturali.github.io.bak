import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Header from './Header/Header';
import Greeter from './Greeter/Greeter';

library.add(fab, faCheckSquare, faCoffee)

const Main = () => (
  <div>
    <Header />
    <main>
      <Greeter />
    </main>
  </div>
);

export default Main;
