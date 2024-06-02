import axios from 'axios';

export const fetchAllRecipes = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/recipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching all recipes:', error);
    throw error;
  }
};