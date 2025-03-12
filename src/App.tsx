import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { MusicPlayer } from './components/MusicPlayer';
import { Song } from './types';

// Mock data
const featuredSongs: Song[] = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    genre: 'Rock',
    coverUrl: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80',
    audioUrl: 'https://example.com/bohemian-rhapsody.mp3',
    duration: 354
  },
  {
    id: '2',
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    genre: 'Rock',
    coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80',
    audioUrl: 'https://example.com/imagine.mp3',
    duration: 183
  },
  {
    id: '3',
    title: 'Purple Rain',
    artist: 'Prince',
    album: 'Purple Rain',
    genre: 'Pop',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80',
    audioUrl: 'https://example.com/purple-rain.mp3',
    duration: 520
  },
];

const genres = ['All', 'Rock', 'Pop', 'Jazz', 'Classical', 'Hip Hop', 'Electronic'];

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [selectedGenre, setSelectedGenre] = useState('All');

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="ml-64 p-8">
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for songs, artists, or albums..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Genre Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex space-x-4">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedGenre === genre
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Songs */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Songs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSongs
              .filter(song => selectedGenre === 'All' || song.genre === selectedGenre)
              .map((song) => (
                <div
                  key={song.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setCurrentSong(song)}
                >
                  <img
                    src={song.coverUrl}
                    alt={song.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{song.title}</h3>
                    <p className="text-sm text-gray-500">{song.artist}</p>
                    <p className="text-xs text-gray-400 mt-1">{song.album}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      <MusicPlayer currentSong={currentSong} />
    </div>
  );
}

export default App;