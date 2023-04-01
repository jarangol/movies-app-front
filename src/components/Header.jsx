import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { endSession } from '../storage/session'

import "./Header.css";

export const Header = ({title}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();

  const handleSignUp = () => navigate(`/sign-up`);

  const handleLogin = () => navigate('/login')

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false)
      endSession();
    }).catch((error) => {alert(error)})
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user)
    });
  }, [])

  return (
    <div className="header">
      <div className="column"></div>
      <div className="column">{title}</div>
      <div className="auth column">
      { isLoggedIn ?
        <Button onClick={handleSignOut}>Sign out</Button> :
        <>
          <Button onClick={handleSignUp}>Sign up</Button>
          <Button onClick={handleLogin}>Login</Button>
        </>
      }
      </div>

    </div>
  );
};
