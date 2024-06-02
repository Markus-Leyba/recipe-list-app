// src/api/__tests__/fetchAllRecipes.test.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchAllRecipes } from '../../api/FetchAllRecipes';

describe('fetchAllRecipes', () => {
  const mock = new MockAdapter(axios);
  const recipesData = {
    recipes: [
      { id: 1, title: 'Recipe 1', image: 'image1.jpg', description: 'Description 1' },
      { id: 2, title: 'Recipe 2', image: 'image2.jpg', description: 'Description 2' },
    ],
  };

  afterEach(() => {
    mock.reset();
  });

  it('should fetch all recipes successfully', async () => {
    mock.onGet('https://dummyjson.com/recipes').reply(200, recipesData);

    const data = await fetchAllRecipes();
    expect(data).toEqual(recipesData);
  });

  it('should handle errors', async () => {
    mock.onGet('https://dummyjson.com/recipes').reply(500);

    await expect(fetchAllRecipes()).rejects.toThrow('Request failed with status code 500');
  });
});
