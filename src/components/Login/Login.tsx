import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';

function Login({ setEmail, setPassword, loginFormOn, handleAction, blurSet}) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className='login-form' onClick={loginFormOn} >
            <div className="heading-container">
                <h3>login to manage this journal</h3>
            </div>
            <ThemeProvider theme={darkTheme}>

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
            </ThemeProvider>

            <Button
              variant="contained"
              disabled={disabled}
              onClick={() => { handleAction(); handleClick(); blurSet(); }}
              className="login-btn"
              >
              Login
            </Button>
        </div>
  )
}

export default Login
