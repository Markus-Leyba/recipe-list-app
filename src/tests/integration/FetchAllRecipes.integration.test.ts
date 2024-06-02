// tests/integration/FetchAllRecipes.integration.test.ts
import { fetchAllRecipes } from '../../api/FetchAllRecipes.ts';

describe('fetchAllRecipes Integration Test', () => {
  it('should fetch all recipes from the actual API', async () => {
    const data = await fetchAllRecipes();
    expect(data).toHaveProperty('recipes');
    expect(data.recipes.length).toBeGreaterThan(0);
  });
});
