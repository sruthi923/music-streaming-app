import { Sidebar } from "../components/Sidebar";
import { MusicPlayer } from "../components/MusicPlayer";
import { SongList } from "../components/SongList";
import { SearchBar } from "../components/SearchBar";
import { GenreFilter } from "../components/GenreFilter";
import { useState } from "react";
import { Song } from "../types";

// Mock data
const featuredSongs: Song[] = [
  {
    id: "1",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "Rock",
    coverUrl:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 354,
  },
  {
    id: "2",
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    genre: "Rock",
    coverUrl:
      "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 183,
  },
  {
    id: "3",
    title: "Purple Rain",
    artist: "Prince",
    album: "Purple Rain",
    genre: "Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80",
    audioUrl: "./src/assets/audio/Purple.mp3",
    duration: 520,
  },
  {
    id: "4",
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    genre: "Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
    audioUrl: "./src/assets/audio/Ishq.mp3",
    duration: 294,
  },
  {
    id: "5",
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    genre: "Rock",
    coverUrl:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=400&q=80",
    audioUrl: "./src/assets/audio/OneRepublic.mp3",
    duration: 390,
  },
  {
    id: "6",
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    genre: "Soul",
    coverUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
    audioUrl: "./src/assets/audio/Shawn.mp3",
    duration: 228,
  },
  {
    id: "7",
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    genre: "Grunge",
    coverUrl:
      "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=400&q=80",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 301,
  },
  {
    id: "8",
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    genre: "Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 234,
  },
  {
    id: "9",
    title: "Hey Jude",
    artist: "The Beatles",
    album: "Hey Jude",
    genre: "Rock",
    coverUrl:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=400&q=80",
    audioUrl: "./src/assets/audio/Purple.mp3",
    duration: 431,
  },
  {
    id: "10",
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    genre: "Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1495055154266-57bbdeada43e?w=400&q=80",
    audioUrl: "./src/assets/audio/Ishq.mp3",
    duration: 285,
  },
  {
    id: "11",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    genre: "Funk",
    coverUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
    audioUrl: "./src/assets/audio/OneRepublic.mp3",
    duration: 270,
  },
  {
    id: "12",
    title: "Let Her Go",
    artist: "Passenger",
    album: "All the Little Lights",
    genre: "Indie",
    coverUrl:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=400&q=80",
    audioUrl: "./src/assets/audio/Shawn.mp3",
    duration: 252,
  },
  {
    id: "13",
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    album: "x (Multiply)",
    genre: "Pop",
    coverUrl:
      "https://parade.com/.image/t_share/MTk1NzYzNDc1MjExODg4Mjc2/country-love-songs.jpg",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 281,
  },
  {
    id: "14",
    title: "Counting Stars",
    artist: "OneRepublic",
    album: "Native",
    genre: "Pop Rock",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmvIOK9XmR0tYEVcs3Xeh8Ha-EZpvYDpuUA&s",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 257,
  },
  {
    id: "15",
    title: "Radioactive",
    artist: "Imagine Dragons",
    album: "Night Visions",
    genre: "Alternative",
    coverUrl:
      "https://www.musicianwave.com/wp-content/uploads/2022/04/How-Many-Songs-Are-There-in-the-World-788x525.jpg",
    audioUrl: "./src/assets/audio/Purple.mp3",
    duration: 186,
  },
  {
    id: "16",
    title: "Firework",
    artist: "Katy Perry",
    album: "Teenage Dream",
    genre: "Pop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6sKOUQb83Ba3zsMk7z9XeFyJQm_6PKivow&s",
    audioUrl: "./src/assets/audio/Ishq.mp3",
    duration: 227,
  },
  {
    id: "17",
    title: "Halo",
    artist: "Beyoncé",
    album: "I Am... Sasha Fierce",
    genre: "R&B",
    coverUrl:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80",
    audioUrl: "./src/assets/audio/OneRepublic.mp3",
    duration: 261,
  },
  {
    id: "18",
    title: "Lose Yourself",
    artist: "Eminem",
    album: "8 Mile",
    genre: "Classical",
    coverUrl:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&q=80",
    audioUrl: "./src/assets/audio/Shawn.mp3",
    duration: 326,
  },
  {
    id: "19",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Synthpop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXSpCfbRhthvA3uH5c9ok9EY43uRVlwS6Zg&s",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 200,
  },
  {
    id: "20",
    title: "Sunflower",
    artist: "Post Malone & Swae Lee",
    album: "Spider-Man: Into the Spider-Verse",
    genre: "Classical",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQwndBFGuYxXsb9L83CcLiUNlX7n1EcFc2w&s",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 158,
  },
  {
    id: "21",
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    album: "Stay",
    genre: "Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&q=80",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 141,
  },
  {
    id: "22",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    genre: "Disco-pop",
    coverUrl:
      "https://img.freepik.com/free-vector/music-media-polygonal-wireframe-set-isolated-shining-images-with-shape-notes-microphone-headphones-keys_1284-32271.jpg?semt=ais_hybrid&w=740",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 203,
  },
  {
    id: "23",
    title: "Senorita",
    artist: "Shawn Mendes & Camila Cabello",
    album: "Romance",
    genre: "Latin Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80",
    audioUrl: "./src/assets/audio/Purple.mp3",
    duration: 190,
  },
  {
    id: "24",
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    genre: "Electropop",
    coverUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    audioUrl: "./src/assets/audio/Ishq.mp3",
    duration: 194,
  },
  {
    id: "25",
    title: "Peaches",
    artist: "Justin Bieber ft. Daniel Caesar, Giveon",
    album: "Justice",
    genre: "R&B",
    coverUrl:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&q=80",
    audioUrl: "./src/assets/audio/OneRepublic.mp3",
    duration: 198,
  },
  {
    id: "26",
    title: "Shallow",
    artist: "Lady Gaga & Bradley Cooper",
    album: "A Star Is Born",
    genre: "Pop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62-s5-8oTkEwvKooCaln58Hl1zrOYrbeEvg&s",
    audioUrl: "./src/assets/audio/Shawn.mp3",
    duration: 215,
  },
  {
    id: "27",
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    genre: "Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 242,
  },
  {
    id: "28",
    title: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    album: "Montero",
    genre: "Classical",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JUj_8_he-VVA7KpaihvCzcNhEnYjCKIHsA&s",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 137,
  },
  {
    id: "29",
    title: "Industry Baby",
    artist: "Lil Nas X & Jack Harlow",
    album: "Montero",
    genre: "Classical",
    coverUrl:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&q=80",
    audioUrl: "./src/assets/audio/Purple.mp3",
    duration: 212,
  },
  {
    id: "30",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    genre: "Pop Rock",
    coverUrl:
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=400&q=80",
    audioUrl: "./src/assets/audio/Ishq.mp3",
    duration: 174,
  },
  {
    id: "31",
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    genre: "Synthpop",
    coverUrl:
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=400&q=80",
    audioUrl: "./src/assets/audio/OneRepublic.mp3",
    duration: 164,
  },
  {
    id: "32",
    title: "Easy On Me",
    artist: "Adele",
    album: "30",
    genre: "Soul",
    coverUrl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
    audioUrl: "./src/assets/audio/Shawn.mp3",
    duration: 224,
  },
  {
    id: "33",
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Synthwave",
    coverUrl:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 215,
  },
  {
    id: "34",
    title: "Take Me To Church",
    artist: "Hozier",
    album: "Hozier",
    genre: "Alternative",
    coverUrl:
      "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=400&q=80",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 241,
  },
  {
    id: "35",
    title: "Lovely",
    artist: "Billie Eilish & Khalid",
    album: "Lovely (Single)",
    genre: "Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?w=400&q=80",
    audioUrl: "./src/assets/audio/Purple.mp3",
    duration: 201,
  },
  {
    id: "36",
    title: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    genre: "Alternative",
    coverUrl:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&q=80",
    audioUrl: "./src/assets/audio/Ishq.mp3",
    duration: 204,
  },
  {
    id: "37",
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    genre: "Psychedelic Pop",
    coverUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    audioUrl: "./src/assets/audio/OneRepublic.mp3",
    duration: 238,
  },
  {
    id: "38",
    title: "On The Floor",
    artist: "Jennifer Lopez ft. Pitbull",
    album: "Love?",
    genre: "Dance-pop",
    coverUrl:
      "https://www.shutterstock.com/shutterstock/photos/761313844/display_1500/stock-photo--d-illustration-of-musical-notes-and-musical-signs-of-abstract-music-sheet-songs-and-melody-concept-761313844.jpg",
    audioUrl: "./src/assets/audio/Shawn.mp3",
    duration: 230,
  },
  {
    id: "39",
    title: "Dynamite",
    artist: "BTS",
    album: "BE",
    genre: "Disco-pop",
    coverUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80",
    audioUrl: "./src/assets/audio/EdSheeran-ShapeofYou.mp3",
    duration: 199,
  },
  {
    id: "40",
    title: "Kill This Love",
    artist: "BLACKPINK",
    album: "Kill This Love",
    genre: "K-pop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OX7Kn7kd_0-sboCubNj0XX9Acfe57txTRg&s",
    audioUrl: "./src/assets/audio/Dua.mp3",
    duration: 231,
  },

  {
    id: "41",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    album: "GNX",
    genre: "Hip Hop",
    coverUrl:
      "https://media.istockphoto.com/id/685111998/photo/young-girl-dancing-to-the-music.jpg?s=612x612&w=0&k=20&c=XA8XG5Fyge1eR-69FeRbXwIj7mVgnhrTLDb9TJhxb24=",
    audioUrl: "https://example.com/not-like-us.mp3",
    duration: 215,
  },
  {
    id: "42",
    title: "Yeah Glo!",
    artist: "GloRilla",
    album: "Ehhthang Ehhthang",
    genre: "Hip Hop",
    coverUrl:
      "https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg",
    audioUrl: "https://example.com/yeah-glo.mp3",
    duration: 142,
  },
  {
    id: "43",
    title: "TGIF",
    artist: "GloRilla",
    album: "Glorious",
    genre: "Hip Hop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LmmY6vkH1O_EnNvWVQAT24QvItnoVGxXUw&s",
    audioUrl: "https://example.com/tgif.mp3",
    duration: 164,
  },
  {
    id: "44",
    title: "Whatever She Wants",
    artist: "Bryson Tiller",
    album: "Bryson Tiller",
    genre: "Hip Hop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDLOr7oHjQfZHH2X6gS3f7C04TwO-cETKMQ&s",
    audioUrl: "https://example.com/whatever-she-wants.mp3",
    duration: 161,
  },
  {
    id: "45",
    title: "Jump",
    artist: "Tyla, Gunna, Skillibeng",
    album: "Tyla",
    genre: "Hip Hop",
    coverUrl:
      "https://filmfare.wwmindia.com/content/2022/jun/15songsbykk21654085208.jpg",
    audioUrl: "https://example.com/jump.mp3",
    duration: 180,
  },
  {
    id: "46",
    title: "Redrum",
    artist: "21 Savage",
    album: "American Dream",
    genre: "Hip Hop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyB28CMc-xFehvNmmopP24TFLOdSSPj5w5Q&s",
    audioUrl: "https://example.com/redrum.mp3",
    duration: 200,
  },
  {
    id: "47",
    title: "Bandit",
    artist: "Don Toliver",
    album: "Hardstone Psycho",
    genre: "Hip Hop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d2r88oa2ntHHADMDiHOiz70ztR0QtrRGuA&s",
    audioUrl: "https://example.com/bandit.mp3",
    duration: 210,
  },
  {
    id: "48",
    title: "Sticky",
    artist: "Tyler, The Creator ft. GloRilla, Sexyy Red & Lil Wayne",
    album: "Call Me If You Get Lost",
    genre: "Hip Hop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOu_sp7XIY_UsZQ6asxH_V8w1VKZLLCmLCDA&s",
    audioUrl: "https://example.com/sticky.mp3",
    duration: 230,
  },
  {
    id: "49",
    title: "Get It Sexyy",
    artist: "Sexyy Red",
    album: "Sexyy",
    genre: "Hip Hop",
    coverUrl:
      "https://img.pastemagazine.com/wp-content/uploads/2023/10/07221949/6C08C0DD-08DF-43CD-BD25-EF2BA75EF9E5.jpeg",
    audioUrl: "https://example.com/get-it-sexyy.mp3",
    duration: 180,
  },
  {
    id: "50",
    title: "Big Dawgs",
    artist: "Hanumankind & Kalmi",
    album: "Big Dawgs - Single",
    genre: "Hip Hop",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomvfrB0egCAa-egNEq4olbJOFWP6DRokybQ&s",
    audioUrl: "https://example.com/big-dawgs.mp3",
    duration: 190,
  },
  {
    id: "51",
    title: "Midnight Coffee",
    artist: "Loffy Beats",
    album: "Chill Vibes",
    genre: "Good Vibes",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKID82_yqNjPMkR3LkeTvVzdr6J4fVZjECw&s",
    audioUrl: "https://example.com/midnight-coffee.mp3",
    duration: 180,
  },
  {
    id: "52",
    title: "Rainy Day",
    artist: "Loffy Chill",
    album: "Loffy Essentials",
    genre: "Good Vibes",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLoTqi6SRALFBDHkuBBeVCdKYX399Svhkeg&s",
    audioUrl: "https://example.com/rainy-day.mp3",
    duration: 200,
  },
  {
    id: "53",
    title: "Study Session",
    artist: "Loffy Study",
    album: "Focus Beats",
    genre: "Good Vibes",
    coverUrl:
      "https://cdn.apollo.audio/one/media/6538/f919/a17f/c405/a292/b1ba/katy-perry-songs.jpg?quality=80&format=jpg&crop=0,0,539,960&resize=crop",
    audioUrl: "https://example.com/study-session.mp3",
    duration: 210,
  },
  {
    id: "54",
    title: "Evening Chill",
    artist: "Loffy Lounge",
    album: "Relaxing Sounds",
    genre: "Good Vibes",
    coverUrl:
      "https://thumbs.dreamstime.com/b/acoustic-guitar-song-lyrics-marble-surface-348291581.jpg",
    audioUrl: "https://example.com/evening-chill.mp3",
    duration: 190,
  },
  {
    id: "55",
    title: "Late Night Drive",
    artist: "Loffy Nights",
    album: "Night Vibes",
    genre: "Good Vibes",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTja2owzYa-LZnD2C9Mou-pkKwj7YYPCRQpEg&s",
    audioUrl: "https://example.com/late-night-drive.mp3",
    duration: 220,
  },
  {
    id: "56",
    title: "Sunset Boulevard",
    artist: "Loffy Sunset",
    album: "Golden Hour",
    genre: "Loffy",
    coverUrl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2014/05/20-Hindi-Workout-Songs-Bollywood-Playlist-For-Gym-Motivation.jpg.webp",
    audioUrl: "https://example.com/sunset-boulevard.mp3",
    duration: 200,
  },
  {
    id: "57",
    title: "Morning Breeze",
    artist: "Loffy Morning",
    album: "Wake Up Beats",
    genre: "Loffy",
    coverUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    audioUrl: "https://example.com/morning-breeze.mp3",
    duration: 180,
  },
  {
    id: "58",
    title: "Calm Waters",
    artist: "Loffy Ocean",
    album: "Sea Sounds",
    genre: "Loffy",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsubJXPgMh-iGmwsNU_ESdwNuT4FFmnfV4A&s",
    audioUrl: "https://example.com/calm-waters.mp3",
    duration: 210,
  },
  {
    id: "59",
    title: "Night Sky",
    artist: "Loffy Stars",
    album: "Cosmic Beats",
    genre: "Loffy",
    coverUrl:
      "https://t3.ftcdn.net/jpg/04/01/28/92/360_F_401289298_0XFExcFE1ago9gfsDMMfPP9pTjkJ9kq0.jpg",
    audioUrl: "https://example.com/night-sky.mp3",
    duration: 190,
  },
  {
    id: "60",
    title: "Dreamscape",
    artist: "Loffy Dreams",
    album: "Sleep Sounds",
    genre: "Loffy",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAY8C7uvzS9v7EnrH_Vls_cmYIkqyanz8hpQ&s",
    audioUrl: "https://example.com/dreamscape.mp3",
    duration: 220,
  },
  {
    id: "61",
    title: "Happy",
    artist: "Pharrell Williams",
    album: "G I R L",
    genre: "Pop",
    coverUrl:
      "https://cdn.pixabay.com/photo/2018/05/13/16/19/saxophone-3397023_1280.jpg",
    audioUrl: "https://example.com/happy.mp3",
    duration: 233,
  },
  {
    id: "62",
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    album: "Trolls (Original Motion Picture Soundtrack)",
    genre: "Good vibes",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRofDsJgNEJQxNXWHd3bUEa-u66p1AzNwgNX7Vm49X4_1VO6CCTbdG1SbJOAJXkkQpzY&usqp=CAU",
    audioUrl: "https://example.com/cant-stop-the-feeling.mp3",
    duration: 236,
  },
  {
    id: "63",
    title: "Good as Hell",
    artist: "Lizzo",
    album: "Coconut Oil",
    genre: "Pop",
    coverUrl:
      "https://static.toiimg.com/thumb/119077426/119077426.jpg?height=746&width=420&resizemode=76&imgsize=43582",
    audioUrl: "https://example.com/cant-stop-the-feeling.mp3",
    duration: 236,
  },
];

const genres = [
  "All",
  "Rock",
  "Pop",
  "Loffy",
  "Classical",
  "Hip Hop",
  "Good Vibes",
];

const Main = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  const filteredSongs =
    selectedGenre === "All"
      ? featuredSongs
      : featuredSongs.filter((song) => song.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <main className="ml-64 p-8">
        <SearchBar />
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreSelect={setSelectedGenre}
        />
        <SongList songs={filteredSongs} onSelectSong={setCurrentSong} />
      </main>

      <MusicPlayer currentSong={currentSong} />
    </div>
  );
};

export default Main;
