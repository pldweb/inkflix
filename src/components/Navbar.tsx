import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition duration-500 ${isScrolled ? 'bg-zinc-900' : 'bg-transparent'}`}>
      <div className="px-4 md:px-16 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
              className="h-4 lg:h-7"
            />
          </Link>
          <div className="hidden md:flex gap-7">
            <Link to="/browse" className="text-white hover:text-gray-300 transition">Home</Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition">TV Shows</Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition">Movies</Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition">New & Popular</Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition">My List</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-gray-200 cursor-pointer hover:text-gray-300 transition" />
            <Bell className="w-6 h-6 text-gray-200 cursor-pointer hover:text-gray-300 transition" />
          </div>
          <Link to="/profile">
            <User className="w-6 h-6 text-gray-200 cursor-pointer hover:text-gray-300 transition" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;