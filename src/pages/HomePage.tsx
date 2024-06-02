// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

interface RecipeSummary {
  id: number;
  name: string;
  image: string;
}

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeSummary[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleRecipeClick = (id: number) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Recipe List App</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <InfiniteScroll
          dataLength={recipes.length}
          next={loadMoreRecipes}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more recipes</p>}
        >
          <div className="recipe-list">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe.id)}>
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <h3>{recipe.name}</h3>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default HomePage;

