import React from 'react';
import { User } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-zinc-900 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">Profile</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <User className="w-8 h-8 text-white" />
            <p className="text-white text-xl">Username</p>
          </div>
          <hr className="bg-gray-600 border-0 h-px my-4" />
          <div>
            <p className="text-white text-md">Membership & Billing</p>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div className="flex flex-row justify-between">
              <p className="text-gray-400 text-sm">Premium Plan</p>
              <p className="text-white text-sm">Change plan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;