import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://127.0.0.1:8080/movies")
        .catch(() => setError(true))
      setIsLoading(false)
      setError(!data.ok)
      if (data.ok) {
        const movies = await data.json();
        setMovies(movies);
      }
    }

    fetchData()
  }, []);

  return (
    <>
      { isLoading ? <h1>Loading...</h1> :
        error ? <h1>"Ups! Something went wrong."</h1> :
        <>
          <h3>Movies List</h3>
          <MoviesList movies={movies}></MoviesList>
        </>
      }
    </>
  );
};

export default Movies;
