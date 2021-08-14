import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const logoElement = screen.getByAltText('Riverside.fm');
  expect(logoElement).toBeInTheDocument();
});
