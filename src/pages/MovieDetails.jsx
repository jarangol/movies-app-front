const MovieDetails = () => {
  const movie = {
    id: 1,
    title: "Forrest Gump",
    length: 8520,
    year: 1994,
    director: "Robert Zemeckis",
    actors: [
      {
        id: 3,
        name: "Gary Sinise",
      },
      {
        id: 6,
        name: "Michael Conner Humphreys",
      },
      {
        id: 4,
        name: "Mykelti Williamson",
      },
      {
        id: 2,
        name: "Robin Wright",
      },
      {
        id: 5,
        name: "Sally Field",
      },
      {
        id: 1,
        name: "Tom Hanks",
      },
    ],
  };
  return (
    <>
      <h2>{movie.title}</h2>
      <h3>Directed by: {movie.director}</h3>
      <h3>Year: {movie.year}</h3>
      <h3>Length: {movie.length}</h3>
      <h3>Actors:</h3>
      {movie.actors.map((actor) => (
        <p key={actor.id}>{actor.name}</p>
      ))}
    </>
  );
};

export default MovieDetails;
