import { Box, Button, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import Logo from './../assets/logo.png'
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../utils";
import { useNavigate } from "react-router-dom";


export default function Main() {

  const [loggedUsername, setLoggedUsername] = useState('')
  const [loggedEmail, setLoggedEmail] = useState('')

  const navigator = useNavigate()
  
  const getUser = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        console.log('user: ', user)
        setLoggedEmail(user.user_metadata.email)
        setLoggedUsername(user.user_metadata.full_name)
      } else {
        console.log('no logged in user yet!')
        navigator('/authenticate')
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, [navigator]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  /**
   * logging out
   */
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut()
    navigator('/authenticate')
    if (error) {
      console.log('error signing out, ', error)
    }
  }


  return (
    <div className="flex justify-center items-center mt-60 sm:mx-8 md:mx-8 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent className="flex flex-col gap-2 justify-center items-center" >
          <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />

          {
            loggedEmail && loggedUsername ?
              <>
                <Typography variant="inherit" fontSize={40} component="div" textAlign='center'>
                  {loggedUsername}
                </Typography>
                <Typography variant="inherit" fontSize={22} textAlign='center'>
                  {loggedEmail}
                </Typography>

                <Typography variant="inherit" fontSize={18} marginTop={4} textAlign='center'>
                  You have been added to the waitlist!
                </Typography>
              </> :
              <Box sx={{ display: 'flex' }} margin={8}>
                <CircularProgress sx={{ color: '#14152C' }} />
              </Box>
          }

          <Button
            variant="contained" onClick={handleLogOut}
            style={{ backgroundColor: "#C92A2A", fontFamily: 'Oswald', marginTop: 26 }}
            size="large"
          >
            Signout
          </Button>


        </CardContent>
      </Card>
    </div>
  )
}
