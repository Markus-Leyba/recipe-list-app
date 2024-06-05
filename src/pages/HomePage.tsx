// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RecipeSummary } from '../types/recipes/RecipeSummary'; 
import RecipeList from '../components/RecipeList'; 
import './HomePage.css';

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeSummary[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecipes(page);
  }, [page]);

  const fetchRecipes = async (page: number) => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes?limit=10&skip=${(page - 1) * 10}`);
      setRecipes((prevRecipes) => [...prevRecipes, ...response.data.recipes]);
      if (response.data.recipes.length === 0) setHasMore(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(`Error fetching recipes: ${error.message}`);
      } else {
        setError('An unknown error occurred');
      }
      setHasMore(false);
    }
  };

  const loadMoreRecipes = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Recipe List App</h1>
      <RecipeList
        recipes={recipes}
        onLoadMore={loadMoreRecipes}
        hasMore={hasMore}
        error={error}
      />
    </div>
  );
};

export default HomePage;


