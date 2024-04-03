import { Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import Logo from './../assets/logo.png'
import { NavLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";


export default function ResetPassword() {

  let name = 'Mohanned Kadache'

  const [showPassword, setShowPassword] = useState(false);
  const [showConfitmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center mt-60 sm:mx-0 md:mx-8 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box component='form' className="flex flex-col w-[90%] mx-8 my-8 gap-2" >

          <img src={Logo} alt="logo" style={{ width: 60, height: 60, alignSelf: 'center' }} />
          <Typography variant="inherit" fontSize={40} component="div" style={{textAlign: 'center'}}>
            {name}
          </Typography>
          <Typography variant="inherit" fontSize={18} style={{textAlign: 'center'}}>
            Enter your new password
          </Typography>

          <br />

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

          <NavLink to='/main' className='mt-6'>
            <Button variant="contained" style={{ backgroundColor: "#14152C", fontFamily: 'Oswald', width: '100%' }} size="large"> Save </Button>
          </NavLink>

        </Box>
      </Card>
    </div>
  )
}
