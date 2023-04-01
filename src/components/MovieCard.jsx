import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {
  const { title, year, director } = movie;
  return (
    <div className="movie-card" onClick={onClick}>
      <div>{title}</div>
      <div>{year}</div>
      <div>{director}</div>
    </div>
  );
};

export default MovieCard;
