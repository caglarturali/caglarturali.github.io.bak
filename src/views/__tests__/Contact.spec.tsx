import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../Contact';
import { contact } from '../../data';

describe('<Contact />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Contact data={contact} fileName="contact.test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
