import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button';

describe('Button', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    render(<Button />, div);
  });
  it('inner text value displays', () => {
    const { getByText } = render(<Button value="buttonvalue" name="button" >buttonvalue</Button>);
    expect(getByText('buttonvalue')).toHaveValue('buttonvalue');
  });
});