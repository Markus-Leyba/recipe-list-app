// src/tests/integration/FetchRecipeById.integration.test.ts
import { fetchRecipeById } from '../../api/FetchRecipeById';
import { Recipe } from '../../types/recipes/Recipe';
import axios from 'axios';

describe('fetchRecipeById Integration Test', () => {
  it('should fetch a recipe by ID from the actual API and validate its structure', async () => {
    const id = 1;
    const recipe: Recipe = await fetchRecipeById(id);
    
    // Check the structure of the recipe
    expect(recipe).toHaveProperty('id', id);
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

  it('should handle errors from the API', async () => {
    const invalidId = 99999; // Assume this ID does not exist
    try {
      await fetchRecipeById(invalidId);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.message).toContain('Request failed with status code 404');
      } else {
        throw error;
      }
    }
  });
});
