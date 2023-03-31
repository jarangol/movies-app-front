import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams()
  const movieId = params.movieId;
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://127.0.0.1:8080/movies/"+movieId)
        .catch(() => setError(true))
      setIsLoading(false)
      setError(!data.ok)
      if (data.ok) {
        const movie = await data.json();
        setMovie(movie);
      }
    }

    fetchData()
  }, []);

  return (
    <>
      { isLoading ? <h1>Loading...</h1> :
        error ? <h1>"Ups! Something went wrong."</h1> :
      <>
        <h2>{movie.title}</h2>
        <h3>Directed by: {movie.director}</h3>
        <h3>Year: {movie.year}</h3>
        <h3>Length: {movie.length}</h3>
        <h3>Actors:</h3>
        {movie?.actors?.map((actor) => (
          <p key={actor.id}>{actor.name}</p>
        ))}
      </>
    }
    </>
  );
};

export default MovieDetails;
