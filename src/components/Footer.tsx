import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6 mb-8">
          <a href="#" className="hover:text-white transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Audio Description</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-sm">
          <p>© 2024 Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;