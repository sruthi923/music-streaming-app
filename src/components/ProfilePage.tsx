import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
  });

  // Handle the edit button click to navigate to an edit page (if you have one)
  const handleEditProfile = () => {
    navigate('/edit-profile'); // You can change '/edit-profile' to your actual edit route
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Profile Header */}
        <div className="flex justify-center mb-6">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-center">
          <button
            onClick={handleEditProfile}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
