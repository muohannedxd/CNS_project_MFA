import { Button, Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
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

  return (
    <div className="flex justify-center items-center mt-60 sm:mx-0 md:mx-16 lg:mx-60 xl:mx-96">
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
            onComplete={() => console.log('done otp')}
            value={otp}
            onChange={handleChange} 
            className="w-[50%] mt-12 mb-6"
          />

          <NavLink to='/main' className='mt-6'>
            <Button variant="contained" style={{ backgroundColor: "#14152C", fontFamily: 'Oswald' }} size="large"> Proceed </Button>
          </NavLink>

        </CardContent>
      </Card>
    </div>
  )
}
