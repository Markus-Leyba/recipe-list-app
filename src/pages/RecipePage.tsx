import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipePage.css';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecipeById(Number(id));
  }, [id]);

  const fetchRecipeById = async (id: number) => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      setError('Error fetching recipe');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-page">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;
