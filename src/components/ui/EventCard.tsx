import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface Event {
  title: string;
  date: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{event.description}</p>
      </CardContent>
      <CardFooter>
        <button className="w-full">
          View Details
        </button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;