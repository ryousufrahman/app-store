import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='shadow bg-base-100 sticky top-0 z-10'>
            <nav className='max-w-[1200px] mx-auto flex justify-between items-center  mb-5 p-5'>
                <div>
                    <Link to={'/'}> <h2 className='font-bold text-3xl'>App store</h2> </Link>
                </div>
                <ul className='flex gap-3'>
                    <li><NavLink to={'/'} className={({isActive}) => isActive ? 'text-green-500 border border-green-500 p-2' : ""}>Home</NavLink></li>
                    <li><NavLink to={'/apps'} className={({isActive}) => isActive ? 'text-green-500 border border-green-500 p-2' : ""}>apps</NavLink></li>
                    <li><NavLink to={'/installedApp' } className={({isActive}) => isActive ? 'text-green-500 border border-green-500 p-2' : ""}>Installed App</NavLink></li>
                    <li><NavLink to={'/error'} className={({isActive}) => isActive ? 'text-green-500 border border-green-500 p-2' : ""}>Downloads</NavLink></li>
                    
                </ul>
                <div>
                    <button className='btn btn-primary'>Support</button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;