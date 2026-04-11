import React from 'react';
import Navbar from '../Components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/shared/Footer';

const Layout = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Layout;