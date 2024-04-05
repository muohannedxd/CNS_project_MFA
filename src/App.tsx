import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthForms from './pages/AuthForms';
import Main from './pages/Main';
import ResetPassword from './pages/ResetPassword';
import Validate from './pages/Validate';
import NoMatch from './pages/NoMatch';
import { useEffect, useState } from 'react';
import { supabase } from './utils';
import { UserType } from './types/Types';

export default function App() {

  const [loggedUser, setLoggedUser] = useState<UserType>()

  const navigator = useNavigate()
  useEffect(() => {
    const getUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) {
        console.log('cannot get user, ', error)
      } else {
        if (user) {
          console.log('user: ', user)
          setLoggedUser(user)
          navigator('/')
        } else {
          console.log('no logged in user yet!')
        }
      }
    }
    getUser()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/authenticate' element={<AuthForms />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path='/validate' element={<Validate />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}
