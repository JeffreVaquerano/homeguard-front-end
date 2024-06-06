import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/admindashboard';
import Adminentradas from '../components/adminentradas';
import Adminresidencias from '../components/adminresidencias';
import Adminvigilantes from '../components/adminvigilantes';
import Adminsettings from '../components/adminsettings';
// import DashboardTest from '../components/admintest';
import Login from '../components/login';
import Signup from '../components/signup';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/adminentradas" element={<Adminentradas />} />
        <Route path="/adminresidencias" element={<Adminresidencias />} />
        <Route path="/adminvigilantes" element={<Adminvigilantes />} />
        <Route path="/adminsettings" element={<Adminsettings />} />
        {/* <Route path="/admintest" element={<DashboardTest />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
