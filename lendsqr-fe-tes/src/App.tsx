import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import UserDetails from './pages/UserDetails/UserDetails';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user' element={<User />} />
        <Route path='/user-details' element={<UserDetails />} />
    </Routes>
  )
}

export default App
