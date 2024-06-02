// src/api/FetchAllRecipes.ts
import axios from 'axios';

const DEFAULT_URL = 'https://dummyjson.com/recipes';

export const fetchAllRecipes = async (url: string = DEFAULT_URL) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching all recipes:', error.message);
      throw error;
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

