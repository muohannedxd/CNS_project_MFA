import { Box, Button, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from './../assets/logo.png'
import { useEffect, useState } from "react";
import { supabase } from "../utils";
import { UserType } from "../types/Types";


export default function Main() {

  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getUsers = async () => {

      await new Promise(resolve => setTimeout(resolve, 1000))

      const { data, error } = await supabase.from('User').select('*');
      if (!error) {
        setUsers(data || []);
      } else {
        console.log('error fetching data: ', error)
      }
    };

    getUsers();
  }, []);

  return (
    <div className="flex justify-center items-center mt-60 sm:mx-8 md:mx-8 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent className="flex flex-col gap-2 justify-center items-center" >
          <img src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
          {users.length > 0 ? (
            <div>
              {
                users.map((user) => (
                  <div key={user.id}>
                    <Typography variant="inherit" fontSize={40} component="div" textAlign='center'>
                      {user.name}
                    </Typography>
                    <Typography variant="inherit" fontSize={22} textAlign='center'>
                      {user.email}
                    </Typography>
                  </div>
                ))

              }
              <Typography variant="inherit" fontSize={18} marginTop={4} textAlign='center'>
                You have been added to the waitlist!
              </Typography>
            </div>
          ) : (
            <Box sx={{ display: 'flex' }} margin={8}>
              <CircularProgress sx={{color: '#14152C'}} />
            </Box>
          )}

          <NavLink to='/' className='mt-6'>
            <Button variant="contained" style={{ backgroundColor: "#C92A2A", fontFamily: 'Oswald' }} size="large"> Signout </Button>
          </NavLink>

        </CardContent>
      </Card>
    </div>
  )
}
