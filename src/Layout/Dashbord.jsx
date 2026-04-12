import React from 'react';
import Sidebar from './Dashbord/Sidebar';
import { Outlet } from 'react-router';
import Dfooter from './Dashbord/Dfooter';

const Dashbord = () => {
    return (
        <div className='grid grid-cols-2'>
             <Sidebar></Sidebar>
             <Outlet></Outlet> 
           
             
        </div>
    );
};

export default Dashbord;