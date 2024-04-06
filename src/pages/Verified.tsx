import { Button, Card, CardContent, Typography } from "@mui/material";
import Logo from './../assets/logo.png'
import VerifiedIcon from './../assets/verified.pdf'
import { useNavigate } from "react-router-dom";


export default function Verified() {

  const navigator = useNavigate()

  const handleCLick = () => {
    navigator('/')
  }

  return (
    <div className="flex justify-center items-center mt-60 sm:mx-8 md:mx-16 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4 }}>
        <CardContent className="flex flex-col gap-2 justify-center items-center" >
          
          <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
          <Typography variant="inherit" fontSize={40} component="div">
            CNS Authenticator
          </Typography>
          <img src={VerifiedIcon} alt="icon" style={{ width: 48, height: 48, marginTop: 16 }} />
          <Typography variant="inherit" fontSize={18} className="flex text-center">
            Your Email Address verification is successful
          </Typography>

          <Button
            variant="contained" size="large" onClick={handleCLick}
            style={{ backgroundColor: "#14152C", fontFamily: 'Oswald', width: '100%', marginTop: 16 }}>
            Proceed to Main Page
          </Button>

        </CardContent>
      </Card>
    </div>
  )
}
