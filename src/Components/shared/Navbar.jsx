import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='shadow bg-base-100'>
            <nav className='max-w-[1200px] mx-auto flex justify-between items-center  mb-5 p-5'>
                <div>
                    <Link to={'/'}> <h2 className='font-bold text-3xl'>App store</h2> </Link>
                </div>
                <ul className='flex gap-3'>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/apps'}>apps</NavLink></li>
                    <li><NavLink to={'/installedApp'}>Installed App</NavLink></li>
                    <li><NavLink to={'/error'}>Downloads</NavLink></li>
                    
                </ul>
                <div>
                    <button className='btn btn-primary'>Support</button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;