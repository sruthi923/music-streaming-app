import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy data for featured music
const featuredMusic = [
  { id: 1, title: 'Shape of You', artist: 'Ed Sheeran', cover: 'path_to_cover_image' },
  { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', cover: 'path_to_cover_image' },
  { id: 3, title: 'Levitating', artist: 'Dua Lipa', cover: 'path_to_cover_image' },
];

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div style={styles.homeContainer}>
      <header style={styles.header}>
        <h1>Welcome to Your Music App</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for songs, artists..."
          style={styles.searchBar}
        />
      </header>

      <nav style={styles.navigation}>
        <Link to="/explore" style={styles.navLink}>Explore</Link>
        <Link to="/playlists" style={styles.navLink}>Playlists</Link>
        <Link to="/library" style={styles.navLink}>My Library</Link>
      </nav>

      <section style={styles.featuredMusic}>
        <h2>Featured Music</h2>
        <div style={styles.musicList}>
          {featuredMusic.map((music) => (
            <div style={styles.musicCard} key={music.id}>
              <img src={music.cover} alt={music.title} style={styles.coverImage} />
              <h3>{music.title}</h3>
              <p>{music.artist}</p>
              <Link to={`/music/${music.id}`} style={styles.playButton}>Play</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  homeContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  searchBar: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  navigation: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  navLink: {
    margin: '0 15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#000',
  },
  featuredMusic: {
    marginTop: '40px',
  },
  musicList: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  musicCard: {
    width: '200px',
    textAlign: 'center',
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '10px',
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
    backgroundColor: '#4caf50',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export { Home };
