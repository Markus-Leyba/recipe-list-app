// src/api/FetchRecipeById.ts
import axios from 'axios';

export const fetchRecipeById = async (id: number) => {
  const url = `https://dummyjson.com/recipes/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching recipe with ID ${id}:`, error.message);
      throw error;
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
