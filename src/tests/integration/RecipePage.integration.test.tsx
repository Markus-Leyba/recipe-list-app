// src/tests/integration/RecipePage.integration.test.tsx
import { act, render, screen, waitFor } from '@testing-library/react';
import RecipePage from '../../pages/RecipePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

describe('RecipePage Integration', () => {
  it('renders the RecipePage component with a given route', async () => {
    render(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    );

    // Simulate navigating to /recipe/1
    act(() => {
      window.history.pushState({}, 'Test page', '/recipe/1');
    });

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
});
