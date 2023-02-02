import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function Login({ setEmail, setPassword, loginFormOn, handleAction}) {

  // const theme = createMuiTheme({
  //   overrides: {
  //     MuiInputBase: {
  //       input: {
  //         background: "#fff",
  //       },
  //     },
  //   },
  // });


  return (
    <div className='login-form' onClick={loginFormOn} >
            <div className="heading-container">
                <h3>Are you luisrrv ?</h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
              <div className='manager-login-form'>
              <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              className={'login-text-form'}
              onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                className='login-text-form'
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>

            </Box>

            <Button variant="contained" onClick={handleAction}>Login</Button>
        </div>
  )
}

export default Login
