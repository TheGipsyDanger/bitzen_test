import * as React from 'react';
import {Home} from './';
import {render} from '@testing-library/react-native';

describe('Render Home', () => {
  it('Should be Home exist', () => {
    const {getByTestId} = render(<Home />);
    const currentElement = getByTestId(`Home`);
    expect(currentElement).toBeTruthy();
  });
});
