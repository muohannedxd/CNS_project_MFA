import { EmailRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import Logo from './../assets/logo.png'
import { useNavigate } from "react-router-dom";

const NAME_REGEX = /^[A-Za-z\s]*$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!.@#$%^&* ]).{8,}$/

export default function Signup() {

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  /**
   * form validation
   */
  // name
  const [isValidName, setValidName] = useState(false)
  const [isFilledName, setFilledName] = useState(false)
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newName = event.target.value
    setName(newName)
    if (newName !== '') {
      setFilledName(true)
      if (NAME_REGEX.test(newName)) {
        setValidName(true)
      } else {
        setValidName(false)
      }
    } else {
      setFilledName(false)
    }
  }

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
    if (isValidName && isValidEmail && isValidPassword && isValidConf) {
      navigator('/validate')
    } else {
      // nothing
    }
  }


  return (
    <div className="flex flex-col items-center justify-center">

      <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />

      <Box component='form' className="flex flex-col w-[90%] mx-8 my-8 gap-6">

        <FormControl variant="standard">
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Full Name"
            placeholder="Basheer Abbas"
            value={name}
            onChange={handleNameChange}
            error={(!isValidName && isFilledName) || (isClicked && !isFilledName)}
          />
          {(isFilledName && !isValidName) &&
            <FormHelperText style={{ color: '#C92A2A' }}>Invalid Full Name</FormHelperText>
          }
        </FormControl>

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
            error={(!isValidEmail && isFilledEmail) || (isClicked && !isFilledEmail)}
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

        <Button variant="contained" size="large" onClick={handleClick}
          style={{ backgroundColor: "#14152C", fontFamily: 'Oswald', width: '100%' }}
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

        <Button variant="outlined" style={{ borderColor: '#C92A2A', color: '#C92A2A', fontFamily: 'Oswald' }} size="large" startIcon={<EmailRounded />}>
          Google Account
        </Button>

      </Box>
    </div>
  )
}
