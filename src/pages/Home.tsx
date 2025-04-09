import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const profiles = [
  {
    id: 1,
    name: 'User 1',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200'
  },
  {
    id: 2,
    name: 'User 2',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200'
  },
  {
    id: 3,
    name: 'User 3',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200'
  },
  {
    id: 4,
    name: 'Add Profile',
    isAdd: true
  }
];

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-white mb-8">Who's watching?</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              to={profile.isAdd ? '#' : '/browse'}
              className="group flex flex-col items-center gap-3"
            >
              <div className={`w-28 h-28 rounded-md overflow-hidden group-hover:border-2 border-white transition duration-200 ${profile.isAdd ? 'bg-zinc-800 flex items-center justify-center' : ''}`}>
                {profile.isAdd ? (
                  <User className="w-12 h-12 text-gray-400 group-hover:text-white" />
                ) : (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover group-hover:border-2 border-white"
                  />
                )}
              </div>
              <span className="text-gray-400 group-hover:text-white transition">{profile.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home