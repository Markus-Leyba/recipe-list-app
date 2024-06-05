// src/components/RecipeList.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeListProps } from '../types/recipes/RecipeListProps'; 
import InfiniteScroll from 'react-infinite-scroll-component';

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onLoadMore, hasMore, error }) => {
  const navigate = useNavigate();

  const handleRecipeClick = (id: number) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <InfiniteScroll
          dataLength={recipes.length}
          next={onLoadMore}
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

export default RecipeList;
