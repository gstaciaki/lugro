export interface CommentProps {
    id?: string;
    // id_event: number;
    description: string;
    rating: string;
  }
  
  export type CommentContextType = {
    comments: CommentProps[];
  };
  
  