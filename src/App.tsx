import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import Profile from "./pages/Profile";

import LoginForm from "./pages/LoginForm";  // Assuming LoginForm is inside the 'pages' folder
import RegisterForm from "./pages/RegisterForm"; // Assuming RegisterForm is inside the 'pages' folder

function App() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
