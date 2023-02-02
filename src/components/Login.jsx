import React from 'react'

function Login() {
  return (
    <div>
        login form here
            {/* <div className="heading-container">
                <h3>
                    {title}
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
              {title === "Manager login" ?
              <div className='manager-login-form'>
              <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
            :
            <TextField
                  id="code"
                  label="Login code"
                  variant="outlined"
                  onChange={(e) => setOperatorCode(e.target.value)}
                />

            }

            </Box>

            {title === "Manager login" ?
            <Button title={title} handleAction={handleAction}/>
            :
            <Button title={title} handleAction={handleAction}/>
            }
          <Btn onClick={() => {navigate(`/${title === "Operator Login" ? "Manager-login" : "Operator-login"}`)}}>{title === "Operator Login" ? "Manager Login" : "Operator Login"}</Btn> */}
        </div>
  )
}

export default Login
