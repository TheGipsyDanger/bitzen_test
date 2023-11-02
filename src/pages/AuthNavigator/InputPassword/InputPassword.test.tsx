import * as React from 'react';
import {InputPassword} from './';
import {render} from '@testing-library/react-native';

describe('Render InputPassword', () => {
  it('Should be InputPassword exist', () => {
    const {getByTestId} = render(<InputPassword />);
    const currentElement = getByTestId(`InputPassword`);
    expect(currentElement).toBeTruthy();
  });
});
