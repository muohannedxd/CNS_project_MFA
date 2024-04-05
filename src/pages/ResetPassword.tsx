import { Box, Button, Card, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import Logo from './../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!.@#$%^&* ]).{8,}$/


export default function ResetPassword() {

  let name = 'Mohanned Kadache'

  /**
   * form props
   */
  const [showPassword, setShowPassword] = useState(false);
  const [showConfitmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  /**
   * form control
   */
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  /**
   * form validation
   */
  // password
  const [isValidPassword, setValidPassword] = useState(false)
  const [isFilledPassword, setFilledPassword] = useState(false)
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newPass = event.target.value
    setPassword(newPass)
    if (newPass !== '') {
      setFilledPassword(true)
      if (PASSWORD_REGEX.test(newPass)) {
        setValidPassword(true)
      } else {
        setValidPassword(false)
      }
      if (newPass !== confPassword) {
        setValidConf(false)
      } else {
        setValidConf(true)
      }
    } else {
      setFilledPassword(false)
    }
  }

  // confirmation
  const [isValidConf, setValidConf] = useState(false)
  const [isFilledConf, setFilledConf] = useState(false)
  const handleConfirmationChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newConf = event.target.value
    setConfPassword(newConf)
    if (newConf !== '') {
      setFilledConf(true)
      if (newConf === password) {
        setValidConf(true)
      } else {
        setValidConf(false)
      }
    } else {
      setFilledConf(false)
    }
  }

  /**
  * form submission
  */
  const [isClicked, setClicked] = useState(false)
  const navigator = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setClicked(true)
    if (isValidPassword && isValidConf) {
      navigator('/')
    } else {
      // nothing
    }
  }

  return (
    <div className="flex justify-center items-center mt-60 sm:mx-8 md:mx-8 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box component='form' className="flex flex-col w-[90%] mx-8 my-8 gap-2" >

          <img src={Logo} alt="logo" style={{ width: 60, height: 60, alignSelf: 'center' }} />
          <Typography variant="inherit" fontSize={40} component="div" style={{ textAlign: 'center' }}>
            {name}
          </Typography>
          <Typography variant="inherit" fontSize={18} style={{ textAlign: 'center' }}>
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
              value={password}
              onChange={handlePasswordChange}
              error={(!isValidPassword && isFilledPassword) || (isClicked && !isFilledPassword)}
            />
            {(isFilledPassword && !isValidPassword) &&
              <FormHelperText style={{ color: '#C92A2A', marginLeft: -1 }}>Password must be 8 characters at least that contain one uppercase and special character</FormHelperText>
            }

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
              value={confPassword}
              onChange={handleConfirmationChange}
              error={(!isValidConf && isFilledConf) || (isClicked && !isFilledConf)}
            />
            {(isFilledConf && !isValidConf) &&
              <FormHelperText style={{ color: '#C92A2A', marginLeft: -1 }}>Confirmation must match the password</FormHelperText>
            }
          </FormControl>

          <Button
            variant="contained" size="large" onClick={handleClick}
            style={{ backgroundColor: "#14152C", fontFamily: 'Oswald', width: '100%', marginTop: 16 }}>
            Save
          </Button>

        </Box>
      </Card>
    </div>
  )
}
