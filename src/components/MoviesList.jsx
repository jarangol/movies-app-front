import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({movies}) => {
  
  const navigate = useNavigate();

  const handleMovieCardClick = (id) => navigate(`/movies/${id}`);

  const MovieCards = movies?.map((movie) => (
    <MovieCard
      onClick={() => handleMovieCardClick(movie.id)}
      key={movie.id}
      movie={movie}
    ></MovieCard>
  ));
  return <div className="movie-cards">{MovieCards}</div>;
};

export default MoviesList;
