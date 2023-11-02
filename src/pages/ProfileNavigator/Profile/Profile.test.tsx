import * as React from 'react';
import {Profile} from './';
import {render} from '@testing-library/react-native';

describe('Render Profile', () => {
  it('Should be Profile exist', () => {
    const {getByTestId} = render(<Profile />);
    const currentElement = getByTestId(`Profile`);
    expect(currentElement).toBeTruthy();
  });
});
