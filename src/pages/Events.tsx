import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Sidebar from '../components/layout/Sidebar';
import { Calendar, Users } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  type: string;
  attendees: number;
  description: string;
}

const EventTypeColors: Record<string, string> = {
  Workshop: 'bg-blue-100 text-blue-700',
  Seminar: 'bg-green-100 text-green-700',
  Competition: 'bg-purple-100 text-purple-700',
};

const Events: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ type: 'all' });

  const events: Event[] = [
    {
      title: 'AI/ML Workshop',
      date: '2025-10-15',
      type: 'Workshop',
      attendees: 50,
      description: 'Learn about machine learning basics and AI applications.'
    },
    {
      title: 'Hackathon 2025',
      date: '2025-11-05',
      type: 'Competition',
      attendees: 120,
      description: 'Collaborate with peers to solve real-world challenges.'
    },
    {
      title: 'Tech Talk: Web3',
      date: '2025-10-22',
      type: 'Seminar',
      attendees: 80,
      description: 'Insights into blockchain and decentralized technologies.'
    },
    {
      title: 'Robotics Meetup',
      date: '2025-11-12',
      type: 'Workshop',
      attendees: 40,
      description: 'Hands-on session with Arduino and robotics kits.'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filters.type === 'all' || event.type === filters.type;
    return matchesSearch && matchesType;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar />

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-8 py-4 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        </header>

        <main className="p-8 max-w-7xl mx-auto">
          {/* Search & Filter */}
          <Card className="mb-8 shadow-lg rounded-xl">
            <CardContent className="space-y-4 pt-6">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  className="pl-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                  <SelectTrigger className="rounded-lg border border-gray-300">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg rounded-lg z-50">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Seminar">Seminar</SelectItem>
                    <SelectItem value="Competition">Competition</SelectItem>
                  </SelectContent>
                </Select>

                <button
                  type="button"
                  className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300 font-medium"
                  onClick={() => {
                    setFilters({ type: 'all' });
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Event Cards */}
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden">
                  <div className={`p-4 ${EventTypeColors[event.type] || 'bg-gray-100'}`}>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm">{event.type} • {event.date}</p>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-gray-700 mb-2">{event.description}</p>
                    <p className="text-gray-500 text-sm">Attendees: {event.attendees}</p>
                  </CardContent>
                  <CardFooter className="px-4 pb-4">
                    <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition">
                      Join Event
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Events;
