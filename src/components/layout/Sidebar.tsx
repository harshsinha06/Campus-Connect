import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Home, Users, Calendar, User, LogOut, Menu } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Users, label: 'Find Peers', path: '/peers' },
    { icon: Calendar, label: 'Events', path: '/events' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white min-h-screen transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        {isOpen && <span className="font-bold text-lg">Campus Connect</span>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-800 rounded">
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition ${
                location.pathname === item.path ? 'bg-gray-800 border-l-4 border-blue-500' : ''
              }`}
            >
              <Icon size={20} />
              {isOpen && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition border-t border-gray-800"
      >
        <LogOut size={20} />
        {isOpen && <span>Logout</span>}
      </button>
    </div>
  );
};

export default Sidebar;