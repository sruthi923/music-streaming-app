import { useState } from "react";
import  LoginForm  from "../pages/LoginForm"; // adjust the path
import { Home, Search, Library, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar(): JSX.Element {
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  function AppWithLoginPopup() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
    return (
    <>
      <button onClick={() => setIsLoginOpen(true)}>Sign In</button>
      {isLoginOpen && <LoginForm onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}
  return (
    <div className="w-64 bg-black h-screen fixed left-0 top-0 text-white p-6">
      {/* Logo and Sign-in Button */}
      <div className="flex items-center space-x-2 mb-8 flex-col">
        <Link to="/profile">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="font-bold text-white">M</span>
          </div>
        </Link>
        <span className="text-xl font-bold">Musicify</span>
        <Link
          to="/login"
          className="mt-2 text-sm font-medium text-gray-300 hover:text-white"
        >
          Sign in
        </Link>
      </div>

      {/* Navigation */}
      <nav className="space-y-6">
        <div className="space-y-3">
          <Link
            to="/home"
            className="flex items-center space-x-3 text-gray-300 hover:text-white"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-3 text-gray-300 hover:text-white"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </Link>
          <Link
            to="/library"
            className="flex items-center space-x-3 text-gray-300 hover:text-white"
          >
            <Library className="w-5 h-5" />
            <span>Your Library</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <button className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <PlusCircle className="w-5 h-5" />
            <span>Create Playlist</span>
          </button>
        </div>

        <div className="space-y-3 mt-4">
          <div className="text-lg text-gray-300">Your Playlists</div>
          <Link
            to="/liked-songs"
            className="block text-gray-300 hover:text-white"
          >
            Liked Songs
          </Link>
          <Link
            to="/daily-mix-1"
            className="block text-gray-300 hover:text-white"
          >
            Daily Mix 1
          </Link>
          <Link
            to="/discover-weekly"
            className="block text-gray-300 hover:text-white"
          >
            Discover Weekly
          </Link>

          {/* Premium Subscription Box */}
          <div
            onClick={() => setIsSubscriptionPopupOpen(true)}
            className="mt-4 p-4 bg-yellow-500 text-center text-white font-semibold rounded-lg cursor-pointer"
          >
            Subscription
          </div>
        </div>
      </nav>

      {/* Premium Subscription Popup */}
      {isSubscriptionPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-yellow-400 p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
              Choose Your Plan
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleSelectPlan("Monthly")}
                className="w-full text-center p-4 border rounded-md hover:bg-indigo-600 text-indigo-600 hover:text-white"
              >
                Monthly Plan - $9.99/month
              </button>
              <button
                onClick={() => handleSelectPlan("Yearly")}
                className="w-full text-center p-4 border rounded-md hover:bg-indigo-600 text-indigo-600 hover:text-white"
              >
                Yearly Plan - $99.99/year
              </button>
              {selectedPlan && (
                <div className="mt-4 text-center text-indigo-600 font-semibold">
                  Selected Plan: {selectedPlan}
                </div>
              )}
              <button
                onClick={() => setIsSubscriptionPopupOpen(false)}
                className="w-full text-center mt-4 p-2 border rounded-md text-gray-500 hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
