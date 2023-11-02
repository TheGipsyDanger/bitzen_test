import * as React from 'react';
import { RegisterPet }from './';
import { render } from '@testing-library/react-native';

describe('Render RegisterPet', () => {
  it('Should be RegisterPet exist', () => {
    const { getByTestId } = render(<RegisterPet />);
    const currentElement = getByTestId(`RegisterPet`);
    expect(currentElement).toBeTruthy();
  });
});