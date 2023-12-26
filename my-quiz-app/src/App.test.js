import { render, screen } from '@testing-library/react';
import App from './App';

test('renders specific element in App', () => {
  render(<App />);
  const specificElement = screen.getByText('SpecificText');
  expect(specificElement).toBeInTheDocument();
});
