import React from 'react';
import Banner from '../../Components/Banner/Banner';
import App from '../Apps/App';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className='main-container'>
            <Banner></Banner>
         <div className='mt-10'>
             <App></App>
             <div className='mt-5 flex justify-center'>
                <Link to={'/apps'} className='btn btn-secondary'>See all app</Link>
             </div>
         </div>
          
            
        </div>
    );
};

export default Home;