import { Card, CardContent, Typography } from "@mui/material";
import Logo from './../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { supabase } from "../utils";

export default function VerifyEmail() {
  
  const navigator = useNavigate()
  
  const getUser = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        console.log('user not verified')
      } else {
        navigator('/')
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, [navigator]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="flex justify-center items-center mt-60 sm:mx-8 md:mx-16 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4 }}>
        <CardContent className="flex flex-col gap-2 justify-center items-center" >
          
          <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
          <Typography variant="inherit" fontSize={40} component="div">
            CNS Authenticator
          </Typography>
          <Typography variant="inherit" fontSize={18} className="flex text-center">
            An e-mail is sent to your Mailbox. Please, confirm your authentication
          </Typography>

        </CardContent>
      </Card>
    </div>
  )
}
