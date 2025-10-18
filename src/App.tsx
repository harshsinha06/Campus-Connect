import { AuthProvider } from './contexts/AuthContext';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PeerSearch from './pages/PeerSearch';
import Events from './pages/Events';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/peers" element={<PeerSearch />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
