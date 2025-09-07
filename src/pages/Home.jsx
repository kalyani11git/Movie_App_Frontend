import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Slider from "../components/Slider";


const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/movies/popular`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  return (
    <div>
     
      <Slider />

      <div className="px-6">
        <h2 className="text-2xl font-bold my-4">Recommended Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
