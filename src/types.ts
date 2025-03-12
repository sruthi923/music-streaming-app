export interface Song {
    id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    coverUrl: string;
    audioUrl: string;
    duration: number;
  }
  
  export interface Playlist {
    id: string;
    name: string;
    songs: Song[];
    coverUrl: string;
  }
  
  export interface User {
    id: string;
    name: string;
    playlists: Playlist[];
  }