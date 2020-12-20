import { render, screen } from '@testing-library/react';
import App from './App';

test('renders source from component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Source/i);
  expect(linkElement).toBeInTheDocument();
});
