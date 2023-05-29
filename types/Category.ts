export interface CategoryProps {
    id?: string;
    name: string;
  }
  
  export type CategoryContextType = {
    categories: CategoryProps[];
  };
  
  