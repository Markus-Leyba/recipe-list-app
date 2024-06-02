// src/tests/integration/HomePage.integration.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import RecipePage from '../../pages/RecipePage';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const recipesData = {
  recipes: [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp'
    }
  ],
  total: 1,
  skip: 0,
  limit: 30
};

describe('HomePage Navigation', () => {
  afterEach(() => {
    mock.reset();
  });

  it('navigates to RecipePage when a recipe is clicked', async () => {
    mock.onGet('https://dummyjson.com/recipes?limit=10&skip=0').reply(200, recipesData);
    mock.onGet('https://dummyjson.com/recipes/1').reply(200, recipesData.recipes[0]);

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();
    });

    userEvent.click(screen.getByText('Classic Margherita Pizza'));

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
});
