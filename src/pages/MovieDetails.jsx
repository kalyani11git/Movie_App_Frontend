import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch main movie details
    fetch(`${API_URL}/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    // Fetch cast
    fetch(`${API_URL}/api/movies/${id}/cast`)
      .then((res) => res.json())
      .then((data) => setCast(data.cast || []));

    // Fetch reviews
    fetch(`${API_URL}/api/movies/${id}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data.results || []));

    // Fetch recommendations
    fetch(`${API_URL}/api/movies/${id}/recommendations`)
      .then((res) => res.json())
      .then((data) => setRecommendations(data.results || []));
  }, [id]);

    useEffect(() => {
    // scroll to top when movie id changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!movie) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      {/* Movie Header */}
      <div className="flex flex-col lg:flex-row bg-black text-white px-6 lg:px-20 py-10 gap-6">
        {/* Poster */}
        <div className="w-full lg:w-1/4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg w-full"
          />
          <p className="text-center mt-2">In cinemas</p>
        </div>

        {/* Details */}
        <div className="flex-1 lg:ml-10">
          <h1 className="text-4xl font-bold">{movie.title}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-yellow-400 font-semibold text-xl">
              ⭐ {movie.vote_average}/10
            </span>
            <button className="bg-gray-700 px-4 py-1 rounded-md hover:bg-gray-600">
              Rate now
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="border px-3 py-1 rounded-md">2D</span>
            <span className="border px-3 py-1 rounded-md">Hindi</span>
            <span className="border px-3 py-1 rounded-md">English</span>
          </div>

          {/* Info */}
          <p className="mt-4 text-lg">
            ⏳ {movie.runtime} mins • 🎬 {movie.genres?.map(g => g.name).join(", ")} • 📅 {movie.release_date}
          </p>

          {/* Book Tickets */}
          <button
            onClick={() => navigate(`/movie/${id}/showtimes`)}
            className="mt-6 bg-pink-600 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-pink-700"
          >
            Book Tickets
          </button>
        </div>
      </div>

      {/* About Movie */}
      <div className="px-6 lg:px-20 py-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">About the Movie</h2>
        <p>{movie.overview}</p>
      </div>

      {/* Cast Section */}
      <div className="px-6 lg:px-20 py-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">Cast</h2>
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {cast.slice(0, 8).map(actor => (
            <div key={actor.id} className="text-center w-32">
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className="w-32 h-32 object-cover rounded-full"
              />
              <h3 className="mt-2 text-sm font-semibold">{actor.name}</h3>
              <p className="text-gray-500 text-xs">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-6 lg:px-20 py-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">Top Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.length > 0 ? (
            reviews.map(r => (
              <div key={r.id} className="border p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{r.author}</h3>
                  <span className="text-yellow-400">⭐ {r.author_details?.rating || "N/A"}</span>
                </div>
                <p className="text-gray-600">{r.content.slice(0, 300)}...</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>

      {/* Recommendations */}
      <div className="px-6 lg:px-20 py-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">Recommended Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recommendations.slice(0, 8).map(rec => (
            <Link key={rec.id} to={`/movie/${rec.id}`}>
            <div key={rec.id} className="bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/w500${rec.poster_path}`}
                alt={rec.title}
                className="w-full h-60 object-cover"
              />
              <p className="p-2 font-semibold">{rec.title}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
