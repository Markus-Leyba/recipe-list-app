import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders home page message', () => {
  render(<HomePage />);
  expect(screen.getByText(/Welcome to the Recipe List App/i)).toBeInTheDocument();
});