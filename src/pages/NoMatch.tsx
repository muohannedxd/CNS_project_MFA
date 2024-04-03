import { Button, Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from './../assets/logo.png'


export default function NoMatch() {
  return (
    <div className="flex justify-center items-center mt-80 sm:mx-0 md:mx-16 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4 }}>
        <CardContent className="flex flex-col gap-2 justify-center items-center">
        <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
          <Typography variant="inherit" fontSize={40} component="div">
            404 NOT FOUND
          </Typography>
          <Typography variant="inherit" fontSize={22}>
            The page you are lookig for does not exist
          </Typography>

          <NavLink to='/' className='mt-6'>
            <Button variant="contained" style={{ backgroundColor: "#14152C", fontFamily: 'Oswald' }} size="large">Return</Button>
          </NavLink>

        </CardContent>
      </Card>
    </div>
  )
}
