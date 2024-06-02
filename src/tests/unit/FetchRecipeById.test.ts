// src/tests/unit/FetchRecipeById.test.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchRecipeById } from '../../api/FetchRecipeById';
import { Recipe } from '../../types/Recipe';

describe('fetchRecipeById', () => {
  const mock = new MockAdapter(axios);
  const recipeData: Recipe = {
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

  afterEach(() => {
    mock.reset();
  });

  it('should fetch a recipe by ID successfully', async () => {
    mock.onGet('https://dummyjson.com/recipes/1').reply(200, recipeData);

    const recipe = await fetchRecipeById(1);
    expect(recipe).toEqual(recipeData);
  });

  it('should handle 404 error when recipe is not found', async () => {
    mock.onGet('https://dummyjson.com/recipes/99999').reply(404);

    await expect(fetchRecipeById(99999)).rejects.toThrow('Request failed with status code 404');
  });

  it('should handle network error', async () => {
    mock.onGet('https://dummyjson.com/recipes/1').networkError();

    await expect(fetchRecipeById(1)).rejects.toThrow('Network Error');
  });
});
