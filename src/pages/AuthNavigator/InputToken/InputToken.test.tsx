import * as React from 'react';
import { InputToken }from './';
import { render } from '@testing-library/react-native';

describe('Render InputToken', () => {
  it('Should be InputToken exist', () => {
    const { getByTestId } = render(<InputToken />);
    const currentElement = getByTestId(`InputToken`);
    expect(currentElement).toBeTruthy();
  });
});