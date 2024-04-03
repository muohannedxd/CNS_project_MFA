import { Button, Card, CardContent, FormHelperText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from './../assets/logo.png'
import { useState } from "react";
import { MuiOtpInput } from 'mui-one-time-password-input'


export default function Validate() {

  let name = 'Mohanned Kadache'

  /**
   * form control
   */
  const [otp, setOtp] = useState('')
  const handleChange = (newValue: string) => {
    setOtp(newValue);
  }

  /**
  * form submission
  */
  const [isClicked, setClicked] = useState(false)
  const navigator = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setClicked(true)
    if (otp.length >= 4) {
      navigator('/main')
    } else {
      // nothing
    }
  }


  return (
    <div className="flex justify-center items-center mt-60 sm:mx-8 md:mx-16 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4 }}>
        <CardContent className="flex flex-col gap-2 justify-center items-center" >
          <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
          <Typography variant="inherit" fontSize={40} component="div">
            {name}
          </Typography>
          <Typography variant="inherit" fontSize={18} className="flex text-center">
            Welcome, Please type here the code we have sent to your phone number
          </Typography>

          <MuiOtpInput
            length={4}
            // onComplete={handleClick}
            value={otp}
            onChange={handleChange}
            className="w-[50%] mt-12 mb-6"
          />

          <Button
            variant="contained" size="large" onClick={handleClick}
            style={{ backgroundColor: "#14152C", fontFamily: 'Oswald', width: '100%', marginTop: 16 }}>
            Proceed
          </Button>

          {(isClicked && otp.length !== 4) &&
            <FormHelperText style={{ color: '#C92A2A', alignSelf: 'start' }}>Please, fill the validation field</FormHelperText>
          }

        </CardContent>
      </Card>
    </div>
  )
}
