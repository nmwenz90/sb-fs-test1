import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slider from '../Slider';

describe('Button', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    render(<Slider />, div);
  });
});