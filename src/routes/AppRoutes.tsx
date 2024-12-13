import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/Login/SignIn.js';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';

const AppRoutes = () => (
  <Router>
    <Routes> 
      <Route path='/' element={<Home></Home>}/>
      <Route path="/login" element={<SignIn/>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default AppRoutes;
