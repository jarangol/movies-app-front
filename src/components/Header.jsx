import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = ({title}) => {
  const navigate = useNavigate();

  const handleSignUp = () => navigate(`/sign-up`);

  return (
    <div className="header">
      <div className="column"></div>
      <div className="column">{title}</div>
      <div className="auth column">
        <Button onClick={handleSignUp}>Sign up</Button>
      </div>

    </div>
  );
};
