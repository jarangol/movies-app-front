import { Button, FormControl, FormGroup, FormLabel, Input } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const cancel = () => navigate(-1);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const clearFields = () => {
    setEmail('')
    setPassword('')
    setName('')
  }

  const submit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        displayName: name
      })
    };
    const response = await fetch(
      'http://127.0.0.1:3001/users',
      requestOptions
    );
    const { ok } = response
    const { errorMessage } = await response.json()
    const message = ok ? 'User registered successfully.' : errorMessage;
    alert(message);
    if (ok) {
      clearFields()
      cancel()
    }
  }
  return (
    <>
      <h1>Sign up</h1>
      <Box height={50}></Box>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={({ target }) => {
              setName(target.value);
            } }
          >
          </Input>
        </FormGroup>
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
        <Button onClick={cancel}>Cancel</Button>
    </>
  )
};

export default SignUp;