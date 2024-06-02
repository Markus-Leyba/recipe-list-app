// src/tests/unit/FetchAllRecipes.test.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchAllRecipes } from '../../api/FetchAllRecipes';


describe('fetchAllRecipes', () => {
  const mock = new MockAdapter(axios);
  const recipesData = {
    recipes: [
      {
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
      },
      {
        id: 2,
        name: 'Chocolate Chip Cookies',
        ingredients: [
          'Flour',
          'Sugar',
          'Butter',
          'Chocolate chips',
          'Eggs',
          'Baking powder',
          'Salt'
        ],
        instructions: [
          'Preheat the oven to 350°F (175°C).',
          'Cream together the butter and sugar.',
          'Beat in the eggs one at a time.',
          'Stir in the flour, baking powder, and salt.',
          'Fold in the chocolate chips.',
          'Drop by spoonfuls onto a baking sheet.',
          'Bake for 10-12 minutes or until edges are golden brown.'
        ],
        prepTimeMinutes: 15,
        cookTimeMinutes: 12,
        servings: 24,
        difficulty: 'Medium',
        cuisine: 'American',
        caloriesPerServing: 150,
        tags: ['Cookies', 'Dessert'],
        userId: 23,
        image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
        rating: 4.8,
        reviewCount: 10,
        mealType: ['Dessert']
      }
    ],
    total: 2,
    skip: 0,
    limit: 30
  };

  afterEach(() => {
    mock.reset();
  });

  it('should fetch all recipes successfully', async () => {
    mock.onGet('https://dummyjson.com/recipes').reply(200, recipesData);

    const data = await fetchAllRecipes();
    expect(data).toEqual(recipesData);
  });

  it('should handle 404 error when endpoint is not found', async () => {
    mock.onGet('https://dummyjson.com/invalid-endpoint').reply(404);

    await expect(fetchAllRecipes('https://dummyjson.com/invalid-endpoint')).rejects.toThrow('Request failed with status code 404');
  });

  it('should handle network error', async () => {
    mock.onGet('https://dummyjson.com/recipes').networkError();

    await expect(fetchAllRecipes()).rejects.toThrow('Network Error');
  });
});
