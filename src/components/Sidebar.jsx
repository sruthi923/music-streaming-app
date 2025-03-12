import React from 'react';
import { Home, Search, Library, PlusCircle } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-black h-screen fixed left-0 top-0 text-white p-6">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
          <span className="font-bold">M</span>
        </div>
        <span className="text-xl font-bold">Musicify</span>
      </div>

      <nav className="space-y-6">
        <div className="space-y-3">
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <Library className="w-5 h-5" />
            <span>Your Library</span>
          </a>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <button className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <PlusCircle className="w-5 h-5" />
            <span>Create Playlist</span>
          </button>
        </div>

        <div className="space-y-3">
          <div className="text-sm text-gray-400">Your Playlists</div>
          <div className="space-y-2">
            <a href="#" className="block text-gray-300 hover:text-white">Liked Songs</a>
            <a href="#" className="block text-gray-300 hover:text-white">Daily Mix 1</a>
            <a href="#" className="block text-gray-300 hover:text-white">Discover Weekly</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
