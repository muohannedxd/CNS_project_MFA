import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from 'react-router-dom';
import AuthForms from './pages/AuthForms';
import Main from './pages/Main';
import ResetPassword from './pages/ResetPassword';
import Validate from './pages/Validate';
import NoMatch from './pages/NoMatch';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthForms />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path='/validate' element={<Validate />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}
