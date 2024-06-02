import React from 'react';

interface PageProps {
  id?: string;
}

const RecipePage: React.FC<PageProps> = ({ id }) => {
  return (
    <div id={id}>
      <h1>Welcome to the Recipe List App</h1>
    </div>
  );
};

export default RecipePage;


