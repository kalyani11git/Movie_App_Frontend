import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="text-black rounded shadow hover:scale-105 transition-transform w-60 h-[400px] flex flex-col">
        {/* Image */}
        <div className="w-full h-80 overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t"
          />
        </div>

        {/* Details */}
        <div className="p-2 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold line-clamp-1">{movie.title}</h3>
          <p className="text-sm text-gray-400">
            {movie.genres?.map((g) => g.name).join("/")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
