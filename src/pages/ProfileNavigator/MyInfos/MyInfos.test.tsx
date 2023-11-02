import * as React from 'react';
import { MyInfos }from './';
import { render } from '@testing-library/react-native';

describe('Render MyInfos', () => {
  it('Should be MyInfos exist', () => {
    const { getByTestId } = render(<MyInfos />);
    const currentElement = getByTestId(`MyInfos`);
    expect(currentElement).toBeTruthy();
  });
});