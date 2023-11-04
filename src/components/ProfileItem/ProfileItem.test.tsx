import * as React from 'react';
import { ProfileItem }from './';
import { render } from '@testing-library/react-native';

describe('Render ProfileItem', () => {
  it('Should be ProfileItem exist', () => {
    const { getByTestId } = render(<ProfileItem />);
    const currentElement = getByTestId(`ProfileItem`);
    expect(currentElement).toBeTruthy();
  });
});