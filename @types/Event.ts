export interface EventProps {
    id?: number;
    title: string;
    description: string;
    imageSource: string;
    category: string;
  }
  
  export type EventContextType = {
    events: EventProps[];
    filterEvent: (category: string) => void;
  };
  
  