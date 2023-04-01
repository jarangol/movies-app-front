import "./MovieCard.css";

const CinemaCard = ({ cinema, onClick }) => {
  const { address, name } = cinema;
  return (
    <div className="movie-card" onClick={onClick}>
      <div>{name}</div>
      <div>{address}</div>
    </div>
  );
};

export default CinemaCard;
