import * as React from 'react';
import { Avatar }from './';
import { render } from '@testing-library/react-native';

describe('Render Avatar', () => {
  it('Should be Avatar exist', () => {
    const { getByTestId } = render(<Avatar />);
    const currentElement = getByTestId(`Avatar`);
    expect(currentElement).toBeTruthy();
  });
});