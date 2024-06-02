# React Online Recipe Book

## Overview

The React Online Recipe Book is a web application that allows users to browse and view various recipes. The application includes features such as infinite scrolling on the homepage, detailed recipe views, and error handling for network requests. It is built using React, TypeScript, React Router, and Axios for handling HTTP requests.

## Features

### Homepage

- Displays a list of recipes with infinite scrolling.
- Allows users to navigate to individual recipe pages by clicking on a recipe.

### Recipe Page

- Displays detailed information about a selected recipe.
- Shows recipe name, image, preparation time, cooking time, servings, difficulty, cuisine, calories per serving,    ingredients, and instructions.
- Handles loading state and error state.

## Key Files and Their Functions

### App.tsx

- The main application component.
- Sets up routing using react-router-dom with routes for the homepage and individual recipe pages.

### HomePage.tsx

- Displays a list of recipes with infinite scrolling.
- Uses react-infinite-scroll-component for infinite scrolling functionality.

### RecipePage.tsx

- Fetches and displays detailed information about a single recipe based on the recipe ID from the URL.
- Handles loading and error states.

### API Utilities

- FetchAllRecipes.ts: Fetches all recipes from the API.
- FetchRecipeById.ts: Fetches a recipe by its ID from the API.

### Tests

#### Unit Tests

- App.test.tsx: Tests the main application setup.
- FetchAllRecipes.test.ts: Tests fetching all recipes.
- FetchRecipeById.test.ts: Tests fetching a recipe by ID.
- HomePage.test.tsx: Tests the homepage component.
- RecipePage.test.tsx: Tests the recipe page component.

#### Integration Tests

- HomePage.integration.test.tsx: Integration tests for the homepage.
- FetchAllRecipes.integration.test.ts: Integration tests for fetching all recipes.
- FetchRecipeById.integration.test.ts: Integration tests for fetching a recipe by ID.
- RecipePage.integration.test.tsx: Integration tests for the recipe page.

## Running the Project

### Prerequisites

- Node.js
- Yarn package manager

### Installation

#### 1. Clone Repo

```
git clone https://github.com/Markus-Leyba/recipe-list-app.git
cd recipe-list-app
```

#### 2. Install Dependencies

``` 
yarn install
```

#### 3. Start the Development Server

```
yarn dev
```

## Usage

The application will be available at http://localhost:5173. You can browse recipes on the HomePage and click on any recipe to view its details on the RecipePage.

## Running Tests

Run all tests using Jest:

```
yarn test
```

## Dependencies

The project uses several dependencies which are listed in the package.json file. Here are some key dependencies:

- React: JavaScript library for building user interfaces.
- React Router DOM: For routing in React applications.
- Axios: For making HTTP requests.
- React Infinite Scroll Component: For implementing infinite scrolling.
- Jest: For testing.
- React Testing Library: For testing React components.

### package.json

```
{
  "name": "recipe-list-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  },
  "dependencies": {
    "@testing-library/user-event": "^14.5.2",
    "axios": "^1.7.2",
    "axios-mock-adapter": "^1.22.0",
    "jest-mock": "^29.7.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-infinite-scroll-component": "^6.1.0",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@babel/core": "^7.24.6",
    "@babel/preset-env": "^7.24.6",
    "@babel/preset-react": "^7.24.6",
    "@babel/preset-typescript": "^7.24.6",
    "@testing-library/jest-dom": "^6.4.5",
    "@testing-library/react": "^15.0.7",
    "@testing-library/react-hooks": "^8.0.1",
    "@types/jest": "^29.5.12",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "babel-jest": "^29.7.0",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "ts-jest": "^29.1.4",
    "typescript": "^5.4.5",
    "vite": "^5.2.0"
  }
}
```

## Bugs and Issues

1. RecipePage has 1 integration test and 1 unit test that are still failing. Issues related to routing of test classes. 
2. RecipePage results in unknown failed API calls

## Discussion/Reflection

xxx

## Next steps (when I have more time)

- refactor the code into reusable components
- UI testing with Cypress
- Deploy on Netlify
