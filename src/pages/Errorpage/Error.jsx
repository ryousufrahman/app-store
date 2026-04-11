import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='space-y-5'>
                <h2 className='text-red-500 text-4xl'>The page is not found</h2>
             <Link to={'/'} className='btn btn-primary mx-auto'>Go back to home</Link>
            </div>
            
        </div>
    );
};

export default Error;