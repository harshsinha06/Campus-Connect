import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Sidebar from '../components/layout/Sidebar';
import PeerCard from '../components/ui/PeerCard';
import { Search, Users } from 'lucide-react';

const PeerSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ branch: 'all', year: 'all', skill: '' });

  const peers = [
    { name: 'Sarah Johnson', branch: 'Computer Science', year: 3, skills: ['React', 'Python', 'ML'], avatar: '' },
    { name: 'Mike Chen', branch: 'Computer Science', year: 2, skills: ['Java', 'Android', 'Firebase'], avatar: '' },
    { name: 'Emily Davis', branch: 'Electronics', year: 3, skills: ['IoT', 'Arduino', 'PCB Design'], avatar: '' },
    { name: 'David Lee', branch: 'Mechanical', year: 4, skills: ['CAD', 'SolidWorks', '3D Printing'], avatar: '' },
    { name: 'Anna Wilson', branch: 'Computer Science', year: 2, skills: ['JavaScript', 'Vue', 'CSS'], avatar: '' },
    { name: 'James Brown', branch: 'Civil', year: 3, skills: ['AutoCAD', 'Revit', 'Structural Analysis'], avatar: '' },
  ];

  const filteredPeers = peers.filter(peer => {
    const matchesSearch =
      peer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      peer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesBranch = filters.branch === 'all' || peer.branch === filters.branch;
    const matchesYear = filters.year === 'all' || peer.year.toString() === filters.year;

    return matchesSearch && matchesBranch && matchesYear;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar />

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-8 py-4 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Find Peers</h1>
        </header>

        <main className="p-8 max-w-7xl mx-auto">
          {/* Search & Filters */}
          <Card className="mb-8 shadow-lg rounded-xl">
            <CardContent className="pt-6 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or skill..."
                  className="pl-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="grid md:grid-cols-3 gap-4">
                <Select value={filters.branch} onValueChange={(value) => setFilters({ ...filters, branch: value })}>
                  <SelectTrigger className="rounded-lg border border-gray-300">
                    <SelectValue placeholder="All Branches" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg rounded-lg z-50">
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                    <SelectItem value="Mechanical">Mechanical</SelectItem>
                    <SelectItem value="Civil">Civil</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filters.year} onValueChange={(value) => setFilters({ ...filters, year: value })}>
                  <SelectTrigger className="rounded-lg border border-gray-300">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg rounded-lg z-50">
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>

                <button
                  type="button"
                  className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300 font-medium"
                  onClick={() => {
                    setFilters({ branch: 'all', year: 'all', skill: '' });
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <p className="text-gray-600 font-medium mb-4">
            Found {filteredPeers.length} {filteredPeers.length === 1 ? 'peer' : 'peers'}
          </p>

          {/* Peer Cards */}
          {filteredPeers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPeers.map((peer, idx) => (
                <PeerCard key={idx} peer={peer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No peers found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PeerSearch;
