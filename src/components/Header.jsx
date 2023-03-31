import { Button } from "@mui/material";
import "./Header.css";

export const Header = ({title}) => {
  return (
    <div class="header">
      <p>{title}</p>
      {/* <div class="auth">
        <Button>Sign up</Button>
      </div> */}

    </div>
  );
};
