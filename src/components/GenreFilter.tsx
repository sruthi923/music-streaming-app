interface Props {
  genres: string[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

export const GenreFilter = ({ genres, selectedGenre, onGenreSelect }: Props) => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="flex space-x-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreSelect(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedGenre === genre
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};
