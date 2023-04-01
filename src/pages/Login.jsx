import { Button, FormGroup, FormLabel, Input } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { startSession } from "../storage/session";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const onCancel = () => navigate(-1);

  const clearFields = () => {
    setEmail('')
    setPassword('')
  }

  const submit = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        startSession(userCredential.user);
        clearFields();
        navigate('/');
      }).catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  return (
    <>
      <h1>Login</h1>
      <Box height={50}></Box>
        <Box height={20}></Box>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            } }
          >
          </Input>
        </FormGroup>
        <Box height={20}></Box>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            } }
          >
          </Input>
        </FormGroup>
        <Box height={40}>
        </Box><Button onClick={submit}>Submit</Button>
        <Box height={20}></Box>
        <Button onClick={onCancel}>Cancel</Button>
    </>
  )
};

export default Login;