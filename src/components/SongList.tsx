import { Song } from "../types";

interface Props {
  songs: Song[];
  onSelectSong: (song: Song) => void;
}

export const SongList = ({ songs, onSelectSong }: Props) => {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Songs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelectSong(song)}
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
  );
};
