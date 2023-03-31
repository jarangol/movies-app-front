import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = ({title}) => {
  const navigate = useNavigate();

  const handleSignUp = () => navigate(`/sign-up`);

  return (
    <div class="header">
      <div class="column"></div>
      <div class="column">{title}</div>
      <div class="auth column">
        <Button onClick={handleSignUp}>Sign up</Button>
      </div>

    </div>
  );
};
