import * as React from 'react';
import { Auth }from './';
import { render } from '@testing-library/react-native';

describe('Render Auth', () => {
  it('Should be Auth exist', () => {
    const { getByTestId } = render(<Auth />);
    const currentElement = getByTestId(`Auth`);
    expect(currentElement).toBeTruthy();
  });
});