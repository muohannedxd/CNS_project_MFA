import { EmailRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import Logo from './../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { supabase } from "../utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!.@#$%^&* ]).{8,}$/


export default function Login() {

  /**
   * form props
   */
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  /**
   * form control
   */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidCreds, setInvalidCreds] = useState(false)

  /**
   * form validation
   */
  // email
  const [isValidEmail, setValidEmail] = useState(false)
  const [isFilledEmail, setFilledEmail] = useState(false)
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newEmail = event.target.value
    setEmail(newEmail)
    if (newEmail !== '') {
      setFilledEmail(true)
      if (EMAIL_REGEX.test(newEmail)) {
        setValidEmail(true)
      } else {
        setValidEmail(false)
      }
    } else {
      setFilledEmail(false)
    }
  }

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
    } else {
      setFilledPassword(false)
    }
  }

  const navigator = useNavigate()

  /**
   * form submission
   */
  const [isClicked, setClicked] = useState(false)
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setClicked(true)
    if (isValidEmail && isValidPassword) {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        },)
        if (!error) {
          setInvalidCreds(false)
          navigator('/')
        } else {
          setInvalidCreds(true)
        }
      } catch (error) {
        console.log('could not signup, ', error)
      }
    } else {
      // nothing
    }
  }


  /**
  * sign up with google
  */
  const handleSignupWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/'
      }
    })
    if (error) {
      console.log('error while logging in, ', error)
    }
  }



  return (
    <div className="flex flex-col items-center justify-center">

      <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />

      <Box component='form' className="flex flex-col w-[90%] mx-8 my-8 gap-6">

        <FormControl variant="standard">
          <TextField
            type="email"
            fullWidth
            required
            id="outlined-required"
            label="Email"
            placeholder="abbas.basheer@gmail.com"
            value={email}
            onChange={handleEmailChange}
            error={(!isValidEmail && isFilledEmail) || (isClicked && !isFilledEmail) || invalidCreds}
          />
          {(isFilledEmail && !isValidEmail) &&
            <FormHelperText style={{ color: '#C92A2A' }}>Invalid Email Address</FormHelperText>
          }

        </FormControl>

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
            error={(!isValidPassword && isFilledPassword) || (isClicked && !isFilledPassword) || invalidCreds}
          />
          {(isFilledPassword && !isValidPassword) &&
            <FormHelperText style={{ color: '#C92A2A', marginLeft: -1 }}>Password must be 8 characters at least that contain one uppercase and special character</FormHelperText>
          }

        </FormControl>

        <Button variant="contained" size="large" onClick={handleClick}
          style={{ backgroundColor: "#14152C", fontFamily: 'Oswald', width: '100%' }}
        >
          Login
        </Button>
        {invalidCreds && <p style={{ color: '#C92A2A', fontSize: 18, alignSelf: 'center' }}> Invalid Email Address or Password </p>}
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

        <Button
          variant="outlined" onClick={handleSignupWithGoogle}
          style={{ borderColor: '#C92A2A', color: '#C92A2A', fontFamily: 'Oswald' }}
          size="large" startIcon={<EmailRounded />}>
          Google Account
        </Button>

      </Box>
    </div>
  )
}
