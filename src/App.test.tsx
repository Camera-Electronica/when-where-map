import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Main app component', () => {
  render(<App />);
  const linkElement = screen.getByTitle("Main");
  expect(linkElement).toBeInTheDocument();
});
