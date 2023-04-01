import { useNavigate } from "react-router-dom";
import CinemaCard from "./CinemaCard";
import "./MoviesList.css";

export const CinemasList = ({ cinemas }) => {
  const navigate = useNavigate();

  const handleMovieCardClick = (id) => navigate(`/cinemas/${id}`);

  const CinemaCards = cinemas.map((cinema) => (
    <CinemaCard
      onClick={() => handleMovieCardClick(cinema.id)}
      key={cinema.id}
      cinema={cinema}
    ></CinemaCard>
  ));
  return <div className="movie-cards">{CinemaCards}</div>;
};

export default CinemasList;
