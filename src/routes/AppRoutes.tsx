import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/Login/SignIn.js';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import Store from '../pages/Store/Store.js'
import Cart from '../pages/Cart/Cart.js';
const AppRoutes = () => (
  <Router>
    <Routes> 
      <Route path='/' element={<Home></Home>}/>
      <Route path="/login" element={<SignIn/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="store/:category" element={<Store />} />
    </Routes>
  </Router>
);

export default AppRoutes;
