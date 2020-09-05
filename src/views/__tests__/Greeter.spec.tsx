import React from 'react';
import { render } from '@testing-library/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Greeter from '../Greeter';
import greeting from '../../data/greeter.json';
import contact from '../../data/contact.json';
import pkg from '../../../package.json';

describe('<Greeter />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Greeter
        greeting={greeting}
        contactItems={contact.map((item) => ({
          ...item,
          icon: item.icon as IconProp,
        }))}
        repoUrl={pkg.repository.url}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
