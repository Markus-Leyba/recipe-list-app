// src/tests/integration/fetchAllRecipes.integration.test.ts
import { fetchAllRecipes } from '../../api/FetchAllRecipes';
import { Recipe } from '../../types/recipes/Recipe';


describe('fetchAllRecipes Integration Test', () => {
  it('should fetch all recipes from the actual API and validate their structure', async () => {
    const data = await fetchAllRecipes(1);
    
    // Basic checks
    expect(data).toHaveProperty('recipes');
    expect(data.recipes.length).toBeGreaterThan(0);
    
    // Check the structure of each recipe
    data.recipes.forEach((recipe: Recipe) => {
      expect(recipe).toHaveProperty('id');
      expect(recipe).toHaveProperty('name');
      expect(recipe).toHaveProperty('ingredients');
      expect(recipe).toHaveProperty('instructions');
      expect(recipe).toHaveProperty('prepTimeMinutes');
      expect(recipe).toHaveProperty('cookTimeMinutes');
      expect(recipe).toHaveProperty('servings');
      expect(recipe).toHaveProperty('difficulty');
      expect(recipe).toHaveProperty('cuisine');
      expect(recipe).toHaveProperty('caloriesPerServing');
      expect(recipe).toHaveProperty('tags');
      expect(recipe).toHaveProperty('userId');
      expect(recipe).toHaveProperty('image');
      expect(recipe).toHaveProperty('rating');
      expect(recipe).toHaveProperty('reviewCount');
      expect(recipe).toHaveProperty('mealType');
      
      // Check types and values
      expect(typeof recipe.id).toBe('number');
      expect(typeof recipe.name).toBe('string');
      expect(Array.isArray(recipe.ingredients)).toBe(true);
      expect(Array.isArray(recipe.instructions)).toBe(true);
      expect(typeof recipe.prepTimeMinutes).toBe('number');
      expect(typeof recipe.cookTimeMinutes).toBe('number');
      expect(typeof recipe.servings).toBe('number');
      expect(typeof recipe.difficulty).toBe('string');
      expect(typeof recipe.cuisine).toBe('string');
      expect(typeof recipe.caloriesPerServing).toBe('number');
      expect(Array.isArray(recipe.tags)).toBe(true);
      expect(typeof recipe.userId).toBe('number');
      expect(typeof recipe.image).toBe('string');
      expect(typeof recipe.rating).toBe('number');
      expect(typeof recipe.reviewCount).toBe('number');
      expect(Array.isArray(recipe.mealType)).toBe(true);
    });
  });
});
