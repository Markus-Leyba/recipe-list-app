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

``` yarn install
```

## Running the Application

```
yarn start
yarn dev
```
The application will be available at http://localhost:5173.

## Running Tests

Run all tests using Jest:

```
yarn test

```

## Bugs and Issues

xxx

## Discussion/Reflection 


////
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
