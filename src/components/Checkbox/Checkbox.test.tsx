import * as React from 'react';
import { Checkbox }from './';
import { render } from '@testing-library/react-native';

describe('Render Checkbox', () => {
  it('Should be Checkbox exist', () => {
    const { getByTestId } = render(<Checkbox />);
    const currentElement = getByTestId(`Checkbox`);
    expect(currentElement).toBeTruthy();
  });
});