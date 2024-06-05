import { render, screen, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import RecipePage from '../../pages/RecipePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

const mock = new MockAdapter(axios);

const recipeData = {
  id: 1,
  name: 'Classic Margherita Pizza',
  ingredients: [
    'Pizza dough',
    'Tomato sauce',
    'Fresh mozzarella cheese',
    'Fresh basil leaves',
    'Olive oil',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Preheat the oven to 475°F (245°C).',
    'Roll out the pizza dough and spread tomato sauce evenly.',
    'Top with slices of fresh mozzarella and fresh basil leaves.',
    'Drizzle with olive oil and season with salt and pepper.',
    'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
    'Slice and serve hot.'
  ],
  prepTimeMinutes: 20,
  cookTimeMinutes: 15,
  servings: 4,
  difficulty: 'Easy',
  cuisine: 'Italian',
  caloriesPerServing: 300,
  tags: ['Pizza', 'Italian'],
  userId: 45,
  image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
  rating: 4.6,
  reviewCount: 3,
  mealType: ['Dinner']
};

describe('RecipePage', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches and displays recipe details', async () => {
    mock.onGet('https://dummyjson.com/recipes/1').reply(200, recipeData);

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    );

    // Simulate navigating to /recipe/1
    act(() => {
      window.history.pushState({}, 'Test page', '/recipe/1');
    });

    // Debugging: Check if the URL is correct
    console.log(window.location.pathname);

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();
    });

    expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();
    expect(screen.getByText('Prep Time: 20 minutes')).toBeInTheDocument();
    expect(screen.getByText('Cook Time: 15 minutes')).toBeInTheDocument();
    expect(screen.getByText('Servings: 4')).toBeInTheDocument();
    expect(screen.getByText('Difficulty: Easy')).toBeInTheDocument();
    expect(screen.getByText('Italian')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
    expect(screen.getByText('Pizza dough')).toBeInTheDocument();
    expect(screen.getByText('Preheat the oven to 475°F (245°C).')).toBeInTheDocument();
  });

  it('handles error when fetching recipe details', async () => {
    mock.onGet('https://dummyjson.com/recipes/1').reply(500);

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

    await waitFor(() => {
      expect(screen.getByText('Error fetching recipe')).toBeInTheDocument();
    });
  });
});
