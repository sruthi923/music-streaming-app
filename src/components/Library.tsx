import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy data for the library
const libraryItems = [
  { id: 1, title: 'Album for gym', artist: 'Ed Sheeran', album: 'Divide', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80' },
  { id: 2, title: 'Album for sleep', artist: 'The Weeknd', album: 'After Hours', cover: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&q=80' },
  { id: 3, title: 'Album for study', artist: 'Dua Lipa', album: 'Future Nostalgia', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62-s5-8oTkEwvKooCaln58Hl1zrOYrbeEvg&s' },
];

const Library: React.FC = () => {
  const [filter, setFilter] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredItems = libraryItems.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase()) ||
    item.artist.toLowerCase().includes(filter.toLowerCase()) ||
    item.album.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.libraryContainer}>
      <header style={styles.header}>
        <h1 className='text'>Your Library</h1>
        <input
          type="text"
          value={filter}
          onChange={handleSearch}
          placeholder="Search your library..."
          style={styles.searchBar}
        />
      </header>

      <section style={styles.libraryContent}>
        {filteredItems.length > 0 ? (
          <div style={styles.musicList}>
            {filteredItems.map((item) => (
              <div style={styles.musicCard} key={item.id}>
                <img src={item.cover} alt={item.title} style={styles.coverImage} />
                <h3>{item.title}</h3>
                <p>{item.artist} | {item.album}</p>
                <Link to={`/music/${item.id}`} style={styles.playButton}>Play</Link>
              </div>
            ))}
          </div>
        ) : (
          <p style={styles.noResults}>No results found</p>
        )}
      </section>
    </div>
  );
};

const styles = {
  libraryContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f7fc',  // Light background for the container
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2c3e50',  // Darker text for header
  },
  searchBar: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#ecf0f1',  // Light background for the search bar
    color: '#34495e',  // Darker text for search bar
  },
  libraryContent: {
    marginTop: '20px',
  },
  musicList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  musicCard: {
    width: '200px',
    textAlign: 'center',
    border: '1px solid #bdc3c7',  // Lighter border for music card
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',  // White background for the card
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow for card
    transition: 'transform 0.2s',  // Smooth hover effect
  },
  coverImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  playButton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#3498db',  // Bright blue for the play button
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  playButtonHover: {
    backgroundColor: '#2980b9',  // Darker blue when hovered
  },
  noResults: {
    textAlign: 'center',
    color: '#95a5a6',  // Gray color for no results message
  },
  text: {
    fontSize: '20px',  // Increased font size
    lineHeight: '30px',  // Increased line height
  },


};


export { Library };
