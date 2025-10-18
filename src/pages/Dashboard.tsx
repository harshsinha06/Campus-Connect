import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Sidebar from '../components/layout/Sidebar';
import StatCard from '../components/ui/StatCard';
import PeerCard from '../components/ui/PeerCard';
import { useAuth } from '../contexts/AuthContext';
import { Users, Calendar, MessageCircle, Search } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const suggestedPeers = [
    { name: 'Sarah Johnson', branch: 'Computer Science', year: 3, skills: ['React', 'Python', 'ML'], avatar: '' },
    { name: 'Mike Chen', branch: 'Computer Science', year: 2, skills: ['Java', 'Android', 'Firebase'], avatar: '' },
    { name: 'Emily Davis', branch: 'Electronics', year: 3, skills: ['IoT', 'Arduino', 'PCB Design'], avatar: '' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar />

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300">
                <Search className="w-4 h-4 text-gray-600" />
              </button>
              <Avatar>
                <AvatarFallback className="bg-blue-500 text-white">{user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="p-8">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8 text-white shadow-md">
            <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'Student'}! 👋</h2>
            <p className="text-blue-100 text-lg">Here's what's happening with your network today</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StatCard icon={Users} title="Total Peers" value="127" color="blue" />
            <StatCard icon={Calendar} title="Upcoming Events" value="8" color="green" />
            <StatCard icon={MessageCircle} title="Active Groups" value="5" color="purple" />
          </div>

          {/* Suggested Peers */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Suggested Peers</h3>
              <Link to="/peers">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">
                  View All
                </button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedPeers.map((peer, idx) => (
                <div
                  key={idx}
                  className="hover:shadow-lg transition-shadow duration-300 rounded-lg"
                >
                  <PeerCard peer={peer} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
