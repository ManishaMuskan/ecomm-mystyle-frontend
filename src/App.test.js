import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/search for products, brands and more/i);
  expect(linkElement).toBeInTheDocument();
});
