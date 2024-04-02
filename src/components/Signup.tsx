import { EmailRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import Logo from './../assets/logo.png'

export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfitmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      
      <img src={Logo} alt="logo" style={{width: 60, height: 60}} />

      <Box component='form' className="flex flex-col w-[90%] mx-8 my-8 gap-6">

        <TextField
          fullWidth
          required
          id="outlined-required"
          label="First Name"
          placeholder="Basheer"
        />

        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Last Name"
          placeholder="Hmida"
        />

        <TextField
          type="email"
          fullWidth
          required
          id="outlined-required"
          label="Email"
          placeholder="hmida.basheer@gmail.com"
        />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            label="Password *"
          />
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Conirm Password *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showConfitmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfitmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            label="Confirm Password *"
          />
        </FormControl>

        <Button variant="contained" size="large"
          style={{ backgroundColor: "#14152C" }}
        >
          Register
        </Button>
        {
          /**
           *    <LoadingButton loading variant="outlined" size="large">
              Submit
            </LoadingButton>
           */
        }

        <Divider component="li"
          sx={{ m: 4 }}
        > Or continue with </Divider>

        <Button variant="outlined" style={{borderColor: '#C92A2A', color: '#C92A2A'}} size="large" startIcon={<EmailRounded />}>
          Google Account
        </Button>

      </Box>
    </div>
  )
}
