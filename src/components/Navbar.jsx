import { useState } from "react";
import CitySelector from "./CitySelector";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);


const Navbar = () => {
  const [city, setCity] = useState("Pune");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Function to fetch search suggestions
  const handleSearch = async (value) => {
  setQuery(value);

  if (value.length > 1) {
    try {
      const res = await fetch(
        `${API_URL}/api/movies/search?query=${encodeURIComponent(value)}`
      );
      const data = await res.json();
      console.log("search data", data); // Should print search results

      setSuggestions(data.results || []);
    } catch (err) {
      console.error(err);
    }
  } else {
    setSuggestions([]);
  }
};


  // Handle selecting a movie
  const handleSelect = (id) => {
    setQuery("");
    setSuggestions([]);
  
    
    navigate(`/movie/${id}`);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md relative">
      {/* Logo */}
      <div className="text-pink-600 text-2xl font-bold cursor-pointer">
        Book<span className="text-black">My</span>Movie
      </div>

      {/* Search bar */}
      <div className="flex-1 mx-6 relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-64 overflow-y-auto shadow-lg">
            {suggestions.map((movie) => (
              <li
                key={movie.id}
                onClick={() => handleSelect(movie.id)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* City + Sign in */}
      <div className="flex items-center gap-4">
        <div className="flex items-center cursor-pointer">
          <CitySelector city={city} setCity={setCity} />
        </div>
        <button className="px-4 py-1 bg-pink-500 text-white rounded-md hover:bg-red-600">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
