import React from 'react';

interface PageProps {
  id?: string;
}

const HomePage: React.FC<PageProps> = ({ id }) => {
  return (
    <div id={id}>
      <h1>Welcome to the Recipe List App</h1>
    </div>
  );
};

export default HomePage;


