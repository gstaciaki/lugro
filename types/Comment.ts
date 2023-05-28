export interface CommentProps {
    id?: string;
    description: string;
    rating: string;
  }
  
  export type CommentContextType = {
    comments: CommentProps[];
  };
  
  