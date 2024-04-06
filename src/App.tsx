import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from 'react-router-dom';
import AuthForms from './pages/AuthForms';
import Main from './pages/Main';
import Validate from './pages/Validate';
import NoMatch from './pages/NoMatch';
import VerifyEmail from './pages/VerifyEmail';
import Verified from './pages/Verified';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/authenticate' element={<AuthForms />}></Route>
        <Route path='/validate' element={<Validate />}></Route>
        <Route path='/verify-email' element={<VerifyEmail />}></Route>
        <Route path='/verified' element={<Verified />} ></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}
