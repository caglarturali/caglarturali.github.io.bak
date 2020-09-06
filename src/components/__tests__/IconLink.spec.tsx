import React from 'react';
import { render } from '@testing-library/react';
import IconLink from '../IconLink';

describe('<IconLink />', () => {
  test('should render correctly', () => {
    const internalLink = {
      name: 'Home',
      url: '/',
      icon: 'home',
      isInternal: true,
    };
    const { asFragment } = render(<IconLink {...internalLink} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
