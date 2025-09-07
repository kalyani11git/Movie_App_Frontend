const TheatreCard = ({ theatre }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{theatre.name}</h3>
      <div className="flex flex-wrap gap-2">
        {theatre.timings.map((time, index) => (
          <button
            key={index}
            className="bg-pink-600 px-3 py-1 rounded hover:bg-pink-700 transition"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TheatreCard;
