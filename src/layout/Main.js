import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className={
      theme ? 'heroDarkPattern' : 'heroLightPattern'
    }>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;