export interface EventProps {
    id?: string;
    title: string;
    description: string;
    // imageSource: string;
    category: string;
    local:string;
    date: string;
    companyEmail: string;
  }
  
  export type EventContextType = {
    events: EventProps[];
    filterEvent: (category: string) => void;
  };
  
  