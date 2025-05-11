import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Song } from '../types';

interface MusicPlayerProps {
  currentSong: Song | null;
}

export function MusicPlayer({ currentSong }: MusicPlayerProps): JSX.Element | null {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={currentSong.coverUrl}
            alt={currentSong.title}
            className="w-16 h-16 rounded-md"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{currentSong.title}</h3>
            <p className="text-sm text-gray-500">{currentSong.artist}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center flex-1 max-w-2xl mx-8">
          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={togglePlay}
              className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* 🔴 Updated Progress Bar Section */}
          <div className="w-full flex items-center space-x-3 mt-2">
            <span className="text-xs text-gray-500">{formatTime(progress)}</span>
            <div className="flex-1 h-1 bg-gray-200 rounded-full">
              <div
                className={`h-1 rounded-full ${isPlaying ? 'bg-red-600' : 'bg-gray-400'}`}
                style={{ width: `${(progress / currentSong.duration) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-500">
              {formatTime(currentSong.duration)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Volume2 className="w-5 h-5 text-gray-500" />
          <input
            type="range"
            min="0"
            max="100"
            className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
      />
    </div>
  );
}
