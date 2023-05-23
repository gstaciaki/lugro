export interface CommentProps {
    id?: string;
    id_event: number;
    description: string;
    rating: number;
  }
  
  export type CommentContextType = {
    comments: CommentProps[];
  };
  
  