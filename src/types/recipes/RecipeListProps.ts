// src/types/recipes/RecipeListProps.ts
import { RecipeSummary } from './RecipeSummary';

export interface RecipeListProps {
  recipes: RecipeSummary[];
  onLoadMore: () => void;
  hasMore: boolean;
  error: string | null;
}
