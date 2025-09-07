import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TheatreCard from "../components/TheatreCard";

const API_URL = import.meta.env.VITE_API_URL;

const ShowTimes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    // Movie details
    fetch(`${API_URL}/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    // Mock data for theatres & show timings
    setTheatres([
      {
        id: 1,
        name: "PVR Cinemas",
        timings: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
      },
      {
        id: 2,
        name: "INOX Theatre",
        timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
      },
      {
        id: 3,
        name: "Cinepolis",
        timings: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
      },
    ]);
  }, [id]);

  if (!movie) return <h2 className="p-6 text-white">Loading...</h2>;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <button
        onClick={() => navigate(-1)}
        className="bg-pink-600 px-4 py-2 rounded mb-4"
      >
        ⬅ Back
      </button>
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="mb-6 text-gray-300">{movie.tagline || movie.overview}</p>

      <h2 className="text-2xl font-semibold mb-4">Available Theatres</h2>
      <div className="flex flex-col gap-6">
        {theatres.map((theatre) => (
          <TheatreCard key={theatre.id} theatre={theatre} />
        ))}
      </div>
    </div>
  );
};

export default ShowTimes;
