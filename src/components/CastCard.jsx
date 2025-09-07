const CastCard = ({ person }) => {
  return (
    <div className="bg-gray-800 rounded p-2 text-center">
      <img
        src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
        alt={person.name}
        className="rounded mx-auto"
      />
      <h3 className="font-semibold mt-2">{person.name}</h3>
      <p className="text-sm text-gray-400">{person.character}</p>
    </div>
  );
};

export default CastCard;
