import { Button, Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from './../assets/logo.png'


export default function Main() {

  let name = 'Mohanned Kadache'
  let email = 'mohannedx1105@gmail.com'

  return (
    <div className="flex justify-center items-center mt-80 sm:mx-0 md:mx-16 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4 }}>
        <CardContent className="flex flex-col gap-2 justify-center items-center" >
          <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
          <Typography variant="inherit" fontSize={40} component="div">
            {name}
          </Typography>
          <Typography variant="inherit" fontSize={22}>
            {email}
          </Typography>
          <Typography variant="inherit" fontSize={18}>
            You have been added to the waitlist!
          </Typography>

          <NavLink to='/' className='mt-6'>
            <Button variant="contained" style={{ backgroundColor: "#C92A2A", fontFamily: 'Oswald' }} size="large"> Signout </Button>
          </NavLink>

        </CardContent>
      </Card>
    </div>
  )
}
