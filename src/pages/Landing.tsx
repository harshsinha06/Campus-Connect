import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { Users, Calendar, Briefcase, Award, ArrowRight } from 'lucide-react';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Peer Matching',
      description: 'Connect with students who share your interests and academic goals',
    },
    {
      icon: Calendar,
      title: 'Event Discovery',
      description: 'Find and join campus events, workshops, and networking opportunities',
    },
    {
      icon: Briefcase,
      title: 'Collaboration',
      description: 'Work together on projects and build your portfolio',
    },
    {
      icon: Award,
      title: 'Mentorship',
      description: 'Learn from seniors and guide juniors in their academic journey',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Campus Connect
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Find your community. Build your future. Connect with peers, mentors, and opportunities across campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/register')}
                className="text-lg px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>

              <button onClick={() => navigate('/login')}
              className="text-lg px-8 py-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-lg text-gray-600">Discover the features that make Campus Connect special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Campus Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
