import React from 'react';
import { render } from '@testing-library/react';
import Greeter from '../Greeter';
import greetingData from '../../data/greeter.json';
import contactData from '../../data/contact.json';
import pkg from '../../../package.json';

describe('<Greeter />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Greeter
        greetingData={greetingData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
