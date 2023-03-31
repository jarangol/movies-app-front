import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
const movies = [
  {
    id: 1,
    title: "Forrest Gump",
    length: 8520,
    year: 1994,
    director: "Robert Zemeckis",
  },
];

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://159.122.183.100:32341/api/v1.0/films")
  //     .then((response) => response.json())
  //     .then((movies) => console.log(movies));
  // }, []);

  return (
    <>
      {/* <h1>Cargando...</h1> */}
      <h3>Movies List</h3>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};

export default Movies;
