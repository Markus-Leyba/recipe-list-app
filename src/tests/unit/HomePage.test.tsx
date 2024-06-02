// src/tests/unit/HomePage.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HomePage from '../../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

const mock = new MockAdapter(axios);

const recipesData = {
  recipes: [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp'
    },
    {
      id: 2,
      name: 'Chocolate Chip Cookies',
      image: 'https://cdn.dummyjson.com/recipe-images/2.webp'
    }
  ],
  total: 2,
  skip: 0,
  limit: 30
};

const moreRecipesData = {
  recipes: [
    {
      id: 3,
      name: 'Spaghetti Carbonara',
      image: 'https://cdn.dummyjson.com/recipe-images/3.webp'
    },
    {
      id: 4,
      name: 'Beef Tacos',
      image: 'https://cdn.dummyjson.com/recipe-images/4.webp'
    }
  ],
  total: 4,
  skip: 2,
  limit: 30
};

describe('HomePage', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches and displays recipes', async () => {
    mock.onGet('https://dummyjson.com/recipes?limit=10&skip=0').reply(200, recipesData);

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();
      expect(screen.getByText('Chocolate Chip Cookies')).toBeInTheDocument();
    });

    expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();
    expect(screen.getByText('Chocolate Chip Cookies')).toBeInTheDocument();
  });

  it('handles error when fetching recipes', async () => {
    mock.onGet('https://dummyjson.com/recipes?limit=10&skip=0').reply(500);

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Error fetching recipes:/)).toBeInTheDocument();
    });
  });

  it('fetches more recipes on scroll', async () => {
    mock.onGet('https://dummyjson.com/recipes?limit=10&skip=0').reply(200, recipesData);
    mock.onGet('https://dummyjson.com/recipes?limit=10&skip=10').reply(200, moreRecipesData);

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();
      expect(screen.getByText('Chocolate Chip Cookies')).toBeInTheDocument();
    });

    // Mock scrolling event
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);

    await waitFor(() => {
      expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
      expect(screen.getByText('Beef Tacos')).toBeInTheDocument();
    });

    expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
    expect(screen.getByText('Beef Tacos')).toBeInTheDocument();
  });
});
