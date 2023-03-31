import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <div>{movie.title}</div>
      <div>{movie.year}</div>
      <div>{movie.director}</div>
    </div>
  );
};

export default MovieCard;
