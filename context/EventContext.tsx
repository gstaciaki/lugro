import * as React from 'react';

import { EventContextType, EventProps } from '../@types/Event'
import { PropsWithChildren} from "react";
import useCollection from '../hook/useCollection';
const { data } = useCollection<Event>('events');


export const EventContext = React.createContext<EventContextType | null>(null);

export default function EventContextProvider ({ children } : PropsWithChildren){
  const [events, setEvent] = React.useState<EventProps[]>([
    {
      id: 1,
      category: 'post 1',
      description: 'this is a description',
      title: '',
      imageSource: '',

    },
    {
      id: 2,
      category: 'post 2',
      description: 'this is a description',
      title: '',
      imageSource: '',
    },
  ]);

const filterEvent = (category: string) => {
  events.filter((event: EventProps) => {
    if (event.category === category) {
      event.category = true;
      setEvent([...events]);
    }
  });
  };

  return (
    <EventContext.Provider value={{ events, filterEvent }}>{children}</EventContext.Provider>
  );
};


