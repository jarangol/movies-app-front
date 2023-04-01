import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesList from "../components/MoviesList";

const CinemaDetails = () => {
  const params = useParams()
  const { cinemaId } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await fetch("http://192.168.64.2:31003/cinemas/"+cinemaId+"/movies")
        .catch(() => setError(true))
      setIsLoading(false)
      setError(!data.ok)
      if (data.ok) {
        const movies = await data.json();
        setMovies(movies);
      }
    }

    fetchMoviesData()
  }, []);

  return (
    <>
      { isLoading ? <h1>Loading...</h1> :
          error ?
          <h1>"Ups! Something went wrong."</h1> :
          <>
            <h2>Available movies:</h2>
            <MoviesList movies={movies}></MoviesList>
          </>
    }
    </>
  );
};

export default CinemaDetails;
