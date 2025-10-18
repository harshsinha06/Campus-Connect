import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Check } from 'lucide-react';

interface Peer {
  name: string;
  branch: string;
  year: number;
  skills: string[];
  avatar?: string;
}

interface PeerCardProps {
  peer: Peer;
}

const PeerCard: React.FC<PeerCardProps> = ({ peer }) => {
  const [connected, setConnected] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            {peer.avatar ? <AvatarImage src={peer.avatar} /> : <AvatarFallback>{peer.name.charAt(0)}</AvatarFallback>}
          </Avatar>
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">{peer.name}</CardTitle>
            <CardDescription className="text-gray-600 text-sm">
              {peer.branch} - Year {peer.year}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {peer.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <button
          onClick={() => setConnected(!connected)}
          className={`w-full py-2 px-4 rounded-lg font-medium transition duration-300 ${
            connected
              ? 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } flex items-center justify-center`}
        >
          {connected ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Connected
            </>
          ) : (
            'Connect'
          )}
        </button>
      </CardFooter>
    </Card>
  );
};

export default PeerCard;
