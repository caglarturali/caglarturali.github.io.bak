import React from 'react';
import Typed from 'typed.js';
import MainContact from './MainContact.js';
import GitHubButtons from '../GHButtons/GitHubButtons';

import strings from '../../data/strings.json';

class Greeter extends React.Component {
  componentDidMount() {
    const options = {
      strings: strings.typed,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <section id="greeter">
        <h1>{strings.mainLine}</h1>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
        <GitHubButtons />
        <MainContact />
      </section>
    );
  }
}

export default Greeter;
