import { render, screen } from '@testing-library/react';
import RecipePage from '../pages/RecipePage';
import { BrowserRouter } from 'react-router-dom';

test('renders recipe page message', () => {
  render(
    <BrowserRouter>
      <RecipePage />
    </BrowserRouter>
  );
  expect(screen.getByText(/Welcome to the Recipe List App/i)).toBeInTheDocument();
});