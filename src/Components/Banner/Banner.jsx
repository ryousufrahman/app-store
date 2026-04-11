import React from 'react';
import logo from '../../assets/images/logo.png'

const Banner = () => {
    return (
        <div className='main-box max-w-[1200px] mx-auto flex justify-between items-center mt-10 '>
             <div className='left space-y-4'>
                <h1 className='text-6xl font-bold'>Download Our Apps For <br /> Better Experience</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quod animi unde ut quos aperiam excepturi repellendus <br /> consequuntur debitis voluptate ipsa ab, illo optio corrupti <br /> veniam sunt aliquam distinctio aliquid. Debitis.</p>

             </div>
             <div className='right'>
                <img src={logo} alt="logo" />

             </div>
            
        </div>
    );
};

export default Banner;